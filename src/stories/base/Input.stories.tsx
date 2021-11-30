import type { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import Input from '../../components/base/Input';
import type { InputProps } from '../../components/base/Input';

export default {
  title: 'Component/Base/Input',
  component: Input,
  argTypes: {
    inputSize: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'xs'
    },
    fontSize: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'xs'
    }
  }
};

export const Default = (props: InputProps): ReactJSXElement => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>text</label>
      <Input {...props} />

      <label>number</label>
      <Input {...props} />
    </div>
  );
};
