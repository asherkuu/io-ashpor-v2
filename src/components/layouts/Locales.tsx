import React from "react";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { AiOutlineGlobal } from "react-icons/ai";

const Locales = () => {
  const router = useRouter();

  const handleClickLocale = (locale) =>
    router.push(router.asPath, router.asPath, { locale });

  return (
    <Box m="0 0 0 3px">
      <Menu isLazy>
        <MenuButton
          as={IconButton}
          icon={<AiOutlineGlobal />}
          aria-label="locales"
          variant="outline"
        />
        <MenuList>
          <MenuItem onClick={() => handleClickLocale("ko")}>한국어</MenuItem>
          <MenuItem onClick={() => handleClickLocale("en")}>English</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Locales;
