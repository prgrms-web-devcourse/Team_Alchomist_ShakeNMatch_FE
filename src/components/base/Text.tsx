import type { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

import type { SizeType } from '@/types';
import { TEXT_SIZE } from '@utils/constants/size';

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  size?: SizeType;
  color?: string;
  bold?: boolean;
  block?: boolean;
}

const Text = styled.span<TextProps>`
  font-size: ${({ size }): string =>
    size ? `${TEXT_SIZE[size]}px` : `${TEXT_SIZE['md']}px`};
  color: ${({ color }): string | undefined => color};
  font-weight: ${({ bold }): string | boolean | undefined => bold && '600'};
  display: ${({ block }): string => (block ? 'block' : 'inline')};
`;

export default Text;
