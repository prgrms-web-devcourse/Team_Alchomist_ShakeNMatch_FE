import type { ReactElement } from 'react';
import { IngredientIcons } from '@assets/ingredients';
import { Text, Image } from '@base';
import type { IngredientIconsKeys } from '@domain/IngredientCarousel/types';
import { INGREDIENT_ICON_SIZE } from './types';
import type { IngredientItemProps } from './types';
import {
  StyledIngredient,
  StyledIngredientInnerWrapper,
  StyledNameAmoutMeasureWrapper,
  StyledHasWrapper
} from './style';
import { useCustomNavigate } from '@contexts/CustomNavigate';
import { COLOR, TEXT_SIZE, IMG_MODE } from '@constants';

const OPEN_WINDOW_HEIGHT = 1000;
const OPEN_WINDOW_WIDTH = 1000;

const IngredientItem = (ingredient: IngredientItemProps): ReactElement => {
  const innerTextColor = ingredient.isUserHas ? COLOR.BLACK : COLOR.BASIC_WHITE;
  const { savePath } = useCustomNavigate();

  const handleClick = (): void => {
    if (!ingredient.isUserHas) {
      savePath(`/shop/${ingredient.name}`);
      window.open(
        `/shop/${ingredient.name}`,
        '_blank',
        `fullscreen=no, width=${OPEN_WINDOW_WIDTH}, height=${OPEN_WINDOW_HEIGHT},
        top=${(window.innerHeight - OPEN_WINDOW_HEIGHT) / 2 + screenY}px,
        left=${(window.innerWidth - OPEN_WINDOW_WIDTH) / 2 + screenX}px
        `
      );
    }
  };
  return (
    <StyledIngredient isUserHas={ingredient.isUserHas} onClick={handleClick}>
      <StyledIngredientInnerWrapper>
        <Image
          height={INGREDIENT_ICON_SIZE.height}
          mode={IMG_MODE.COVER}
          src={IngredientIcons[ingredient.type as IngredientIconsKeys]}
          width={INGREDIENT_ICON_SIZE.width}
        />
        <StyledNameAmoutMeasureWrapper>
          <Text color={innerTextColor} size={TEXT_SIZE.xs}>
            {ingredient.name +
              ' ' +
              (ingredient.amount ? ingredient.amount.toString() : '') +
              ' ' +
              (ingredient.measure.split(' ').length > 1
                ? ingredient.amount
                  ? ingredient.measure.split(' ')[0]
                  : ingredient.measure.split(' ')[1]
                : ingredient.measure)}
          </Text>
        </StyledNameAmoutMeasureWrapper>
        <StyledHasWrapper>
          {ingredient.isUserHas ? (
            <Text
              block={false}
              color={innerTextColor}
              size={TEXT_SIZE.xxs}
              style={{ float: 'right' }}
            >
              {'보유중'}
            </Text>
          ) : (
            <Text
              block={false}
              color={innerTextColor}
              size={TEXT_SIZE.xxs}
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
