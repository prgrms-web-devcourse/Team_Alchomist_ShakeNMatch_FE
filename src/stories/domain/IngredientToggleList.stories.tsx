/* eslint-disable @typescript-eslint/no-use-before-define */
import IngredientToggleList from '@domain/IngredientToggleList';
import type { ReactElement } from 'react';

export default {
  title: 'Component/domain/IngredientToggleList',
  component: IngredientToggleList
};

const userIngredients = [1, 2, 3];

export const Default = (): ReactElement => {
  const submitSelectedIngredients = (selectedIngredients: number[]): void => {
    console.log(selectedIngredients, '저장!');
  };

  return (
    <IngredientToggleList
      ingredients={DUMMY}
      initialSelectedIngredients={userIngredients}
      onItemSelected={submitSelectedIngredients}
    />
  );
};

const DUMMY = [
  {
    id: 1,
    name: '보드카',
    type: 'liquor',
    isAlcohol: true,
    measure: 'ml'
  },
  {
    id: 2,
    name: '위스키',
    type: 'whiskey',
    isAlcohol: true,
    measure: 'ml'
  },
  {
    id: 3,
    name: '극상 설탕',
    type: 'sugar',
    isAlcohol: false,
    measure: 'ml'
  },
  {
    id: 4,
    name: '우스터 소스',
    type: 'syrup',
    isAlcohol: false,
    measure: 'ml'
  }
];
