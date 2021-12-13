import RegisterModal from '@domain/RegisterModal';
import type { RegisterModalProps } from '@domain/RegisterModal/types';
import type { ReactElement } from 'react';

export default {
  title: 'Component/Domain/RegisterModal',
  component: RegisterModal
};

export const Default = (props: RegisterModalProps): ReactElement => (
  <RegisterModal
    onSubmit={(e): void => {
      alert(e);
    }}
    {...props}
  />
);
