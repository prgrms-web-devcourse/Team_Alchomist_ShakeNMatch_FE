import type { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import Input from '../../components/base/Input';

export default {
  title: 'Components/base/Input',
  component: Input
};

export const Default = (): ReactJSXElement => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>text</label>
      <Input inputSize='xs' placeholder='Enter a text' />

      <label>number</label>
      <Input inputSize='xl' placeholder='Enter a Number' />
    </div>
  );
};
