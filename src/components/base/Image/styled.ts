import styled from '@emotion/styled';
import type { StyledImgProps } from './types';

const StyledImg = styled.img<StyledImgProps>`
  display: ${({ block }): string | undefined => (block ? 'block' : undefined)};
  object-fit: ${({ mode }): string => (mode ? mode : 'cover')};
  width: ${({ width }): string =>
    typeof width === 'string' ? width : `${width}px`};
  height: ${({ height }): string =>
    typeof height === 'string' ? height : `${height}px`};
`;

export { StyledImg };
