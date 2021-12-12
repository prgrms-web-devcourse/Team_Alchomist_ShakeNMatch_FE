import IngredientCarousel from '@domain/IngredientCarousel';
import type { IngredientCarouselProps } from '@domain/IngredientCarousel/types';
import type { ReactElement } from 'react';

export default {
  title: 'Component/domain/IngredientCarousel',
  component: IngredientCarousel,
  argTypes: {
    row: {
      control: 'inline-radio',
      options: ['single', 'double']
    }
  }
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

export const Default = (props: IngredientCarouselProps): ReactElement => {
  return (
    <IngredientCarousel itemList={DUMMY} row={props.row}></IngredientCarousel>
  );
};
