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
    name: '블러디 매리',
    icon: 'https://via.placeholder.com/130x150'
  },
  {
    name: '깔루아 밀크',
    icon: 'https://via.placeholder.com/130x150'
  },
  {
    name: '마티니',
    icon: 'https://via.placeholder.com/130x150'
  },
  {
    name: '어쩌고 저꺼고',
    icon: 'https://via.placeholder.com/130x150'
  },
  {
    name: '소주가짱',
    icon: 'https://via.placeholder.com/130x150'
  },
  {
    name: '막걸리한잔',
    icon: 'https://via.placeholder.com/130x150'
  },
  {
    name: '마더로씨아',
    icon: 'https://via.placeholder.com/130x150'
  },
  {
    name: '술이들어간다',
    icon: 'https://via.placeholder.com/130x150'
  },
  {
    name: '에헤라디야',
    icon: 'https://via.placeholder.com/130x150'
  },
  {
    name: '술이야',
    icon: 'https://via.placeholder.com/130x150'
  },
  {
    name: '맨날 술이야',
    icon: 'https://via.placeholder.com/130x150'
  },
  {
    name: '호로로로로로롤로로롤로',
    icon: 'https://via.placeholder.com/130x150'
  }
];
