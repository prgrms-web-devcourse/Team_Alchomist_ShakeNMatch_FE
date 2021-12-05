import TextToggleButton from '@components/compound/TextToggleButton';
import type { ReactElement } from 'react';
import type { TextToggleButtonProps } from '@components/compound/TextToggleButton';

export default {
  title: 'Compoonent/TextToggleButton',
  component: TextToggleButton
};

export const Default = (props: TextToggleButtonProps): ReactElement => (
  <TextToggleButton {...props}>gkdl</TextToggleButton>
);
