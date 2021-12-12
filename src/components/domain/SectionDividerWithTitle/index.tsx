import { SectionDivider } from '@base';
import TitleSectionContainer from '@domain/TitleSectionContainer';
import type { ReactElement } from 'react';
import { Children } from 'react';
import { StyledSectionDividerContent } from './styled';
import type { SectionDividerWithTitleProps } from './types';

const SectionDividerWithTitle = ({
  children,
  titleColor,
  titleSize = 'md',
  titleText,
  bold,
  gap = '20px',
  alignItems = false
}: SectionDividerWithTitleProps): ReactElement => {
  const wrappedChildren = Children.toArray(children).map((element) => (
    <StyledSectionDividerContent>{element}</StyledSectionDividerContent>
  ));

  return (
    <TitleSectionContainer
      alignItems={alignItems}
      bold={bold}
      gap={gap}
      titleColor={titleColor}
      titleSize={titleSize}
      titleText={titleText}
    >
      <SectionDivider>{wrappedChildren}</SectionDivider>
    </TitleSectionContainer>
  );
};

export default SectionDividerWithTitle;
