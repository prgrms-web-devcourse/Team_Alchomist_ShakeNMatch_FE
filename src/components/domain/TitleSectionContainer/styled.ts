import styled from '@emotion/styled';
import { COLOR } from '@constants/colors';
import type { StyledLineProps } from './types';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLine = styled.hr<StyledLineProps>`
  display: block;
  border: none;
  visibility: ${({ visible }): string => (visible ? 'visible' : 'hidden')};
  width: ${({ width }): string =>
    width ? (typeof width === 'string' ? width : `${width}px`) : '100px'};
  height: ${({ height }): string =>
    height ? (typeof height === 'string' ? height : `${height}px`) : '1px'};
  background-color: ${({ color }): string =>
    color ? COLOR[color] : COLOR['DARK_GRAY']};
  margin: ${({ gap }): string =>
    gap ? (typeof gap === 'string' ? `${gap} 0` : `${gap}px 0`) : '5px 0'};
`;

export { StyledContainer, StyledLine };
