import styled from '@emotion/styled';
import { Input } from '@base';
import type { StyledInputProps } from './types';
import { COLOR } from '@constants';

const StyledContainer = styled.div`
  position: absolute;
  right: 30px;
  bottom: 10px;
`;

const StyledBot = styled.div`
  position: relative;
`;

const StyledTextBackground = styled.div`
  position: absolute;
  top: 10px;
  left: -300px;
  right: 0;
  margin: 0 auto;
  width: 200px;
`;

const StyledSpeechBubble = styled.div`
  position: absolute;
  background: ${COLOR.BASIC_WHITE};
  border-radius: 20px;
  padding: 18px;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-left-color: ${COLOR.BASIC_WHITE};
    border-right: 0;
    border-bottom: 0;
    margin-top: -10px;
    margin-right: -20px;
  }
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

export {
  StyledContainer,
  StyledBot,
  StyledTextBackground,
  StyledInputBackground,
  StyledInput,
  StyledSpeechBubble
};
