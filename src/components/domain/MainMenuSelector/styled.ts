import { COLOR } from '@constants';
import styled from '@emotion/styled';
import type { StyledMenuContainerProps } from './types';

const StyledMainMenuWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  & > .menuContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const StyledThemeContainer = styled.div<StyledMenuContainerProps>`
  position: relative;
  background-color: ${COLOR.STRONG_PINK};
  border-radius: 50px;
  cursor: ${({ selected }): string => (selected ? 'default' : 'pointer')};
  ${({ selected }): string =>
    selected
      ? `& .textWrapper {
      transform: translate(0,0);
      transition: transform 0.5s 600ms ease-in-out
    }`
      : `&:hover {
      & .textWrapper {
        transform: translate(-80%, 0);
        transition: transform 3s 600ms ease-in-out;
      }
    }`}
`;

const StyledJangoContainer = styled.div<StyledMenuContainerProps>`
  position: relative;
  background-color: ${COLOR.NAVY};
  border-radius: 50px;
  cursor: ${({ selected }): string => (selected ? 'default' : 'pointer')};
  ${({ selected }): string =>
    selected
      ? `& .textWrapper {
      transform: translate(0,0);
      transition: transform 0.5s 600ms ease-in-out
    }`
      : `&:hover {
      & .textWrapper {
        transform: translate(70%, 0);
        transition: transform 3s 600ms ease-in-out;
      }
    }`}
`;

const StyledThemeTextWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translate(-100%, 0);
`;

const StyledJangoTextWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 50%;
  transform: translate(90%, 0);
`;

export {
  StyledMainMenuWrapper,
  StyledThemeContainer,
  StyledJangoContainer,
  StyledThemeTextWrapper,
  StyledJangoTextWrapper
};
