import type { IIngredient } from '@models/types';

interface IJangoContext {
  userIngredients: IIngredient[];
  updateJangoContext(recentIngredient: IIngredient[]): void;
}

export type { IJangoContext };
