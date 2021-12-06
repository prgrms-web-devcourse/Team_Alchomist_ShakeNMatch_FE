import IngredientCarousel from '@domain/IngredientCarousel/IngredientCarouselContainer';
import type { ReactElement } from 'react';

export default {
  title: 'Component/domain/IngredientCarousel',
  component: IngredientCarousel
};

const DUMMY = [
  {
    name: '재료1'
  },
  {
    name: '재료2'
  },
  {
    name: '재료3'
  },
  {
    name: '재료4'
  },
  {
    name: '재료5'
  },
  {
    name: '재료6'
  },
  {
    name: '재료7'
  },
  {
    name: '재료8'
  }
];

export const Default = (): ReactElement => {
  return <IngredientCarousel itemList={DUMMY}></IngredientCarousel>;
};
