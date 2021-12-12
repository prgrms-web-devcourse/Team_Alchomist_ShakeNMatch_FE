import styled from '@emotion/styled';
import type { StyledCarouselContainerProps } from './types';

const StyledCarouselContainer = styled.div<StyledCarouselContainerProps>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 630px;
  height: ${({ row }): string | undefined =>
    row === 'single' ? undefined : '300px'};
  justify-content: flex-start;
  gap: 30px;
  padding: 0 90px;
`;

export { StyledCarouselContainer };
