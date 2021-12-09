import type { HTMLAttributes } from 'react';
import type { TextSizeKeys, ColorKeys } from '@models/types';

interface TitleSectionContainerProps extends HTMLAttributes<HTMLDivElement> {
  titleText?: string;
  titleSize?: TextSizeKeys;
  titleColor?: ColorKeys;
  bold?: boolean;
  dividerVisible?: boolean;
  dividerColor: ColorKeys;
  dividerWidth: string;
  dividerThickness?: string;
  gap?: string | number;
}

export type { TitleSectionContainerProps };
