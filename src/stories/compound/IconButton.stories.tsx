import IconButton from '@components/compound/IconButton';
import type { IconButtonProps } from '@components/compound/IconButton/types';
import type { ReactElement } from 'react';

export default {
  title: 'Component/Compound/IconButton',
  component: IconButton
};

export const Default = ({ name, type }: IconButtonProps): ReactElement => (
  <IconButton name={name} type={type} />
);
