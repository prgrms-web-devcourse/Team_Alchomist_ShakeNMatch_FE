import { SectionDivider } from '@base';
import { COLOR, TEXT_SIZE, HEADER_HEIGHT } from '@constants';
import { TitleSectionContainer } from '@domain';
import type { ReactElement } from 'react';
import { Children } from 'react';
import { StyledSectionDividerContent } from './styled';
import type { SectionDividerWithTitleProps } from './types';

const SectionDividerWithTitle = ({
  children,
  titleColor = COLOR.BLACK,
  titleSize = TEXT_SIZE.md,
  titleText,
  bold,
  gap = '0px',
  width,
  height,
  alignItems = true,
  ratio = [1, 1],
  showContentsDivider = false,
  dividerOptions = { color: COLOR.DARK_GRAY, size: 1 },
  withHeader = false,
  ...props
}: SectionDividerWithTitleProps): ReactElement => {
  const wrappedChildren = Children.toArray(
    children.map((element) => (
      <StyledSectionDividerContent alignItems={alignItems}>
        {element}
      </StyledSectionDividerContent>
    ))
  );

  return (
    <TitleSectionContainer
      alignItems={alignItems}
      bold={bold}
      gap={gap}
      style={
        withHeader ? { paddingTop: `calc(${HEADER_HEIGHT} + 20px)` } : undefined
      }
      titleColor={titleColor}
      titleSize={titleSize}
      titleText={titleText}
      {...props}
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
