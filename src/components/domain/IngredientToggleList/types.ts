import type { HTMLAttributes } from 'react';

// 추후 models에서 IIngredient로 대체
interface Ingredient {
  id: string;
  name: string;
  type: string;
  isAlcohol: boolean;
}

interface IngredientToggleListProps extends HTMLAttributes<HTMLDivElement> {
  ingredients: Pick<Ingredient, 'id' | 'name'>[];
  initialSelectedIngredients: string[];
  onItemSelected?(selectedIngredients: string[]): void;
}

export type { IngredientToggleListProps };
