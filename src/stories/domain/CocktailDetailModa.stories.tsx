import Album from '@compound/Album';
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
      <Album
        text='마티니'
        type='result'
        onClick={(): void => {
          setIsCocktailDetailModalVisible(true);
        }}
      />
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
