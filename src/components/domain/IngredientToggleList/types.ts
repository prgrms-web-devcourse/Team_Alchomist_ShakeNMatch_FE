import type { HTMLAttributes } from 'react';

interface Ingredient {
  name: string;
}

interface IngredientToggleListProps extends HTMLAttributes<HTMLDivElement> {
  ingredients: Ingredient[];
  onItemSelected(selectedIngredients: Set<string>): void;
}

export type { IngredientToggleListProps };
