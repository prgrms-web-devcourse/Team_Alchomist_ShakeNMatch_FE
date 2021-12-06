import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';

interface StyledCarouselContainerProps extends HTMLAttributes<HTMLDivElement> {
  row: 'single' | 'double';
}

const StyledCarouselContainer = styled.div<StyledCarouselContainerProps>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 450px;
  height: ${({ row }): string | undefined =>
    row === 'single' ? undefined : '300px'};
  justify-content: flex-start;
  padding: 0 50px;
  gap: 30px;
  padding: 0 90px;
`;

// 임시 좌측 버튼
const TempButton1 = styled.button`
  width: 30px;
  height: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 30px;
`;
// 임시 우측 버튼
const TempButton2 = styled.button`
  width: 30px;
  height: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 30px;
`;

export { StyledCarouselContainer, TempButton1, TempButton2 };
