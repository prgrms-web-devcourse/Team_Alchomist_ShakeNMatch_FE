import styled from '@emotion/styled';
import type { ReactElement } from 'react';

const StyledIngredient = styled.div`
  width: 200px;
  height: 50px;
  background-color: white;
`;
const IngredientItem = (): ReactElement => {
  return <StyledIngredient />;
};

export default IngredientItem;
