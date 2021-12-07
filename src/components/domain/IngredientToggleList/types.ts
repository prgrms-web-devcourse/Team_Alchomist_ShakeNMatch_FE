interface Ingredient {
  name: string;
}

interface IngredientToggleListProps {
  ingredients: Ingredient[];
  onSelect(selectedIngredients: Set<string>): void;
}

export type { IngredientToggleListProps };
