import Album from '@compound/Album';
import CocktailDetailModal from '@domain/CocktailDetailModal';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { COLOR, MODAL_SIZE, ALBUM_TYPES } from '@constants';

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
        type={ALBUM_TYPES.RESULT}
        onClick={(): void => {
          setIsCocktailDetailModalVisible(true);
        }}
      />
      <CocktailDetailModal
        backgroundColor={COLOR.DARK_GRAY}
        cocktailId={1}
        color={COLOR.IVORY}
        size={MODAL_SIZE.LG}
        visible={isCocktailDetailModalVisible}
        onClose={(): void => {
          console.log('CocktailDetailModal Closed');
          setIsCocktailDetailModalVisible(false);
        }}
      />
    </>
  );
};
