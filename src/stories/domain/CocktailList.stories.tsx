/* eslint-disable @typescript-eslint/no-use-before-define */
import CocktailList from '@domain/CocktailList';

import type { ReactElement } from 'react';

export default {
  title: 'Component/domain/CocktailList',
  component: CocktailList,
  argTypes: {
    noResultMsg: {
      control: 'text'
    }
  }
};

export const Default = (): ReactElement => {
  return <CocktailList cocktailList={DUMMYLIST} />;
};

const DUMMYLIST = [
  {
    id: '123',
    name: '블러디 매리',
    type: 'whiskey'
  },
  {
    id: '123',
    name: '블러디 매리',
    type: 'whiskey'
  },
  {
    id: '123',
    name: '블러디 매리',
    type: 'whiskey'
  },
  {
    id: '123',
    name: '블러디 매리',
    type: 'whiskey'
  },
  {
    id: '123',
    name: '블러디 매리',
    type: 'whiskey'
  }
];
