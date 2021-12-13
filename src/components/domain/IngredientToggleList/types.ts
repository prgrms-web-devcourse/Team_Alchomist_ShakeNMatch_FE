import type { HTMLAttributes } from 'react';
import type { IIngredient } from '@models/types';

interface IngredientToggleListProps extends HTMLAttributes<HTMLDivElement> {
  ingredients: Pick<IIngredient, 'id' | 'name'>[];
  initialSelectedIngredients: string[];
  onItemSelected?(selectedIngredients: string[]): void;
}

export type { IngredientToggleListProps };
