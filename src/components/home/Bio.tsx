import React from "react";
import { Heading } from "@chakra-ui/react";
import Section from "components/common/section";
import { BioSection, BioYear } from "components/common/bio";
import { useTranslation } from "next-i18next";

const Bio = () => {
  const { t } = useTranslation("common");
  return (
    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        Bio
      </Heading>
      <BioSection>
        <BioYear>
          <span>16.12</span>
          <span>~</span>
          <span>18.09</span>
        </BioYear>
        {t("Bio.army")}
      </BioSection>
      <BioSection>
        <BioYear>
          <span>19.02</span>
          <span>~</span>
          <span>19.08</span>
        </BioYear>
        {t("Bio.study")}
      </BioSection>
      <BioSection>
        <BioYear>
          <span>19.09</span>
          <span>~</span>
          <span>20.08</span>
        </BioYear>
        {t("Bio.waterInfo")}
      </BioSection>
      <BioSection>
        <BioYear>
          <span>21.01</span>
          <span>~</span>
          <span>21.05</span>
        </BioYear>
        {t("Bio.sinaetmul")}
      </BioSection>
      <BioSection>
        <BioYear>
          <span>21.09</span> <span>~</span> <span>21.11</span>
        </BioYear>
        {t("Bio.abent")}
      </BioSection>
      <BioSection>
        <BioYear>
          <span>21.12</span> <span>~</span> <span>{t("now")}</span>
        </BioYear>
        {t("Bio.bss")}
      </BioSection>
    </Section>
  );
};

export default Bio;
