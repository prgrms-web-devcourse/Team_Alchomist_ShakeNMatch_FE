import { Button, Text } from '@base';
import type { ReactElement } from 'react';
import type { TextButtonProps } from './types';
import { TEXT_BUTTON } from './types';
import { TEXT_BUTTON_TYPE } from '@constants';

const TextButton = ({
  children,
  block = false,
  buttonType = TEXT_BUTTON_TYPE.SHORT_WHITE,
  ...props
}: TextButtonProps): ReactElement => {
  return (
    <Button block={block} {...TEXT_BUTTON[buttonType].buttonProps} {...props}>
      <Text {...TEXT_BUTTON[buttonType].textProps}>{children}</Text>
    </Button>
  );
};

export default TextButton;
