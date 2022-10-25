import React, { FC } from "react";
import { NextPage } from "next";
import NextLink from "next/link";
import { Container, Heading, SimpleGrid, Button, Box } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

import { WorksLoader } from "components/shares/Loading/WorksLoader";
import Layout from "components/layouts/Article";
import Section from "components/common/section";
import { WorkGridItem } from "components/common/grid-item";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";

import { useGetPortfolioList } from "actions/portfolios";
import IPortfolio from "interfaces/portfolio";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import useGetUser from "actions/user";
import IUser from "interfaces/user";

import { isCheckRole } from "lib/helper";

interface ListItemProps {
  role?: "admin";
  data: IPortfolio[];
  locale: string;
}

const ListItem: FC<ListItemProps> = ({ role = "guest", data, locale }) => {
  return (
    <>
      {data &&
        data?.map((item) => (
          <Section key={item._id} delay={0.1}>
            <WorkGridItem
              id={item._id}
              title={item[locale].title}
              thumbnail={item.img.location}
            >
              {item[locale].desc}
            </WorkGridItem>

            {role && (
              <Box>
                <NextLink href={`/admin/works/${item._id}/edit`}>
                  <a>
                    <Button variant="ghost" colorScheme="teal">
                      <BsPencilFill />
                    </Button>
                  </a>
                </NextLink>
                <Button variant="ghost" colorScheme="teal">
                  <BsTrashFill />
                </Button>
              </Box>
            )}
          </Section>
        ))}
    </>
  );
};

const Works: NextPage<{ locale: string }> = ({ locale }) => {
  console.log(locale);
  const { data: user }: { data: IUser } = useGetUser();
  const { data, loading }: { data: IPortfolio[]; loading: boolean } =
    useGetPortfolioList();

  return (
    <Layout title="Works">
      <Container>
        <Heading
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          as="h3"
          fontSize={20}
          mb={4}
        >
          Works
          {user && isCheckRole(user) && (
            <NextLink href="/admin/works/new">
              <Button colorScheme="teal" variant="ghost" ml={5} width={15}>
                <EditIcon />
              </Button>
            </NextLink>
          )}
        </Heading>

        {loading && !data ? (
          <WorksLoader />
        ) : (
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            {data && (
              <ListItem role={isCheckRole(user)} data={data} locale={locale} />
            )}
          </SimpleGrid>
        )}
      </Container>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Works;
