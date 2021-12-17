import useAxios from '@hooks/useAxios';
import type { IIngredient, IUser } from '@models/types';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';
import type { IRegisterRequestBody } from '@pages/RegisterPage/types';

const updateUserIngredients = (
  userId: string,
  selectedIngredients: string[]
): Promise<IIngredient[]> => {
  const request = useAxios(AXIOS_REQUEST_TYPE.AUTH);
  return request.post(`/user/ingredient/${userId}`, selectedIngredients);
};

const checkUserNickname = (
  nickname: string
): Promise<{ data: { can: boolean } }> => {
  const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);
  return request.get(`/user/nickname/${nickname}`);
};

const registerUser = (
  data: IRegisterRequestBody
): Promise<IUser | undefined> => {
  const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);
  return request.post('/user/join', data);
};

export { updateUserIngredients, checkUserNickname, registerUser };
