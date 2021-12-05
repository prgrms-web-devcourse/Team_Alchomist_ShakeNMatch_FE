import { Button, Text } from '@base';
import type { ReactElement } from 'react';
import type { TextButtonProps } from './types';
import { TEXT_BUTTON } from './types';

const TextButton = ({
  children,
  buttonType = 'SHORT_WHITE',
  ...props
}: TextButtonProps): ReactElement => {
  return (
    <Button {...TEXT_BUTTON[buttonType].buttonProps} {...props}>
      <Text {...TEXT_BUTTON[buttonType].textProps}>{children}</Text>
    </Button>
  );
};

export default TextButton;
