import useAxios from '@hooks/useAxios';
import type { ICocktail } from '@models/types';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';

const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);
const searchCocktailByName = (keyword: string): Promise<ICocktail[]> => {
  return request.get(`/cocktail/name?name=${keyword}`);
};

export { searchCocktailByName };
