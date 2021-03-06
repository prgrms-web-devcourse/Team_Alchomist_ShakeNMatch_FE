import type { TextButtonProps } from '@components/compound/TextButton/types';
import TextButton from '@components/compound/TextButton';
import type { ReactElement } from 'react';

export default {
  title: 'Component/Compound/TextButton',
  component: TextButton,
  argTypes: {
    block: {
      control: 'boolean'
    },
    buttonType: {
      control: 'inline-radio',
      options: ['SHORT_WHITE', 'SHORT_PINK', 'LONG_WHITE', 'LONG_PINK']
    },
    children: {
      control: 'text'
    }
  }
};

interface TextButtonStoryProps extends TextButtonProps {
  children: string;
}

export const Default = (props: TextButtonStoryProps): ReactElement => {
  return <TextButton {...props}></TextButton>;
};
