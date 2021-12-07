/* eslint-disable react/jsx-key */
// 재료 배열을 받는다
// 배열을 map 하며 TextToggle을 생성한다.
//   children,   -> 이름
//   block = false,
//   name, -> 상태 저장용 이름
//   initialState = false,
//   toggleType = 'ingredient',
//   onChange

// 토글이 될 때마다 onChange 함수가 호출된다.
// onChange 함수는 해당 버튼의 name을 List의 상태값에 추가한다.

// List는 onChange 함수를 받는다. 그래서 상태값이 바뀔때마다 상위 컴포넌트에 상태를 업데이트 한다.
// 그런데 div에는 onChange가 업으니까 useEffect를 써서 상태가 바뀔때마다 수동으로 업데이트를 시켜줘야겠네

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
