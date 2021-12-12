import type { HTMLAttributes } from 'react';

interface Item {
  name: string;
}

interface IngredientCarouselProps {
  itemList: Item[];
  row?: RowTypeKeys;
}

const ROW_TYPE = {
  single: {
    length: 3
  },
  double: {
    length: 6
  }
} as const;
type RowTypeKeys = keyof typeof ROW_TYPE;

interface StyledCarouselContainerProps extends HTMLAttributes<HTMLDivElement> {
  row: 'single' | 'double';
}

export type { IngredientCarouselProps, StyledCarouselContainerProps };
export { ROW_TYPE };
