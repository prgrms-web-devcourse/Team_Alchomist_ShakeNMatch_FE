import CocktailReviewModal from '@domain/CocktailReviewModal';
import type { ReactElement } from 'react';

export default {
  title: 'Component/Domain/CocktailReviewModal',
  component: CocktailReviewModal
};

export const Default = (): ReactElement => (
  <CocktailReviewModal
    backgroundColor={'BASIC_WHITE'}
    color={'BASIC_WHITE'}
    size={'sm'}
    visible={true}
  />
);
