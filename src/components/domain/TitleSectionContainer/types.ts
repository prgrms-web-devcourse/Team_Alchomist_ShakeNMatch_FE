import type { HTMLAttributes } from 'react';
import type { ColorType, ITextSize } from '@models/types';

interface TitleSectionContainerProps extends HTMLAttributes<HTMLDivElement> {
  titleText?: string;
  titleSize?: ITextSize;
  titleColor?: ColorType;
  bold?: boolean;
  dividerVisible?: boolean;
  dividerColor?: ColorType;
  dividerWidth?: string;
  dividerThickness?: string;
  gap?: string | number;
  alignItems?: boolean;
}

interface StyledLineProps {
  visible?: boolean;
  width?: string | number;
  height?: string | number;
  gap?: string | number;
  color: ColorType;
}

export type { TitleSectionContainerProps, StyledLineProps };
