import React from "react";
import Section from "components/common/section";
import {
  Heading,
  ListItem,
  UnorderedList,
  Text,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import {
  WorkExpDateLocationWrap,
  WorkExpHeader,
  WorkExpTitleWrap,
  WorkExpItemWrap,
  WorkExpWrap,
} from "./styled";

const WorkExp = () => {
  const { t } = useTranslation("common");

  const data = [
    {
      id: 0,
      title: "datamoa",
      position: "Full Stack Developer",
      date: {
        startYear: 2021,
        startDate: 9,
        endYear: 2021,
        endDate: 12,
      },
      location: "uiwang",
      works: [
        {
          id: 0,
          desc: "datamoa.1",
        },
        { id: 1, desc: "datamoa.2" },
        { id: 2, desc: "datamoa.3" },
        { id: 3, desc: "datamoa.4" },
        { id: 4, desc: "datamoa.5" },
      ],
    },
  ];

  return (
    <Section delay={0.1}>
      <Flex justify="space-between" align="center">
        <Heading as="h3" variant="section-title">
          Work Experiences
        </Heading>
        <Box>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} h={8}>
              More...
            </Button>
          </NextLink>
        </Box>
      </Flex>

      <WorkExpWrap>
        {data.map((item) => (
          <WorkExpItemWrap key={item.id}>
            <WorkExpHeader>
              <WorkExpTitleWrap>
                <Text fontSize={20} fontWeight={600}>
                  {t(`work-exp.${item.title}`)}
                </Text>
                <Text fontSize={18} fontWeight={500}>
                  {item.position}
                </Text>
              </WorkExpTitleWrap>
              <WorkExpDateLocationWrap>
                <Text fontSize={14}>
                  {t(`date.${item.date.startDate}`) + item.date.startYear}
                  {" - " + t(`date.${item.date.endDate}`) + item.date.endYear}
                </Text>
                <Text fontSize={14}>{t(`location.${item.location}`)}</Text>
              </WorkExpDateLocationWrap>
            </WorkExpHeader>
            <UnorderedList>
              {item.works.map((work) => (
                <ListItem key={work.id}>
                  {t(`work-exp-work.${work.desc}`)}
                </ListItem>
              ))}
            </UnorderedList>
          </WorkExpItemWrap>
        ))}
      </WorkExpWrap>
    </Section>
  );
};

export default WorkExp;
