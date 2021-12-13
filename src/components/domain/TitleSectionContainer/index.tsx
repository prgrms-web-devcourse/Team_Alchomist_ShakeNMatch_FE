import type { ReactElement } from 'react';
import Text from '@base/Text';
import { StyledContainer, StyledLine } from './styled';
import type { TitleSectionContainerProps } from './types';

const TitleSectionContainer = ({
  children,
  titleText = '',
  titleSize = 'md',
  titleColor = 'BLACK',
  bold,
  dividerVisible = false,
  dividerColor = 'DARK_GRAY',
  dividerWidth = '200px',
  dividerThickness = '1px',
  gap = '5px',
  ...props
}: TitleSectionContainerProps): ReactElement => {
  return (
    <StyledContainer {...props}>
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
