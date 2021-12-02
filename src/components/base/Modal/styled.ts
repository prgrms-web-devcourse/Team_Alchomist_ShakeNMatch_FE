import styled from '@emotion/styled';
import type { BackgroundProps, ContainerProps } from './types';
import { THEME_COLOR } from '@constants/color';
import { MODAL_SIZE } from '@constants/size';

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

const StyledModalContainer = styled.div<ContainerProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ size }): string =>
    size ? MODAL_SIZE[size].width : MODAL_SIZE.md.width};
  height: ${({ size }): string =>
    size ? MODAL_SIZE[size].height : MODAL_SIZE.md.height};
  background-color: ${({ color }): string =>
    color ? color : THEME_COLOR.Primary};
`;

export { StyledModalBackground, StyledModalContainer };
