import type { HTMLAttributes } from 'react';

const ICON_TOGGLE_NAME = {
  star: {
    notToggled: 'starEmpty',
    toggled: 'starFull'
  },
  flag: {
    notToggled: 'flagEmpty',
    toggled: 'flagFull'
  }
} as const;

type ToggleIconName = keyof typeof ICON_TOGGLE_NAME;

interface IconToggleProps extends HTMLAttributes<HTMLInputElement> {
  name: ToggleIconName;
  initialState?: boolean;
}

export type { IconToggleProps, ToggleIconName };
export { ICON_TOGGLE_NAME };
