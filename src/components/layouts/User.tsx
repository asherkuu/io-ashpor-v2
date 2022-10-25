import React from "react";
import { useRouter } from "next/router";
import { Box, Image } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { AiOutlineUser } from "react-icons/ai";

const UserIcon = ({ src }) => {
  return (
    <Box w={10} h={10}>
      <Image src={src} borderRadius="0.375rem" alt="Profile image" />
    </Box>
  );
};

const Login = () => {
  return (
    <a href="/api/v1/login">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        w={10}
        h={10}
        border="1px solid #e2e8f0"
        borderRadius="0.375rem"
      >
        <AiOutlineUser />
      </Box>
    </a>
  );
};

const User = ({ user }) => {
  const router = useRouter();

  return (
    <Box m="0 0 0 3px">
      {user ? (
        <Menu isLazy>
          <MenuButton
            as={IconButton}
            icon={<UserIcon src={user.picture} />}
            aria-label="locales"
            variant="outline"
          />
          <MenuList>
            <MenuItem onClick={() => {}}>{user.name}</MenuItem>
            <MenuItem onClick={() => {}}>{user.nickname}</MenuItem>
            <a href="/api/v1/logout">
              <MenuItem>Logout</MenuItem>
            </a>
          </MenuList>
        </Menu>
      ) : (
        <Login />
      )}
    </Box>
  );
};

export default User;
