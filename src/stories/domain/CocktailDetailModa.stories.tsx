import { Button } from '@base';
import CocktailDetailModal from '@domain/CocktailDetailModal';
import type { ReactElement } from 'react';
import { useState } from 'react';

export default {
  title: 'Component/Domain/CocktailDetailModal',
  component: CocktailDetailModal
};

export const Default = (): ReactElement => {
  const [isCocktailDetailModalVisible, setIsCocktailDetailModalVisible] =
    useState(false);
  return (
    <>
      <Button
        type='button'
        onClick={(): void => {
          setIsCocktailDetailModalVisible(true);
        }}
      >
        {'Click'}
      </Button>
      <CocktailDetailModal
        backgroundColor='DARK_GRAY'
        color='IVORY'
        size='lg'
        visible={isCocktailDetailModalVisible}
        onClose={(): void => {
          console.log('CocktailDetailModal Closed');
          setIsCocktailDetailModalVisible(false);
        }}
      />
    </>
  );
};
