import type { IIngredient } from '@models/types';

interface IJangoContext {
  totalIngredientsList: {
    [key: string]: IIngredient;
  };
}

export type { IJangoContext };
