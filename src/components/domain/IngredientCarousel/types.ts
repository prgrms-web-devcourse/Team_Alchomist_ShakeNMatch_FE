import type { HTMLAttributes } from 'react';
import type { AlbumAttributeKeys } from '@compound/Album/types';
import type { IIngredient } from '@models';
import type { IngredientIcons } from '@assets/ingredients';

interface IngredientCarouselProps {
  itemList?: IIngredient[];
  selectedItemIdList?: number[];
  row?: RowTypeKeys;
  albumType: AlbumAttributeKeys;
  onIngredientClick?(id: number): void;
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
