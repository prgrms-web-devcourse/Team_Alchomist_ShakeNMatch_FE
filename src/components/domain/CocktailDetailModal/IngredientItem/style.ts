import { COLOR } from '@constants';
import styled from '@emotion/styled';
import type { IngredientItemProps } from './types';

const StyledIngredient = styled.div<Pick<IngredientItemProps, 'isUserHas'>>`
  display: flex;
  align-items: center;
  width: 339px;
  height: 48px;
  background: ${({ isUserHas }): string =>
    isUserHas ? COLOR.BASIC_WHITE : COLOR.BASIC_PINK};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  margin: 9px;
  padding: 5px;
`;
const StyledIngredientInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 317.49px;
  height: 32px;
`;
const StyledAmoutMeasureWrapper = styled.div``;
const StyledHasWrapper = styled.div``;

export {
  StyledIngredient,
  StyledIngredientInnerWrapper,
  StyledAmoutMeasureWrapper,
  StyledHasWrapper
};
