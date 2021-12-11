interface IngredientSelectModalProps {
  visible: boolean;
  initialMainIngredient: string[];
  initialSubIngredient: string[];
  onClose(): void;
  onSelectDone(selectedItems: string[]): void;
}

export type { IngredientSelectModalProps };
