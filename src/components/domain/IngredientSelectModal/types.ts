interface IngredientSelectModalProps {
  visible: boolean;
  initialMainIngredient: number[];
  initialSubIngredient: number[];
  onClose(): void;
  onSelectDone(selectedItems: number[]): void;
}

export type { IngredientSelectModalProps };
