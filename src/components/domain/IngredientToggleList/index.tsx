/* eslint-disable react/jsx-key */
import { useState, Children, useEffect } from 'react';
import type { ReactElement } from 'react';
import TextToggle from '@compound/TextToggle';
import { StyledContainer } from './styled';
import type { IngredientToggleListProps } from './types';

const IngredientToggleList = ({
  ingredients,
  onSelect
}: IngredientToggleListProps): ReactElement => {
  const [selectedIngredients, setSelectedIngredients] = useState(
    new Set<string>([])
  );

  // 주석
  console.log(selectedIngredients);

  useEffect(() => {
    onSelect(selectedIngredients);
  }, [selectedIngredients]);

  const handleToggle = (toggledIngredient: string): void => {
    if (selectedIngredients.has(toggledIngredient)) {
      setSelectedIngredients((prevIngredients) => {
        prevIngredients.delete(toggledIngredient);
        const nextIngredients = new Set(prevIngredients);

        return nextIngredients;
      });
    } else {
      setSelectedIngredients((prevIngredients) => {
        prevIngredients.add(toggledIngredient);
        const nextIngredients = new Set(prevIngredients);

        return nextIngredients;
      });
    }
  };

  return (
    <StyledContainer>
      {Children.toArray(
        ingredients.map((ingredient) => (
          <TextToggle name={ingredient.name} onChange={handleToggle}>
            {ingredient.name}
          </TextToggle>
        ))
      )}
    </StyledContainer>
  );
};

export default IngredientToggleList;
