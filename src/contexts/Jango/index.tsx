import type { ReactElement, ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';
import type { IJangoContext } from './types';
import type { IIngredient } from '@models/types';

const JangoContext = createContext<IJangoContext | null>(null);
const useJangoContext = (): IJangoContext => {
  const state = useContext(JangoContext);
  if (!state) throw new Error('there is no context!');

  return state;
};

const JangoProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [userIngredients, setUserIngredients] = useState<IIngredient[]>([]);

  const updateJangoContext = (recentIngredients: IIngredient[]): void => {
    setUserIngredients(recentIngredients);
  };

  return (
    <JangoContext.Provider value={{ userIngredients, updateJangoContext }}>
      {children}
    </JangoContext.Provider>
  );
};

export default JangoProvider;
export { useJangoContext };
