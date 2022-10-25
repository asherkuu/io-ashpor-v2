import React from "react";
import { Link, Heading, Button, List, ListItem, Icon } from "@chakra-ui/react";
import { IoLogoInstagram, IoLogoGithub, IoLogoVimeo } from "react-icons/io5";
import { FiCodesandbox } from "react-icons/fi";
import Section from "components/common/section";

const OnTheWeb = () => {
  return (
    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        On The Web / Info
      </Heading>
      <List>
        <ListItem>
          <Link href="https://github.com/asherkuu" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoGithub} />}
            >
              @asherkuu
            </Button>
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://instagram.com/_8sher" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoInstagram} />}
            >
              @_8sher
            </Button>
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://velog.io/@ashekruu/" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoVimeo} />}
            >
              asherkuu.log
            </Button>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            href="https://codesandbox.io/search?query=kyuseon39&page=1&configure%5BhitsPerPage%5D=12"
            target="_blank"
          >
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={FiCodesandbox} />}
            >
              kyuseon39
            </Button>
          </Link>
        </ListItem>
      </List>
    </Section>
  );
};

export default OnTheWeb;
