import React, { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

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

import "react-datepicker/dist/react-datepicker.css";

const Editor = dynamic(import("components/editor"), {
  ssr: false,
  loading: () => <span>Loading...</span>,
});

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { EditorWrap, FormInputWrap } from "components/admin/styled";
import FilePreview from "components/editor/FilePreview";
import withAuth from "hoc/withAuth";

interface IValue {
  jobTitle: string;
  title: string;
  engTitle: string;
  description: string;
  engDescription: string;
  startDate: Date;
  endDate: Date;
  content: string;
  engContent: string;
}

const SelectBar = ({ t, setValue }) => (
  <Select
    placeholder="Select project option"
    onChange={(e) => setValue("jobTitle", e.target.value)}
  >
    <option value="project">{t("Work.working")}</option>
    <option value="toy">{t("Work.toy")}</option>
  </Select>
);

const New: NextPage = () => {
  const { t } = useTranslation("common");

  const { register, handleSubmit, setValue, getValues } = useForm<any>({
    defaultValues: {},
  });

  const [startDate, setStartDate] = useState<Date>(null);
  const [endDate, setEndDate] = useState<Date>(null);
  const [file, setFile] = useState<File>(null);

  useEffect(() => {
    register("title");
    register("content");
    register("engContent");
    register("startDate");
    register("endDate");
  }, [register]);

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

  const _handleSubmit = async (value) => {
    const {
      jobTitle,
      title,
      engTitle,
      startDate,
      endDate,
      content,
      engContent,
      description,
      engDescription,
    }: IValue = value;

    const validText = (name) =>
      t("Form.valid_required", { field: t(`Variables.${name}`) });

    if (!jobTitle) return toast.error(validText("jobTitle"));
    if (!startDate) return toast.error(validText("startDate"));
    if (!endDate) return toast.error(validText("endDate"));
    if (!title) return toast.error(validText("korTitle"));
    if (!engTitle) return toast.error(validText("engTitle"));
    if (!description) return toast.error(validText("korDesc"));
    if (!engDescription) return toast.error(validText("engDesc"));
    if (!content) return toast.error(validText("korContents"));
    if (!engContent) return toast.error(validText("engContents"));
    if (!file) return toast.error(validText("file"));
  };

  return (
    <Layout title="New Post">
      <form onSubmit={handleSubmit(_handleSubmit)}>
        <FormInputWrap>
          <Box mt={30} mb={2} gap={3}>
            <Button type="submit" colorScheme="teal" p="0 30px">
              Submit
            </Button>

            <SelectBar t={t} setValue={setValue} />
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
                {...register("title")}
                id="title"
                name="title"
                placeholder="Title"
                size="md"
              />
              <Textarea
                {...register("description")}
                placeholder="Description"
              />
            </div>
            <div>
              <Input
                {...register("engTitle")}
                id="engTitle"
                name="engTitle"
                placeholder="English Title"
                size="md"
              />
              <Textarea
                {...register("engDescription")}
                placeholder="English Description"
              />
            </div>
          </div>
        </FormInputWrap>

        <EditorWrap>
          <Box>
            <Editor onChange={(value) => handleContent(value, "content")} />
          </Box>
          <Box>
            <Editor onChange={(value) => handleContent(value, "engContent")} />
          </Box>
          <Box>
            <div>
              <FilePreview setFile={setFile} />
            </div>
          </Box>
        </EditorWrap>
      </form>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }) => {
  return {
    props: { locale, ...(await serverSideTranslations(locale, ["common"])) },
  };
};

export default withAuth(New)("admin");
