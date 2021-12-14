import { SectionDivider } from '@base';
import { HEADER_HEIGHT } from '@constants/headerHeight';
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
  gap = '0px',
  width,
  height,
  alignItems = true,
  ratio = [1, 1],
  showContentsDivider = false,
  dividerOptions = { color: 'DARK_GRAY', size: 1 }
}: SectionDividerWithTitleProps): ReactElement => {
  const wrappedChildren = Children.toArray(children).map((element) => (
    <StyledSectionDividerContent alignItems={alignItems}>
      {element}
    </StyledSectionDividerContent>
  ));

  return (
    <TitleSectionContainer
      alignItems={alignItems}
      bold={bold}
      gap={gap}
      style={{ paddingTop: HEADER_HEIGHT }}
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
