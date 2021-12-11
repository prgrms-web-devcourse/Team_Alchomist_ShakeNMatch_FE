import styled from '@emotion/styled';
import TextButton from '@compound/TextButton';
import TitleSectionContainer from '@domain/TitleSectionContainer';

const StyledTitleSectionContainer = styled(TitleSectionContainer)`
  padding-top: 20px;
`;

const StyledTextButton = styled(TextButton)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledTabContentContainer = styled.div`
  position: relative;
  height: 100%;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  width: 720px;
`;

export {
  StyledTitleSectionContainer,
  StyledTextButton,
  StyledTabContentContainer,
  StyledTextContainer
};
