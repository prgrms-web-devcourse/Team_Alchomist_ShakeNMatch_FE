import { COLOR } from '@constants';
import styled from '@emotion/styled';
import type { ColorType } from '@models';
import type { TextProps } from './types';
import { TEXT_WEIGHT, TEXT_SIZE } from '@utils/constants';

const StyledText = styled.span<TextProps>`
  font-style: ${({ italic }): string => (italic ? 'italic' : 'normal')};
  font-size: ${({ size }): string =>
    size ? `${TEXT_SIZE[size]}` : `${TEXT_SIZE.md}`};
  background-color: ${({ backgroundColor }): ColorType =>
    backgroundColor ? COLOR[backgroundColor] : COLOR.TRANSPARENT};
  color: ${({ color }): ColorType => (color ? COLOR[color] : COLOR.BLACK)};
  font-weight: ${({ bold }): string =>
    bold ? TEXT_WEIGHT.bold : TEXT_WEIGHT.normal};
  display: ${({ block }): string => (block ? 'block' : 'inline')};
  line-height: 1.6;
  transition: color 0.1s ease-in-out;
  border-radius: 5px;
  letter-spacing: 0.1rem;
`;

export { StyledText };
