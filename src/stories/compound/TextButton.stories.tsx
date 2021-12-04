import TextButton from '@components/compound/TextButton';
// import type { TextButtonProps } from 'components/compound/TextButton';
import type { ReactElement } from 'react';

export default {
  title: 'Component/TextButton',
  component: TextButton
};

export const Default = (): ReactElement => {
  return (
    <TextButton
      buttonProps={{
        type: 'button',
        size: 'sm',
        color: 'primary'
      }}
      textProps={{
        size: 'lg',
        color: 'red'
      }}
    >
      하이
    </TextButton>
  );
};
