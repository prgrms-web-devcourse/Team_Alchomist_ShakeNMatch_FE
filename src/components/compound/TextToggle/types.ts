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
  block?: boolean;
  name: string;
  initialState?: boolean;
  toggleType?: TextToggleKeys;
  onChange(e: string): void;
}

interface StyledToggleContainerProps {
  toggled: boolean;
  block: boolean;
}

export { TEXT_TOGGLE };
export type { StyledToggleContainerProps, TextToggleProps };
