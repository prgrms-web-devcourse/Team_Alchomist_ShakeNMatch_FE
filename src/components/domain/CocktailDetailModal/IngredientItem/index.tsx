import type { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { IngredientIcons } from '@assets/ingredients';
import { Text, Image } from '@base';
import type { IngredientIconsKeys } from '@domain/IngredientCarousel/types';
import { INGREDIENT_ICON_SIZE } from './types';
import type { IngredientItemProps } from './types';
import {
  StyledIngredient,
  StyledIngredientInnerWrapper,
  StyledAmoutMeasureWrapper,
  StyledHasWrapper
} from './style';

const IngredientItem = (ingredient: IngredientItemProps): ReactElement => {
  const navigate = useNavigate();
  const innerTextColor = ingredient.isUserHas ? 'BLACK' : 'BASIC_WHITE';
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
      <StyledIngredientInnerWrapper>
        <Image
          height={INGREDIENT_ICON_SIZE.height}
          mode='cover'
          src={IngredientIcons[ingredient.type as IngredientIconsKeys]}
          width={INGREDIENT_ICON_SIZE.width}
        />
        <Text color={innerTextColor} size='xs'>
          {ingredient.name}
        </Text>
        <StyledAmoutMeasureWrapper>
          <Text color={innerTextColor} size='xs'>
            {ingredient.amount.toString()}
          </Text>
          <Text color={innerTextColor} size='xs'>
            {ingredient.measure}
          </Text>
        </StyledAmoutMeasureWrapper>
        <StyledHasWrapper>
          {ingredient.isUserHas ? (
            <Text
              block={false}
              color={innerTextColor}
              size='xxs'
              style={{ float: 'right' }}
            >
              {'보유중'}
            </Text>
          ) : (
            <Text
              block={false}
              color={innerTextColor}
              size='xxs'
              style={{ float: 'right' }}
            >
              {'구매하기'}
            </Text>
          )}
        </StyledHasWrapper>
      </StyledIngredientInnerWrapper>
    </StyledIngredient>
  );
};
export default IngredientItem;
