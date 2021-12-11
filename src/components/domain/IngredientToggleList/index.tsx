import { useState, Children, useEffect } from 'react';
import type { ReactElement } from 'react';
import TextToggle from '@compound/TextToggle';
import { StyledContainer } from './styled';
import type { IngredientToggleListProps } from './types';

const IngredientToggleList = ({
  ingredients,
  onItemSelected,
  initialSelectedIngredients,
  ...props
}: IngredientToggleListProps): ReactElement => {
  const [selectedIngredients, setSelectedIngredients] = useState(
    new Set(initialSelectedIngredients)
  );

  useEffect(() => {
    onItemSelected?.(Array.from(selectedIngredients));
  }, [selectedIngredients]);

  const handleToggle = (toggledIngredient: {
    name: string;
    toggled: boolean;
  }): void => {
    if (toggledIngredient.toggled) {
      setSelectedIngredients((prevIngredients) => {
        prevIngredients.add(toggledIngredient.name);
        const nextIngredients = new Set(prevIngredients);

        return nextIngredients;
      });
    } else {
      setSelectedIngredients((prevIngredients) => {
        prevIngredients.delete(toggledIngredient.name);
        const nextIngredients = new Set(prevIngredients);

        return nextIngredients;
      });
    }
  };

  return (
    <StyledContainer {...props}>
      {Children.toArray(
        ingredients.map((ingredient) => (
          // eslint-disable-next-line react/jsx-key
          <TextToggle
            initialState={selectedIngredients.has(ingredient.name)}
            name={ingredient.name}
            onChange={handleToggle}
          >
            {ingredient.name}
          </TextToggle>
        ))
      )}
    </StyledContainer>
  );
};

export default IngredientToggleList;
