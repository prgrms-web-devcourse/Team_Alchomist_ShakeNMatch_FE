import { COLOR } from '@constants';
import type { CSSObject } from '@emotion/react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import type { GageProps, GlassProps } from './types';

const FULL_DEGREE = 360;

const flow = keyframes`
  0% {
  }
  45% {
    top: 0;
  }
  100% {
    top: 100%;
  }
`;

const shake = keyframes`
  0% {
    transform: rotate(10deg);
  }
  25% {
    transform: rotate(15deg);
  }
  50%{
    transform: rotate(10deg);
  }
  75%{
    transform: rotate(5deg);
  }
  100%{
    transform: rotate(10deg);
  }
`;

const Glass = styled.div<GlassProps>`
  position: relative;
  border-right: 2px solid ${COLOR.LIGHT_WHITE};
  border-left: 2px solid ${COLOR.LIGHT_WHITE};
  border-bottom: 3px solid ${COLOR.LIGHT_WHITE};
  border-radius: 2px 2px 5px 5px;
  width: ${({ width }): string => width};
  height: ${({ height }): string => height};
  box-shadow: 0px 0.5px 3px -1px ${COLOR.BLUE};
  background: linear-gradient(
    to right,
    ${COLOR.LIGHT_WHITE} 70%,
    ${COLOR.BASIC_WHITE},
    ${COLOR.LIGHT_WHITE} 80%
  );
  filter: brightness(1.2);
  /* transform: rotate(45deg); */
  overflow: hidden;
  ${({ currentNum, fulfilledNum }): CSSObject | false =>
    currentNum === fulfilledNum && {
      boxShadow: `0 0 50px 0px ${COLOR.ORANGE}`,
      transition: 'box-shadow 0.8s ease-in'
    }}
  transform: rotate(10deg);

  &:hover {
    animation: ${shake} 0.3s ease-in-out 2;

    & > div:nth-of-type(2) {
      animation-duration: 1.5s;
    }
  }
`;
const WaterFlow = styled.div<GlassProps>`
  position: absolute;
  background: linear-gradient(
    140deg,
    ${COLOR.BASIC_WHITE},
    3px,
    ${COLOR.ORANGE}
  );
  filter: ${({ currentNum, fulfilledNum }): string =>
    `hue-rotate(${(FULL_DEGREE * currentNum) / fulfilledNum}deg)`};
  width: 8px;
  height: ${({ height }): string => height};
  top: -102%;
  right: 0;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  z-index: 1;
  animation: ${flow} 1s ease-in-out infinite;
  animation-play-state: paused;
`;

const waterLikeAnimation = keyframes`
  25%{
    transform: skew(2deg, 2deg) scale(1.05); 
  }
  50% {
    transform: skew(0,0) scale(1);
  }
  75%{
    transform: skew(-2deg, -3deg) scale(1.05);  
  }
`;

const Gage = styled.div<GageProps>`
  position: absolute;
  width: ${({ width }): string => `calc(${width} + 50%)`};
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  height: ${({ height, currentNum, fulfilledNum }): string =>
    `calc(${height} * ${currentNum} / ${fulfilledNum} + 15px)`};
  bottom: -20px;
  left: -25%;
  transition: height 0.2s ease-in-out, filter 0.6s ease-in-out;
  animation: ${waterLikeAnimation} 3s linear infinite;
  background: linear-gradient(${COLOR.ORANGE}, ${COLOR.STRONG_PINK});
  filter: ${({ currentNum, fulfilledNum }): string =>
    `hue-rotate(${(FULL_DEGREE * currentNum) / fulfilledNum}deg)`};
  z-index: 2;
`;

export { Glass, WaterFlow, Gage };
