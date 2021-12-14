import { COLOR } from '@constants';
import styled from '@emotion/styled';
import type { ReactElement } from 'react';

const StyledIngredient = styled.div`
  width: 339px;
  height: 48px;
  background: ${COLOR.BASIC_WHITE};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  margin: 9px;
`;
const IngredientItem = (): ReactElement => {
  return <StyledIngredient />;
};

export default IngredientItem;
