import type { ReactElement } from 'react';
import { useState } from 'react';
import Modal from '@base/Modal';
import type { ModalProps } from '@base/Modal/types';

export default {
  title: 'Component/Base/Modal',
  component: Modal,
  argTypes: {
    size: {
      control: 'inline-radio',
      options: [undefined, 'sm', 'md', 'lg']
    }
  }
};

export const Default = (props: ModalProps): ReactElement => {
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
      <Modal
        backgroundColor={props.backgroundColor}
        color={props.color}
        size={props.size}
        visible={isVisible}
        onClose={(): void => {
          setIsVisible(false);
        }}
      >
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
