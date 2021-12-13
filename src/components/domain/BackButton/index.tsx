import { Text } from '@base';
import IconButton from '@compound/IconButton';
import type { ReactElement } from 'react';
import { StyledContainer } from './styled';
import type { BackButtonProps } from './types';

const BackButton = ({
  color = 'BASIC_WHITE',
  ...props
}: BackButtonProps): ReactElement => {
  return (
    <StyledContainer {...props}>
      <IconButton
        name={color === 'BASIC_WHITE' ? 'arrowLeftWhite' : 'arrowLeftNavy'}
      />
      <Text bold color={color} size='md'>
        Go Back
      </Text>
    </StyledContainer>
  );
};

export default BackButton;
