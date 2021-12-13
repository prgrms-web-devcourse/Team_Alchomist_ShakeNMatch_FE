import { SectionDivider } from '@base';
import TitleSectionContainer from '@domain/TitleSectionContainer';
import type { ReactElement } from 'react';
import { Children } from 'react';
import { StyledSectionDividerContent } from './styled';
import type { SectionDividerWithTitleProps } from './types';

const SectionDividerWithTitle = ({
  children,
  titleColor = 'BLACK',
  titleSize = 'md',
  titleText,
  bold,
  gap = '20px',
  width,
  height,
  alignItems = false,
  ratio = [1, 1],
  showContentsDivider = false,
  dividerOptions = { color: 'DARK_GRAY', size: 1 }
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
      <SectionDivider
        dividerOptions={dividerOptions}
        height={height}
        ratio={ratio}
        showDivider={showContentsDivider}
        width={width}
      >
        {wrappedChildren}
      </SectionDivider>
    </TitleSectionContainer>
  );
};

export default SectionDividerWithTitle;
