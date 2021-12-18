import type { IIngredient } from '@models/types';

interface IJangoContext {
  userIngredients: IIngredient[];
  totalIngredientsList: {
    [key: string]: IIngredient;
  };
  updateJangoContext(recentIngredient: IIngredient[]): void;
}

export type { IJangoContext };
