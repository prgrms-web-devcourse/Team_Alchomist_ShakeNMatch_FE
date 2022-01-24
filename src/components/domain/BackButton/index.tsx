import { Text } from '@base';
import { IconButton } from '@compound';
import type { ReactElement } from 'react';
import { StyledContainer } from './styled';
import type { BackButtonProps } from './types';
import { COLOR, TEXT_SIZE, ICON_NAME } from '@constants';

const BackButton = ({
  color = COLOR.BASIC_WHITE,
  ...props
}: BackButtonProps): ReactElement => {
  return (
    <StyledContainer {...props}>
      <IconButton
        name={
          color === COLOR.BASIC_WHITE
            ? ICON_NAME.ARROW_LEFT_WHITE
            : ICON_NAME.ARROW_LEFT_NAVY
        }
      />
      <Text bold color={color} size={TEXT_SIZE.md}>
        Go Back
      </Text>
    </StyledContainer>
  );
};

export default BackButton;
