import { TEXT_SIZE } from '@constants';

const TEXT_TOGGLE = {
  ingredient: {
    textProps: {
      size: TEXT_SIZE.xs
    }
  }
} as const;

type TextToggleKeys = keyof typeof TEXT_TOGGLE;

interface TextToggleProps {
  children: string;
  block?: boolean;
  id: string | number;
  initialState?: boolean;
  toggleType?: TextToggleKeys;
  onChange?(toggledIngredient: { id: number; toggled: boolean }): void;
}

interface StyledToggleContainerProps {
  toggled: boolean;
  block: boolean;
}

export { TEXT_TOGGLE };
export type { StyledToggleContainerProps, TextToggleProps };
