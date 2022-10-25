import { NextPage } from "next";
import {
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoLogoGithub,
  IoCalendarClearOutline,
  IoMailOutline,
  IoFitnessSharp,
} from "react-icons/io5";

import Layout from "components/layouts/Article";
import Section from "components/common/section";
import Paragraph from "components/common/paragraph";
import { ProfileImage } from "components/home/styled";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Contents from "components/home/Contents";

const Home: NextPage<{ locale: string }> = ({ locale }) => {
  const { t } = useTranslation("common");

  const getAge = () => {
    const bornAge = locale !== "ko" ? -1 : +1;
    return new Date().getFullYear() - 1997 + bornAge;
  };

  const handleClickGithub = () => {
    window.open("https://github.com/asherkuu");
  };
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          Hello, I&apos;m a Front-End Developer !
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              {t("name")}
            </Heading>
            <Box m="15px 0 20px 0">
              <List>
                <ListItem>
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoFitnessSharp} />}
                  >
                    South of Korea
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoCalendarClearOutline} />}
                  >
                    1997.12.20 / {getAge()} {t("age")}
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoMailOutline} />}
                  >
                    kyuseon39@gmail.com
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoLogoGithub} />}
                    onClick={handleClickGithub}
                  >
                    Github/asherkuu
                  </Button>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
            borderRadius="999px"
          >
            {/* <ProfileImage
              width="200"
              height="200"
              src="/images/asher.webp"
              alt="Profile image"
            /> */}
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Intro
          </Heading>
          <Paragraph>{t("Intro")}</Paragraph>
        </Section>

        <Contents t={t} />
      </Container>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }) => {
  return {
    props: { locale, ...(await serverSideTranslations(locale, ["common"])) },
  };
};

export default Home;
