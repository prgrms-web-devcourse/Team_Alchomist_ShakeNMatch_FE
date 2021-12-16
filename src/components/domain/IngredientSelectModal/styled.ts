import styled from '@emotion/styled';
import TextButton from '@compound/TextButton';
import TitleSectionContainer from '@domain/TitleSectionContainer';
import { Modal } from '@base';

const StyledModal = styled(Modal)`
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

const StyledTitleSectionContainer = styled(TitleSectionContainer)`
  padding-top: 20px;
`;

const StyledTextButton = styled(TextButton)`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
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
  StyledModal,
  StyledTitleSectionContainer,
  StyledTextButton,
  StyledTabContentContainer,
  StyledTextContainer
};
