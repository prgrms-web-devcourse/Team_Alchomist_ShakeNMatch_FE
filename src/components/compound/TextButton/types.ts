import { COLOR } from '@constants/colors';
import type { HTMLAttributes } from 'react';

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
      color: 'BLACK'
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

interface TextButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: string;
  buttonType: TextButtonKeys;
}

export type { TextButtonProps };
export { TEXT_BUTTON };
