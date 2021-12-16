import useAxios from '@hooks/useAxios';
import type { IIngredient } from '@models/types';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';

const updateUserIngredients = (
  userId: string,
  selectedIngredients: string[]
): Promise<IIngredient[]> => {
  const request = useAxios(AXIOS_REQUEST_TYPE.AUTH);
  return request.post(`/user/ingredient/${userId}`, selectedIngredients);
};

export { updateUserIngredients };
