import type { ReactElement, ReactNode } from 'react';
import { createContext, useContext, useEffect } from 'react';
import useSessionStorage from '@hooks/useSessionStorage';
import type { IJangoContext } from './types';
import type { IIngredient, IApiResponse } from '@models/types';
import useAxios from '@hooks/useAxios';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';

const JangoContext = createContext<IJangoContext | null>(null);
const useJangoContext = (): IJangoContext => {
  const state = useContext(JangoContext);
  if (!state) throw new Error('there is no context!');

  return state;
};

const JangoProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [totalIngredientsList, setTotalIngredientsList] = useSessionStorage(
    'totalIngredientList',
    {}
  );

  const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);
  const getTotalIngredients = (): Promise<IApiResponse<IIngredient[]>> => {
    return request.get('/ingredient');
  };

  useEffect(() => {
    if (!Object.keys(totalIngredientsList).length) {
      const setTotalIngredientList = async (): Promise<void> => {
        console.log('api call');
        const totalIngredients = await getTotalIngredients();
        const totalIngredientList: {
          [key: number]: IIngredient;
        } = {};

        totalIngredients.data.forEach((ingredient) => {
          totalIngredientList[ingredient.id] = ingredient;
        });

        setTotalIngredientsList(totalIngredientList);
      };

      setTotalIngredientList();
    }
  }, []);

  return (
    <JangoContext.Provider value={{ totalIngredientsList }}>
      {children}
    </JangoContext.Provider>
  );
};

export default JangoProvider;
export { useJangoContext };
