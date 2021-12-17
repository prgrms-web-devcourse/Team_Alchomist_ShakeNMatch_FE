/* eslint-disable @typescript-eslint/no-magic-numbers */
import IngredientSelectModal from '@domain/IngredientSelectModal';
import type { ReactElement } from 'react';
import { useState } from 'react';

export default {
  title: 'Component/domain/IngredientSelectModal',
  component: IngredientSelectModal
};

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
        initialMainIngredient={[1]}
        initialSubIngredient={[2]}
        visible={isVisible}
        onClose={(): void => {
          setIsVisible(false);
        }}
        // 서버에 새로운 재료를 저장
        onSelectDone={(ingredient: number[]): void => {
          console.log(`${ingredient}를 서버에 저장!`);
          setIsVisible(false);
        }}
      />
    </>
  );
};
