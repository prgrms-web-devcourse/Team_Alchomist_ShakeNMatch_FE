import { useState, Children, useEffect } from 'react';
import type { ReactElement } from 'react';
import { TextToggle } from '@compound';
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
    id: string;
    toggled: boolean;
  }): void => {
    if (toggledIngredient.toggled) {
      setSelectedIngredients((prevIngredients) => {
        prevIngredients.add(toggledIngredient.id);
        const nextIngredients = new Set(prevIngredients);

        return nextIngredients;
      });
    } else {
      setSelectedIngredients((prevIngredients) => {
        prevIngredients.delete(toggledIngredient.id);
        const nextIngredients = new Set(prevIngredients);

        return nextIngredients;
      });
    }
  };

  return (
    <StyledContainer {...props}>
      {Children.toArray(
        ingredients.map(({ id, name }) => (
          <TextToggle
            id={id}
            initialState={selectedIngredients.has(id)}
            onChange={handleToggle}
          >
            {name}
          </TextToggle>
        ))
      )}
    </StyledContainer>
  );
};

export default IngredientToggleList;
