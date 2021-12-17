import type { ReactElement, ReactNode } from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import type { IJangoContext } from './types';
import type { IIngredient } from '@models/types';
import { useAuthorization } from '@contexts';
import useAxios from '@hooks/useAxios';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';

const JangoContext = createContext<IJangoContext | null>(null);
const useJangoContext = (): IJangoContext => {
  const state = useContext(JangoContext);
  if (!state) throw new Error('there is no context!');

  return state;
};

const JangoProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [userIngredients, setUserIngredients] = useState<IIngredient[]>([]);
  const [totalIngredientsList, setTotalIngredientsList] = useState<{
    [key: string]: IIngredient;
  }>({});
  console.log('hs', totalIngredientsList);
  const { user } = useAuthorization();

  useEffect(() => {
    user?.ingredients && setUserIngredients(user.ingredients);
  }, []);

  const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);
  const getTotalIngredients = (): Promise<IIngredient[]> => {
    return request.get('/ingredient');
  };

  useEffect(() => {
    const setTotalIngredientList = async (): Promise<void> => {
      const totalIngredients = await getTotalIngredients();
      const totalIngredientList: {
        [key: number]: IIngredient;
      } = {};

      totalIngredients.forEach((ingredient) => {
        totalIngredientList[ingredient.id] = ingredient;
      });

      setTotalIngredientsList(totalIngredientList);
    };

    setTotalIngredientList();
  }, []);

  const updateJangoContext = (recentIngredients: IIngredient[]): void => {
    setUserIngredients(recentIngredients);
  };

  return (
    <JangoContext.Provider
      value={{ userIngredients, totalIngredientsList, updateJangoContext }}
    >
      {children}
    </JangoContext.Provider>
  );
};

export default JangoProvider;
export { useJangoContext };
