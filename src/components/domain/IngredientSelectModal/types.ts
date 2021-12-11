// interface Ingredient {
//   id: string;
//   name: string;
//   isAlcohol: boolean;
//   measure: string;
// }

interface IngredientSelectModalProps {
  visible: boolean;
  initialUserIngredient: string[];
  onClose(): void;
  onSelectDone(selectedItems: string[]): void;
}

export type { IngredientSelectModalProps };
