import styled from '@emotion/styled';
import type { CSSObject } from '@emotion/styled';
import type { StyledMotionWrapperProps } from './types';
import { COLOR } from '@constants';

const StyledContainer = styled.div`
  width: 630px;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-auto-rows: min-content;
  padding: 22px 22px;
  gap: 5px;
  overflow-y: scroll;
  border-radius: 10px;
  box-shadow: inset 0 -2px 5px -4px ${COLOR.BLACK};
  border-bottom: 1px solid ${COLOR.IVORY};
  z-index: 3;
`;

const delayTime = 100;
const StyledMotionWrapper = styled.div<StyledMotionWrapperProps>`
  @keyframes appearDrop {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    50% {
      opacity: 1;
      transform: translateY(0);
    }
    80% {
      opacity: 1;
      transform: translateY(-10%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  opacity: 0;
  display: inline-block;
  ${({ resultIndex }): CSSObject => ({
    animation: `0.5s ease-out ${
      resultIndex * delayTime
    }ms 1 appearDrop forwards`
  })};
`;

export { StyledContainer, StyledMotionWrapper };
