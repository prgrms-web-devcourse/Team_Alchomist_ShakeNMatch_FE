import styled from '@emotion/styled';
import { Input } from '@base';
import type { StyledInputProps } from './types';

const StyledContainer = styled.div`
  position: absolute;
  right: 30px;
  bottom: 10px;
`;

const StyledBot = styled.div`
  position: relative;
`;

const StyledInputBackground = styled.div`
  background-color: white;
  position: absolute;
  top: 20px;
  left: -300px;
  right: 0;
  margin: 0 auto;
  width: 200px;
`;

const StyledInput = styled(Input)<StyledInputProps>`
  display: ${({ isVisible }): string => (isVisible ? 'block' : 'none')};
`;

export { StyledContainer, StyledBot, StyledInputBackground, StyledInput };
