import styled from '@emotion/styled';
import type { BackgroundProps, ContainerProps } from './types';
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
  animation: show 0.2s ease-in forwards;

  @keyframes show {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

const StyledModalContainer = styled.div<ContainerProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ size }): string => MODAL_SIZE[size].width};
  height: ${({ size }): string => MODAL_SIZE[size].height};
  background-color: ${({ color }): string => color};
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export { StyledModalBackground, StyledModalContainer };
