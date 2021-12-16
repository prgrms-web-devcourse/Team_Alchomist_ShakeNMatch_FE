import { COLOR } from '@constants';
import styled from '@emotion/styled';
import type { IngredientObject } from './types';

const StyledIngredient = styled.div<Pick<IngredientObject, 'isUserHas'>>`
  width: 339px;
  height: 48px;
  background: ${({ isUserHas }): string =>
    isUserHas ? COLOR.BASIC_WHITE : COLOR.BASIC_PINK};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  margin: 9px;
  padding: 5px;
`;

export { StyledIngredient };
