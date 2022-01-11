import { Text } from '@base';
import { IconButton } from '@compound';
import type { ReactElement } from 'react';
import { StyledContainer } from './styled';
import type { BackButtonProps } from './types';
import { TEXT_SIZE, ICON_NAME } from '@constants';

const BackButton = ({
  color = 'BASIC_WHITE',
  ...props
}: BackButtonProps): ReactElement => {
  return (
    <StyledContainer {...props}>
      <IconButton
        name={
          color === 'BASIC_WHITE'
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
