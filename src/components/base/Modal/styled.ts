import styled from '@emotion/styled';
import type { BackgroundProps, ContainerProps } from './types';
import { COLOR } from '@constants/colors';
import { MODAL_SIZE } from './types';

const StyledModalBackground = styled.div<BackgroundProps>`
  display: ${({ visible }): string => (visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: ${({ backgroundColor }): string => backgroundColor};
`;

const StyledModalContainer = styled.div<ContainerProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ size }): string => MODAL_SIZE[size].width};
  height: ${({ size }): string => MODAL_SIZE[size].height};
  background-color: ${({ color }): string => COLOR[color]};
  border-radius: 12px;
  padding: 5px;
  box-sizing: border-box;
`;

export { StyledModalBackground, StyledModalContainer };
