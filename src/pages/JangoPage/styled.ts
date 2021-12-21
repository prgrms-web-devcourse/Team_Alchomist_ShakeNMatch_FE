import { TextButton } from '@compound';
import styled from '@emotion/styled';

const StyledIngredientContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTextButton = styled(TextButton)`
  position: absolute;
  top: 10px;
  left: 20%;
`;

export { StyledIngredientContainer, StyledTextButton };
