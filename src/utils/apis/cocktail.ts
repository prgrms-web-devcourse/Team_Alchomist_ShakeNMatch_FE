import useAxios from '@hooks/useAxios';
import type { ICocktail } from '@models/types';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';

const searchCocktailByName = (keyword: string): Promise<ICocktail[]> => {
  const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);
  return request.get(`/cocktail/${keyword}`);
};

export { searchCocktailByName };
