/* eslint-disable @typescript-eslint/no-magic-numbers */
import styled from '@emotion/styled';
import { COLOR } from '@constants';
import type { StyledContainerProps } from './types';

const StyledContainer = styled.div<StyledContainerProps>`
  visibility: ${({ visible }): string => (visible ? 'visible' : 'hidden')};
  position: absolute;
  top: 10px;
  left: -300px;
  right: 0;
  margin: 0 auto;
  width: 200px;
  animation: showSpeech ${({ displayTime }): number => displayTime / 1000}s
    ease-in-out infinite;

  @keyframes showSpeech {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
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

export { StyledContainer, StyledSpeechBubble };
