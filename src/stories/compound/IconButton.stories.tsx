import IconButton from '@components/compound/IconButton';
import type { IconButtonProps } from '@components/compound/IconButton/types';
import type { ReactElement } from 'react';
import { ICON_NAME } from '@constants';

export default {
  title: 'Component/Compound/IconButton',
  component: IconButton
};

export const Default = ({ name, type }: IconButtonProps): ReactElement => (
  <IconButton name={name || ICON_NAME.FLAG_EMPTY} type={type} />
);
