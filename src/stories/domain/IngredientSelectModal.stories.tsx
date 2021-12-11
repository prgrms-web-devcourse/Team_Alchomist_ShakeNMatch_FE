import IngredientSelectModal from '@domain/IngredientSelectModal';
import type { ReactElement } from 'react';
import { useState } from 'react';

export default {
  title: 'Component/domain/IngredientSelectModal',
  component: IngredientSelectModal
};

const DUMMY = ['123', '456', '789'];

export const Default = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button
        type='button'
        onClick={(): void => {
          setIsVisible(true);
        }}
      >
        모달 확인하기
      </button>
      <IngredientSelectModal
        initialUserIngredient={DUMMY}
        visible={isVisible}
        onClose={(): void => {
          setIsVisible(false);
        }}
        onSelectDone={(ingredient: string[]): void => {
          console.log(ingredient);
        }}
      />
    </>
  );
};
