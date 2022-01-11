import type { HTMLAttributes } from 'react';
import { ICON_NAME } from '@constants';

const ICON_TOGGLE_NAME = {
  star: {
    notToggled: ICON_NAME.STAR_EMPTY,
    toggled: ICON_NAME.STAR_FULL
  },
  flag: {
    notToggled: ICON_NAME.FLAG_EMPTY,
    toggled: ICON_NAME.FLAG_FULL
  }
} as const;

type ToggleIconName = keyof typeof ICON_TOGGLE_NAME;

interface IconToggleProps extends HTMLAttributes<HTMLInputElement> {
  name: ToggleIconName;
  initialState?: boolean;
}

export type { IconToggleProps, ToggleIconName };
export { ICON_TOGGLE_NAME };
