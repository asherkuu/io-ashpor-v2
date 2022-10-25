import Logo from "../shares/logo";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";

import ThemeToggleButton from "../common/theme-toggle-button";
import { ReactNode } from "typings";
import { FC } from "react";
import Locales from "./Locales";
import User from "./User";

interface LinkItemProps {
  href: string;
  path: string;
  _target?: any;
  display?: string;
  alignItems?: string;
  style?: any;
  pl?: number;
  children: ReactNode;
}
const LinkItem: FC<LinkItemProps> = ({
  href,
  path,
  _target,
  children,
  ...props
}) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const router = useRouter();
  const { path, user, loading } = props;

  return (
    <Box
      display="flex"
      justifyContent="center"
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Box
        display="flex"
        p={2}
        width="100%"
        maxW="container.md"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          {/* <LinkItem href="/codes" path={path}>
            Codes
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem> */}
          <LinkItem
            href="https://github.com/asherkuu/io-ashpor"
            _target="_blank"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box alignItems="right">
          <Box display="flex" alignItems="right">
            <ThemeToggleButton />
            <Locales />
            <User user={user || null} />

            <Box ml={1} display={{ base: "inline-block", md: "none" }}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <NextLink href="/" passHref>
                    <MenuItem as={Link}>Main</MenuItem>
                  </NextLink>
                  <NextLink href="/works" passHref>
                    <MenuItem as={Link}>Works</MenuItem>
                  </NextLink>
                  {/* <NextLink href="/codes" passHref>
                  <MenuItem as={Link}>Codes</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink> */}
                  <MenuItem as={Link} href="https://github.com/asher/io-ashpor">
                    View Source
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
