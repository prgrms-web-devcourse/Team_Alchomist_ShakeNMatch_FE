import type { ButtonProps } from '@base/Button/types';
import { COLOR, BUTTON_TYPE, BUTTON_SIZE, TEXT_SIZE } from '@constants';

const TEXT_BUTTON = {
  SHORT_WHITE: {
    buttonProps: {
      type: BUTTON_TYPE.BUTTON,
      size: BUTTON_SIZE.SHORT,
      basicColor: COLOR.BASIC_WHITE,
      hoverColor: COLOR.LIGHT_PINK,
      clickedColor: COLOR.BASIC_PINK
    },
    textProps: {
      size: TEXT_SIZE.xs,
      color: COLOR.BLACK
    }
  },
  SHORT_PINK: {
    buttonProps: {
      type: BUTTON_TYPE.BUTTON,
      size: BUTTON_SIZE.SHORT,
      basicColor: COLOR.BASIC_PINK,
      hoverColor: COLOR.MIDDLE_PINK,
      clickedColor: COLOR.STRONG_PINK
    },
    textProps: {
      size: TEXT_SIZE.xs,
      color: COLOR.BASIC_WHITE
    }
  },
  LONG_WHITE: {
    buttonProps: {
      type: BUTTON_TYPE.BUTTON,
      size: BUTTON_SIZE.LONG,
      basicColor: COLOR.BASIC_WHITE,
      hoverColor: COLOR.LIGHT_PINK,
      clickedColor: COLOR.BASIC_PINK
    },
    textProps: {
      size: TEXT_SIZE.xs,
      color: COLOR.BLACK
    }
  },
  LONG_PINK: {
    buttonProps: {
      type: BUTTON_TYPE.BUTTON,
      size: BUTTON_SIZE.LONG,
      basicColor: COLOR.BASIC_PINK,
      hoverColor: COLOR.MIDDLE_PINK,
      clickedColor: COLOR.STRONG_PINK
    },
    textProps: {
      size: TEXT_SIZE.xs,
      color: COLOR.BASIC_WHITE
    }
  },
  X_SHORT_WHITE: {
    buttonProps: {
      type: BUTTON_TYPE.BUTTON,
      size: BUTTON_SIZE.XSHORT,
      basicColor: COLOR.BASIC_WHITE,
      hoverColor: COLOR.LIGHT_PINK,
      clickedColor: COLOR.BASIC_PINK
    },
    textProps: {
      size: TEXT_SIZE.xxxs,
      color: COLOR.BLACK
    }
  }
} as const;

type TextButtonKeys = keyof typeof TEXT_BUTTON;

interface TextButtonProps extends ButtonProps {
  children: string;
  block?: boolean;
  buttonType: TextButtonKeys;
}

export type { TextButtonProps };
export { TEXT_BUTTON };
