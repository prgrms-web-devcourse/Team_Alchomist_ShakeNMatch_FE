import type { ReactElement } from 'react';
import { useState } from 'react';
import Modal from '../components/base/Modal';

export default {
  title: 'Component/Modal',
  component: Modal
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
        click
      </button>
      <Modal visible={isVisible}>
        <div>this is Modal</div>
        <span>inner span</span>
        <button
          type='button'
          onClick={(): void => {
            setIsVisible(false);
          }}
        >
          닫기
        </button>
      </Modal>
    </>
  );
};
