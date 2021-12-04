import { Button, Text } from '@base';
import type { ReactElement } from 'react';
import type { ButtonProps } from '@base/Button/types';
import type { TextProps } from '@base/Text/types';

export interface TextButtonProps {
  children: string;
  buttonProps: ButtonProps;
  textProps: TextProps;
}

const TextButton = ({
  children,
  buttonProps,
  textProps
}: TextButtonProps): ReactElement => {
  return (
    <Button {...buttonProps}>
      <Text {...textProps}>{children}</Text>
    </Button>
  );
};

export default TextButton;
