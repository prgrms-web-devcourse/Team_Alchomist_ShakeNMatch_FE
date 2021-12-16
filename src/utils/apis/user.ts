import { authRequest } from './config';
import type { IIngredient } from '@models/types';

const updateUserIngredients = (
  userId: string,
  selectedIngredients: string[]
): Promise<IIngredient[]> => {
  return authRequest.post(`/user/ingredient/${userId}`, selectedIngredients);
};

export { updateUserIngredients };
