import type { ReactElement } from 'react';
import { useEffect } from 'react';
import Modal from '@base/Modal';
import type { ModalProps } from '@base/Modal/types';
import { Button } from '@base';

type CocktailDetailModalProps = ModalProps;

const CocktailDetailModal = ({
  size,
  backgroundColor,
  color,
  visible
}: CocktailDetailModalProps): ReactElement => {
  useEffect((): void => {
    console.log('mounted');
  }, []);

  return (
    <Modal
      backgroundColor={backgroundColor}
      color={color}
      size={size}
      visible={visible}
    >
      <Button>{'리뷰 작성하기'}</Button>
    </Modal>
  );
};

export default CocktailDetailModal;
