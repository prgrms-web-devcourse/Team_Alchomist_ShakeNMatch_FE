import { COLOR } from '@constants';
import styled from '@emotion/styled';
import type { ColorType } from '@models';
import type { TextProps } from './types';
import { TEXT_WEIGHT, TEXT_SIZE } from '@utils/constants';

const StyledText = styled.span<TextProps>`
  font-size: ${({ size }): string =>
    size ? `${TEXT_SIZE[size]}` : `${TEXT_SIZE.md}`};
  color: ${({ color }): ColorType => (color ? COLOR[color] : COLOR.BLACK)};
  font-weight: ${({ bold }): string =>
    bold ? TEXT_WEIGHT.bold : TEXT_WEIGHT.normal};
  display: ${({ block }): string => (block ? 'block' : 'inline')};
`;

export { StyledText };
