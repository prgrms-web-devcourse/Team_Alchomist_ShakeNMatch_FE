import { Button, Text } from '@base';
import type { ReactElement } from 'react';
import { COLOR } from '@constants/colors';

const TEXT_BUTTON = {
  SHORT_WHITE: {
    buttonProps: {
      type: 'button',
      size: 'short',
      basicColor: 'BASIC_WHITE',
      hoverColor: 'LIGHT_PINK',
      clickedColor: 'BASIC_PINK'
    },
    textProps: {
      size: 'sm',
      color: COLOR.BLACK
    }
  },
  SHORT_PINK: {
    buttonProps: {
      type: 'button',
      size: 'short',
      basicColor: 'BASIC_PINK',
      hoverColor: 'MIDDLE_PINK',
      clickedColor: 'STRONG_PINK'
    },
    textProps: {
      size: 'sm',
      color: COLOR.BASIC_WHITE
    }
  },
  LONG_WHITE: {
    buttonProps: {
      type: 'button',
      size: 'long',
      basicColor: 'BASIC_WHITE',
      hoverColor: 'LIGHT_PINK',
      clickedColor: 'BASIC_PINK'
    },
    textProps: {
      size: 'md',
      color: COLOR.BLACK
    }
  },
  LONG_PINK: {
    buttonProps: {
      type: 'button',
      size: 'long',
      basicColor: 'BASIC_PINK',
      hoverColor: 'MIDDLE_PINK',
      clickedColor: 'STRONG_PINK'
    },
    textProps: {
      size: 'md',
      color: COLOR.BASIC_WHITE
    }
  }
} as const;

type TextButtonKeys = keyof typeof TEXT_BUTTON;

export interface TextButtonProps {
  children: string;
  buttonType: TextButtonKeys;
}

const TextButton = ({
  children,
  buttonType = 'SHORT_WHITE'
}: TextButtonProps): ReactElement => {
  return (
    <Button {...TEXT_BUTTON[buttonType].buttonProps}>
      <Text {...TEXT_BUTTON[buttonType].textProps}>{children}</Text>
    </Button>
  );
};

export default TextButton;
