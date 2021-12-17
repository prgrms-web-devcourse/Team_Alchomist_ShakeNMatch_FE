import type { HTMLAttributes } from 'react';
import type { AlbumAttributeKeys } from '@compound/Album/types';
import type { IIngredient } from '@models';

interface IngredientCarouselProps {
  itemList: IIngredient[];
  row?: RowTypeKeys;
  albumType: AlbumAttributeKeys;
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
