import type { SectionDividerProps } from '@base/SectionDivider/types';
import type { TitleSectionContainerProps } from '@domain/TitleSectionContainer/types';
import type { ReactChild } from 'react';

interface SectionDividerWithTitleProps
  extends Pick<
      TitleSectionContainerProps,
      'titleColor' | 'titleText' | 'titleSize' | 'gap' | 'bold' | 'alignItems'
    >,
    Pick<SectionDividerProps, 'ratio' | 'dividerOptions'> {
  children: ReactChild | ReactChild[];
  showContentsDivider?: boolean;
}

export type { SectionDividerWithTitleProps };
