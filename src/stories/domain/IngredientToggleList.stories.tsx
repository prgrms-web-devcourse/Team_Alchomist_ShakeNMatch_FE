/* eslint-disable @typescript-eslint/no-use-before-define */
import IngredientToggleList from '@domain/IngredientToggleList';
import type { ReactElement } from 'react';

export default {
  title: 'Component/domain/IngredientToggleList',
  component: IngredientToggleList
};

export const Default = (): ReactElement => {
  return (
    <IngredientToggleList
      ingredients={DUMMY}
      onItemSelected={(): void => {
        console.log('재료 변경');
      }}
    />
  );
};

const DUMMY = [
  {
    name: '보드카'
  },
  {
    name: '룩사르도 마라스키노'
  },
  {
    name: '깔루아'
  },
  {
    name: '앰버 자메이카 럼'
  },
  {
    name: '진'
  },
  {
    name: '세상에서 가장 긴 이름을 가진 술 이름은 무엇일까'
  },
  {
    name: '보드카'
  },
  {
    name: '룩사르도 마라스키노'
  },
  {
    name: '깔루아'
  },
  {
    name: '앰버 자메이카 럼'
  },
  {
    name: '진'
  },
  {
    name: '세상에서 가장'
  },
  {
    name: '보드카'
  },
  {
    name: '룩사르도 마라스키노'
  },
  {
    name: '깔루아'
  },
  {
    name: '앰버 자메이카 럼'
  },
  {
    name: '진'
  },
  {
    name: '세상에서 가장 긴 이름을'
  },
  {
    name: '보드카'
  },
  {
    name: '룩사르도 마라스키노'
  },
  {
    name: '깔루아'
  },
  {
    name: '앰버 자메이카 럼'
  },
  {
    name: '진'
  },
  {
    name: '세상에서 가장 긴 이름을 가진 술'
  },
  {
    name: '보드카'
  },
  {
    name: '룩사르도 마라스키노'
  },
  {
    name: '깔루아'
  },
  {
    name: '앰버 자메이카 럼'
  },
  {
    name: '진'
  },
  {
    name: '세상에서 가장 긴 이름을 가진 술 이름은 무엇일까'
  },
  {
    name: '보드카'
  },
  {
    name: '룩사르도 마라스키노'
  },
  {
    name: '깔루아'
  },
  {
    name: '앰버 자메이카 럼'
  },
  {
    name: '진'
  },
  {
    name: '세상에서 가장 긴 이름을 가진 술 이름은 무엇일까'
  }
];
