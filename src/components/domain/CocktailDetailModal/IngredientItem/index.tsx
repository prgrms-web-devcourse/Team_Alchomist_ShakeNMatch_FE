import type { ReactElement } from 'react';
import Text from '@base/Text';
import TextButton from '@compound/TextButton';
// import Image from '@base/Image';
import type { IngredientObject } from './types';
import { StyledIngredient } from './style';

const IngredientItem = (ingredient: IngredientObject): ReactElement => {
  return (
    <StyledIngredient isUserHas={ingredient.isUserHas}>
      {/* <Image src=`` /> */}
      <Text size='xs'>{ingredient.name}</Text>
      <Text size='xs'>{ingredient.amount.toString()}</Text>
      <Text size='xs'>{ingredient.measure}</Text>
      <TextButton
        block={false}
        buttonType='SHORT_WHITE'
        style={{ float: 'right' }}
      >
        {'구매하기'}
      </TextButton>
    </StyledIngredient>
  );
};

export default IngredientItem;
