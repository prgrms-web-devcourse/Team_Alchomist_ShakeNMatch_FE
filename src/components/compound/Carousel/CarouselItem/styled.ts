import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import type { CarouselItemProps } from './types';

const bounce = keyframes`
  0% {
    transform: translate(-50%,-50%);
    opacity: 0.7;
  }
  50% {
    transform: translate(-50%, calc(-50% - 3px));
  }
  100% {
    transform: translateY(-50%,-50%);
    opacity: 1;
  }
`;

const StyledContainer = styled.div<Pick<CarouselItemProps, 'backgroundColor'>>`
  display: ${({ hidden }): string => (hidden ? 'none' : 'grid')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 510px;
  height: 440px;
  background-color: ${({ backgroundColor }): string => backgroundColor};
  border-radius: 100px;
  box-shadow: inset -10px -10px 4px rgba(0, 0, 0, 0.25);
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  justify-items: center;
  align-items: center;
  transition: all 0.3s ease-in;
  animation: ${bounce} 0.3s ease-in-out;
  animation-play-state: ${({ hidden }): string => (hidden ? 'paused' : 'play')};

  & img,
  button {
    transition: all 0.3s ease-in;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

// 임시 이미지
const StyledImage = styled.img`
  width: 180px;
  height: 180px;
`;

// 임시 버튼
const StyledPrevButton = styled.button`
  width: 20px;
  height: 20px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  background-color: white;
  cursor: pointer;
  border: none;

  :disabled {
    cursor: default;
    opacity: 0.6;
  }

  &:hover:not(:disabled) {
    transition: none;
    opacity: 0.8;
  }
`;

const StyledNextButton = styled.button`
  width: 20px;
  height: 20px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  background-color: white;
  cursor: pointer;
  border: none;

  &:hover:not(:disabled) {
    transition: none;
    opacity: 0.8;
  }

  :disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

export {
  StyledContainer,
  StyledWrapper,
  StyledImage,
  StyledPrevButton,
  StyledNextButton
};
