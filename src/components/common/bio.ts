import styled from "@emotion/styled";

export const BioSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-bottom: 5px;
  /* padding-left: 3.4em;
  text-indent: -3.4em; */
`;

export const BioYear = styled.span`
  display: flex;
  flex-direction: row;
  & > span:first-of-type {
    width: 50px;
    font-weight: bold;
  }

  & > span:last-of-type {
    width: 50px;
    font-weight: bold;
    margin-left: 5px;
  }
  /* min-width: 400px;
  font-weight: bold;
  margin-right: 1em; */
`;

export const BioIntro = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  outline: 2px solid transparent;
  outline-offset: 2px;
  width: auto;
  line-height: 1.2;
  border-radius: var(--chakra-radii-md);
  font-weight: var(--chakra-fontWeights-semibold);
  transition-property: var(--chakra-transition-property-common);
  transition-duration: var(--chakra-transition-duration-normal);
  height: var(--chakra-sizes-10);
  min-width: var(--chakra-sizes-10);
  font-size: var(--chakra-fontSizes-md);
  -webkit-padding-start: var(--chakra-space-4);
  padding-inline-start: var(--chakra-space-4);
  -webkit-padding-end: var(--chakra-space-4);
  padding-inline-end: var(--chakra-space-4);
  color: var(--chakra-colors-teal-600);
  background: var(--chakra-colors-transparent);

  span {
    margin-left: 10px;
  }
`;
