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
    id: 1,
    name: '재료1',
    type: 'juice',
    measure: 'ml',
    alcohol: false
  },
  {
    id: 2,
    name: '재료2',
    type: 'juice',
    measure: 'ml',
    alcohol: false
  },
  {
    id: 3,
    name: '재료3',
    type: 'juice',
    measure: 'ml',
    alcohol: false
  },
  {
    id: 4,
    name: '재료4',
    type: 'juice',
    measure: 'ml',
    alcohol: false
  },
  {
    id: 5,
    name: '재료5',
    type: 'juice',
    measure: 'ml',
    alcohol: false
  },
  {
    id: 6,
    name: '재료6',
    type: 'juice',
    measure: 'ml',
    alcohol: false
  },
  {
    id: 7,
    name: '재료7',
    type: 'juice',
    measure: 'ml',
    alcohol: false
  },
  {
    id: 8,
    name: '재료8',
    type: 'juice',
    measure: 'ml',
    alcohol: false
  }
];

export const Default = (props: IngredientCarouselProps): ReactElement => {
  return (
    <IngredientCarousel
      albumType='alcohol'
      itemList={DUMMY}
      row={props.row}
    ></IngredientCarousel>
  );
};
