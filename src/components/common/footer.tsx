import { Box, Button, Icon, Link } from "@chakra-ui/react";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <Box alignItems="center" opacity={0.4} fontSize="sm">
        &copy; 2022 Made By Asher Kim. All Rights Reserved.
      </Box>
      <Box alignItems="center" opacity={0.4} fontSize="sm">
        Insfired By
        <Link href="https://instagram.com/craftzdog" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={IoLogoInstagram} />}
          >
            @craftzdog
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Footer;
