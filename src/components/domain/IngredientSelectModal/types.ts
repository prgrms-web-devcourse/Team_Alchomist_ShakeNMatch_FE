import type { IIngredient } from '@models';

interface IngredientSelectModalProps {
  visible: boolean;
  totalIngredientsList: { [key: string]: IIngredient };
  initialMainIngredient: number[];
  initialSubIngredient: number[];
  onClose(): void;
  onSelectDone(selectedItems: number[]): void;
}

export type { IngredientSelectModalProps };
