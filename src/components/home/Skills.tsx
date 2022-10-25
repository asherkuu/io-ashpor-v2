import React from "react";
import { Heading, Box, Button, Icon } from "@chakra-ui/react";
import Section from "components/common/section";
import { IoLogoReact, IoLogoSass } from "react-icons/io5";
import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiCss3,
  SiJquery,
  SiAmazonaws,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiMobx,
} from "react-icons/si";

const Skills = () => {
  return (
    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        Skills
      </Heading>
      <div>
        <strong>
          <span>Front-end</span>
        </strong>
      </div>
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<Icon as={IoLogoReact} />}
      >
        React
      </Button>
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<Icon as={SiNextdotjs} />}
      >
        NextJs
      </Button>
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<Icon as={IoLogoReact} />}
      >
        React Native
      </Button>
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<Icon as={SiTypescript} />}
      >
        Typescript
      </Button>
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<Icon as={SiJquery} />}
      >
        jQuery
      </Button>
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<Icon as={SiCss3} />}
      >
        CSS
      </Button>
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<Icon as={IoLogoSass} />}
      >
        SASS
      </Button>

      <Box mt="4">
        <strong>
          <span>State Management Tools</span>
        </strong>
      </Box>

      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<Icon as={SiRedux} />}
      >
        Redux
      </Button>
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<Icon as={SiRedux} />}
      >
        Recoil
      </Button>
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<Icon as={SiMobx} />}
      >
        Mobx
      </Button>

      <Box mt="4">
        <strong>
          <span>Back-end</span>
        </strong>
      </Box>

      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<Icon as={SiAmazonaws} />}
      >
        AWS
      </Button>
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<Icon as={SiNodedotjs} />}
      >
        NodeJs
      </Button>
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<Icon as={SiMongodb} />}
      >
        MongoDB
      </Button>
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<Icon as={SiMysql} />}
      >
        MySql
      </Button>
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<Icon as={SiOracle} />}
      >
        Oracle
      </Button>
    </Section>
  );
};

export default Skills;
