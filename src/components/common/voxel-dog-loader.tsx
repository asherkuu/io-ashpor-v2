import { FC, forwardRef, LegacyRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import { ReactNode } from "typings";

export const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

export const DogContainer = forwardRef(
  ({ children }: { children: ReactNode }, ref): any => (
    <Box
      //@ts-ignore
      ref={ref}
      className="voxel-dog"
      m="auto"
      mt={["-20px", "-60px", "-120px"]}
      mb={["-40px", "-140px", "-200px"]}
      w={[280, 480, 580]}
      h={[280, 480, 580]}
      position="relative"
    >
      {children}
    </Box>
  )
);

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  );
};

export default Loader;
