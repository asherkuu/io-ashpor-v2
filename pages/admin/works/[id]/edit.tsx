import React, { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { GetServerSideProps, NextPage } from "next";
import { useForm } from "react-hook-form";
import {
  Button,
  Box,
  Input,
  Textarea,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import Layout from "components/layouts/Article";
import { Select } from "@chakra-ui/react";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import { useRouter } from "next/router";

import { useGetPortfolioById, useUpdatePortfolio } from "actions/portfolios";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { EditorWrap, FormInputWrap } from "components/admin/styled";
import IPortfolio from "interfaces/portfolio";
const Editor = dynamic(import("components/editor"), {
  ssr: false,
  loading: () => <span>Loading...</span>,
});

const SelectBar = ({ t, value, setValue }) => (
  <Select
    placeholder="Select project option"
    defaultValue={value}
    onChange={(e) => setValue("jobTitle", e.target.value)}
  >
    <option value="project">{t("Work.working")}</option>
    <option value="toy">{t("Work.toy")}</option>
  </Select>
);

const Index: NextPage<{ param: string; locale: string }> = ({
  param,
  locale,
}) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const [startDate, setStartDate] = useState<Date>(null);
  const [endDate, setEndDate] = useState<Date>(null);
  const { data: initialData }: { data: IPortfolio } =
    useGetPortfolioById(param);
  const [updatePortfolio, { error }]: any = useUpdatePortfolio();

  const { register, handleSubmit, setValue, getValues } = useForm<any>({
    defaultValues: {},
  });

  const initValue = () => {
    setValue("jobTitle", initialData.jobTitle);
    setValue("startDate", initialData.startDate);
    setValue("endDate", initialData.endDate);
    setValue("ko.title", initialData.ko.title);
    setValue("ko.desc", initialData.ko.desc);
    setValue("ko.content", initialData.ko.content);
    setValue("en.title", initialData.en.title);
    setValue("en.desc", initialData.en.desc);
    setValue("en.content", initialData.en.content);
    setStartDate(new Date(initialData.startDate));
    setEndDate(new Date(initialData.endDate));
  };

  useEffect(() => {
    initialData && initValue();
  }, [initialData]);

  // 컨텐츠 변경이벤트
  const handleContent = useCallback(
    (value, name) => {
      setValue(name, value);
    },
    [register]
  );

  const handleDateChange = (dateType, setDate) => (date) => {
    setValue(dateType, date);
    setDate(date);
  };

  const _handleSubmit = async (data) => {
    try {
      await updatePortfolio(param, data).then((res) => {
        toast.success("Done !!", { autoClose: 2000 });
        // @ts-ignore
        router.push("/works/[id]", `/works/${initialData._id}`);
      });
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Layout title="New Post">
      {initialData && (
        <form onSubmit={handleSubmit(_handleSubmit)}>
          <FormInputWrap>
            <Box mt={30} mb={2} gap={3}>
              <Button type="submit" colorScheme="teal" p="0 30px">
                Submit
              </Button>

              <SelectBar
                t={t}
                value={getValues("jobTitle") || initialData.jobTitle}
                setValue={setValue}
              />
            </Box>
            <Box mb={2} gap={3}>
              <div>
                <InputGroup>
                  <InputLeftAddon pointerEvents="none" children="Start" />
                  <DatePicker
                    className="date-picker"
                    showYearDropdown
                    selected={startDate}
                    onChange={handleDateChange("startDate", setStartDate)}
                  />
                </InputGroup>
              </div>
              <div>
                <InputGroup>
                  <InputLeftAddon pointerEvents="none" children="End" />
                  <DatePicker
                    className="date-picker"
                    showYearDropdown
                    selected={endDate}
                    onChange={handleDateChange("endDate", setEndDate)}
                  />
                </InputGroup>
              </div>
            </Box>
            <div>
              <div>
                <Input
                  {...register("ko.title")}
                  id="ko.title"
                  name="ko.title"
                  placeholder="Title"
                  size="md"
                />
                <Textarea {...register("ko.desc")} placeholder="Description" />
              </div>
              <div>
                <Input
                  {...register("en.title")}
                  id="en.title"
                  name="en.title"
                  placeholder="English Title"
                  size="md"
                />
                <Textarea
                  {...register("en.desc")}
                  placeholder="English Description"
                />
              </div>
            </div>
          </FormInputWrap>

          <EditorWrap>
            <Box className="br-t">
              <Editor
                onChange={(value) => handleContent(value, "ko.content")}
                editValues={getValues("ko.content")}
              />
            </Box>
            <Box className="br-t">
              <Editor
                onChange={(value) => handleContent(value, "en.content")}
                editValues={getValues("en.content")}
              />
            </Box>
          </EditorWrap>
        </form>
      )}
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
