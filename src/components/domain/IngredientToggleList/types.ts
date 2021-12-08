import type { HTMLAttributes } from 'react';

interface Ingredient {
  name: string;
}

interface IngredientToggleListProps extends HTMLAttributes<HTMLDivElement> {
  ingredients: Ingredient[];
  initialStoredIngredients: string[];
  onItemSelected?(selectedIngredients: string[]): void;
}

export type { IngredientToggleListProps };
