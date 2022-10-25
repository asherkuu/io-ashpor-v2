import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Layout from "components/layouts/Article";
import { Title } from "components/common/work";
import Viewer from "components/viewer";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { useGetPortfolioById } from "actions/portfolios";
import IPortfolio from "interfaces/portfolio";
import { Container, Badge } from "@chakra-ui/layout";
import Loading from "components/shares/Loading";
interface WorkDetailProps {
  param: string;
  locale: string;
}

const Index: NextPage<WorkDetailProps> = ({ param, locale }) => {
  const { t } = useTranslation("common");
  const { data, loading }: { data: IPortfolio; loading: boolean } =
    useGetPortfolioById(param);

  return (
    <Layout title={data && data[locale].title}>
      <Container>
        {loading && !data ? (
          <Loading />
        ) : (
          data && (
            <React.Fragment>
              <Title>{data[locale].title}</Title>

              <Badge mt="-4" mb="6" bgColor="white">
                {data.jobTitle === "toy" ? (
                  <>{t("Work.toy")}</>
                ) : (
                  <>{t("Work.working")}</>
                )}
              </Badge>

              <Viewer contents={data[locale].content} />
            </React.Fragment>
          )
        )}
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  locale: string;
  param: string;
}> = async ({ locale, query }) => {
  return {
    props: {
      param: query.id.toString(),
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Index;
