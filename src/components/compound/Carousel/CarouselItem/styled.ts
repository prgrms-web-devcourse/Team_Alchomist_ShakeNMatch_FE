import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import type { CarouselItemProps } from './types';
import { CAROUSEL_SIZE } from './types';

const bounce = keyframes`
  0% {
    opacity: 0.7;
    transform: translate(0, -5px);
  },
  45% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
  }
`;

const StyledContainer = styled.div<
  Required<Pick<CarouselItemProps, 'backgroundColor' | 'selected'>>
>`
  display: ${({ selected }): string => (selected ? 'grid' : 'none')};
  width: ${CAROUSEL_SIZE.width};
  height: ${CAROUSEL_SIZE.height};
  background-color: ${({ backgroundColor }): string => backgroundColor};
  border-radius: 70px;
  box-shadow: inset -3px -3px 4px rgba(0, 0, 0, 0.25);
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  justify-items: center;
  align-items: center;
  animation: ${bounce} 0.3s ease-in-out;
  animation-play-state: ${({ selected }): string =>
    selected ? 'running' : 'paused'};
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
  user-select: none;
`;

export { StyledContainer, StyledWrapper };
