import { FC } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Box, Container } from "@chakra-ui/react";

import NavBar from "./Navbar";
import Footer from "../common/footer";
import VoxelDogLoader from "../common/voxel-dog-loader";

import useGetUser from "actions/user";
import { ReactNode } from "typings";

const LazyVoxelDog = dynamic(() => import("../common/voxel-dog"), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

interface MainProps {
  children: ReactNode;
  router: any;
}

const Main: FC<MainProps> = ({ children, router }) => {
  const { data, error, loading } = useGetUser();

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Asher's homepage" />
        <meta name="author" content="Asher Kim" />
        <meta name="author" content="asher" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Asher Kim's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Asher Kim - Homepage</title>
      </Head>

      <NavBar path={router.asPath} user={data} loading={loading} />

      {!router.asPath.includes("admin") ? (
        <Container maxW="container.md" pt={24}>
          {/* <LazyVoxelDog /> */}
          {children}
          <Footer />
        </Container>
      ) : (
        <Container maxW="100vw" pt={14}>
          {children}
        </Container>
      )}
    </Box>
  );
};

export default Main;
