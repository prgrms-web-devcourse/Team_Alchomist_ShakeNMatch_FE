import type { TitleSectionContainerProps } from '@domain/TitleSectionContainer/types';
import type { ReactChild } from 'react';

interface SectionDividerWithTitleProps
  extends Pick<
    TitleSectionContainerProps,
    'titleColor' | 'titleText' | 'titleSize' | 'gap' | 'bold' | 'alignItems'
  > {
  children: ReactChild | ReactChild[];
}

export type { SectionDividerWithTitleProps };
