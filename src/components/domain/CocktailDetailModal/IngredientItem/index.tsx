import type { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { IngredientIcons } from '@assets/ingredients';
import { Text, Image } from '@base';
import type { IngredientIconsKeys } from '@domain/IngredientCarousel/types';
import { INGREDIENT_ICON_SIZE } from './types';
import type { IngredientItemProps } from './types';
import { StyledIngredient } from './style';

const IngredientItem = (ingredient: IngredientItemProps): ReactElement => {
  const navigate = useNavigate();
  return (
    <StyledIngredient
      isUserHas={ingredient.isUserHas}
      onClick={
        !ingredient.isUserHas
          ? (): void => {
              navigate(`/shop/${ingredient.name}`);
              console.log('clicked');
            }
          : (): void => {
              alert('이미 술장고에 보유 중인 재료입니다!');
            }
      }
    >
      <Image
        height={INGREDIENT_ICON_SIZE.height}
        mode='cover'
        src={IngredientIcons[ingredient.type as IngredientIconsKeys]}
        width={INGREDIENT_ICON_SIZE.width}
      />
      <Text size='xs'>{ingredient.name}</Text>
      <Text size='xs'>{ingredient.amount.toString()}</Text>
      <Text size='xs'>{ingredient.measure}</Text>
      {ingredient.isUserHas ? (
        <Text block={false} size='xxs' style={{ float: 'right' }}>
          {'보유중'}
        </Text>
      ) : (
        <Text
          block={false}
          color='BASIC_WHITE'
          size='xxs'
          style={{ float: 'right' }}
        >
          {'구매하기'}
        </Text>
      )}
    </StyledIngredient>
  );
};
export default IngredientItem;
