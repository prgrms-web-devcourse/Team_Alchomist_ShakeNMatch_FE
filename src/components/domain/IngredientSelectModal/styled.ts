import styled from '@emotion/styled';
import { TextButton } from '@compound';
import { Modal } from '@base';

const StyledModal = styled(Modal)`
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

const StyledTextButton = styled(TextButton)`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
  justify-items: center;
  gap: 10px;
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
  StyledSection,
  StyledTextButton,
  StyledTabContentContainer,
  StyledTextContainer
};
