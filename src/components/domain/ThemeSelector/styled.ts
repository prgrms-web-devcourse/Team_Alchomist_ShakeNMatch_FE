import styled from '@emotion/styled';

const SectionDividerContent = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 100px;

  &:first-of-type {
    justify-content: flex-end;
  }
  &:nth-of-type(2) {
    justify-content: flex-start;
  }
`;

export { SectionDividerContent };
