import type { HTMLAttributes } from 'react';
import type { AlbumAttributeKeys } from '@compound/Album/types';
import type { IngredientIcons } from '@assets/ingredients';
import type { ICocktailSimple } from '@models';

interface IngredientCarouselProps {
  itemList: ICocktailSimple[];
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

type IngredientIconsKeys = keyof typeof IngredientIcons;

export type {
  IngredientCarouselProps,
  StyledCarouselContainerProps,
  IngredientIconsKeys
};
export { ROW_TYPE };
