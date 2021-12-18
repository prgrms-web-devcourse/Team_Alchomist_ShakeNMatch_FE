interface IngredientObject {
  id: number;
  name: string;
  amount: number;
  measure: string;
  type: string;
}

interface IngredientItemProps extends IngredientObject {
  isUserHas: boolean;
}

const INGREDIENT_ICON_SIZE = {
  width: '32px',
  height: '32px'
};

export { INGREDIENT_ICON_SIZE };
export type { IngredientObject, IngredientItemProps };
