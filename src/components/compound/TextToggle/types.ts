import type { ReactChild } from 'react';

const TEXT_TOGGLE = {
  ingredient: {
    textProps: {
      size: 'xs'
    }
  }
} as const;

type TextToggleKeys = keyof typeof TEXT_TOGGLE;

interface TextToggleProps {
  children: string;
  block: boolean;
  name: string;
  on?: boolean;
  toggleType: TextToggleKeys;
  onChange(): void;
}

interface StyledToggleContainerProps {
  block: boolean;
}

interface StyledTextProps {
  children?: ReactChild;
  toggled: boolean;
}

export { TEXT_TOGGLE };
export type { StyledToggleContainerProps, TextToggleProps, StyledTextProps };
