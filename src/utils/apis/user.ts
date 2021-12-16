import useAxios from '@hooks/useAxios';
import type { IIngredient } from '@models/types';

const REQUEST_TYPE = {
  DEFAULT: 'default',
  AUTH: 'auth',
  FILE: 'file'
} as const;

const updateUserIngredients = (
  userId: string,
  selectedIngredients: string[]
): Promise<IIngredient[]> => {
  const request = useAxios(REQUEST_TYPE.AUTH);
  return request.post(`/user/ingredient/${userId}`, selectedIngredients);
};

export { updateUserIngredients };
