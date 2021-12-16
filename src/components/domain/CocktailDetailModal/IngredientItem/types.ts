interface IngredientObject {
  ingredientId: number;
  name: string;
  amount: number;
  measure: string;
  type: string;
}

interface IngredientItemProps extends IngredientObject {
  isUserHas: boolean;
}
export type { IngredientObject, IngredientItemProps };
