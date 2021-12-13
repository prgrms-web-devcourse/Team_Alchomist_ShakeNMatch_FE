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
    id: '1',
    name: '재료1',
    type: 'whiskey'
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
