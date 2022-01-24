import type { ReactElement } from 'react';
import { Text } from '@base';
import { StyledContainer, StyledLine } from './styled';
import type { TitleSectionContainerProps } from './types';
import { COLOR, TEXT_SIZE } from '@constants';

const TitleSectionContainer = ({
  children,
  titleText = '',
  titleSize = TEXT_SIZE.md,
  titleColor = COLOR.BLACK,
  bold,
  dividerVisible = false,
  dividerColor = COLOR.DARK_GRAY,
  dividerWidth = '200px',
  dividerThickness = '1px',
  gap = '5px',
  alignItems = false,
  ...props
}: TitleSectionContainerProps): ReactElement => {
  return (
    <StyledContainer alignItems={alignItems} {...props}>
      <Text bold={bold} color={titleColor} size={titleSize}>
        {titleText}
      </Text>
      <StyledLine
        color={dividerColor}
        gap={gap}
        height={dividerThickness}
        visible={dividerVisible}
        width={dividerWidth}
      />
      {children}
    </StyledContainer>
  );
};

export default TitleSectionContainer;
