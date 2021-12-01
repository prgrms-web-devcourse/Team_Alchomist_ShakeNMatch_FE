import styled from '@emotion/styled';
import { THEME_COLOR } from '@constants/color';
import type { BackgroundProps, ContainerProps } from './type';

const StyledModalBackground = styled.div<BackgroundProps>`
  display: ${({ visible }): string => (visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
`;

// prop에 대해서는 임의로 설정한 값을 추후 Default 값들로 변경 예정
const StyledModalContainer = styled.div<ContainerProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }): string => (width ? width : '100px')};
  height: ${({ height }): string => (height ? height : '100px')};
  background-color: ${({ color }): string =>
    color ? color : THEME_COLOR.primary};
`;

export { StyledModalBackground, StyledModalContainer };
