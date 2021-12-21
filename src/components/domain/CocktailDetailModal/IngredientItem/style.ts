import { COLOR } from '@constants';
import type { CSSObject } from '@emotion/styled';
import styled from '@emotion/styled';
import type { IngredientItemProps } from './types';

const StyledIngredient = styled.div<Pick<IngredientItemProps, 'isUserHas'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 339px;
  height: 48px;
  background: ${({ isUserHas }): string =>
    isUserHas ? COLOR.BASIC_WHITE : COLOR.BASIC_PINK};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  margin: 9px;
  padding: 5px;
  ${({ isUserHas }): CSSObject =>
    isUserHas ? { userSelect: 'none' } : { cursor: 'pointer' }}
  ${({ isUserHas }): CSSObject | boolean =>
    !isUserHas && {
      ':active': { transform: 'translateY(3px)' },
      ':hover': {
        filter: 'brightness(0.95)'
      }
    }};
`;
const StyledIngredientInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 317.49px;
  height: 32px;
`;
const StyledNameAmoutMeasureWrapper = styled.div``;
const StyledHasWrapper = styled.div``;

export {
  StyledIngredient,
  StyledIngredientInnerWrapper,
  StyledNameAmoutMeasureWrapper,
  StyledHasWrapper
};
