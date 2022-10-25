import styled from "@emotion/styled";
import Section from "components/common/section";
import Image from "next/image";

export const Skills = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  & > div {
    display: flex;
    align-items: center;
  }
`;
export const ProfileImage = styled(Image)`
  border-radius: 999px !important;
  border: 2px solid var(--chakra-colors-teal-200) !important;
`;
export const WorkExpWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const WorkExpItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid var(--chakra-colors-teal-200);
  border-radius: 8px;
  padding: 16px;
`;
export const WorkExpHeader = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WorkExpTitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 500px) {
    gap: 0px;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const WorkExpDateLocationWrap = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 500px) {
    gap: 0px;
    flex-direction: column;
    align-items: flex-start;
  }
`;
