import styled from '@emotion/styled';
import type { CSSObject } from '@emotion/styled';
import type { StyledMotionWrapperProps } from './types';

const StyledContainer = styled.div`
  width: 630px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 22px;
  gap: 22px;
  overflow-y: scroll;
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
