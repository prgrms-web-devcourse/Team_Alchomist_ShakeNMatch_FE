import { TEXT_SIZE } from '@constants/size';
import styled from '@emotion/styled';
import type { TextProps } from './types';

const Text = styled.span<TextProps>`
  font-size: ${({ size }): string =>
    size ? `${TEXT_SIZE[size]}px` : `${TEXT_SIZE['md']}px`};
  color: ${({ color }): string | undefined => color};
  font-weight: ${({ bold }): string | boolean | undefined => bold && '600'};
  display: ${({ block }): string => (block ? 'block' : 'inline')};
`;

export { Text };
