import Input from '@base/Input';
import type { InputProps } from '@base/Input/type';
import type { ReactElement } from 'react';

export default {
  title: 'Component/Base/Input',
  component: Input,
  argTypes: {
    inputType: {
      control: 'inline-radio',
      options: ['nickname', 'gender', 'age', 'mbti']
    },
    maxLength: {
      control: 'number',
      defaultValue: 20
    },
    fontSize: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'xs'
    }
  }
};

export const Default = (props: InputProps): ReactElement => {
  return <Input placeholder='입력' {...props} />;
};
