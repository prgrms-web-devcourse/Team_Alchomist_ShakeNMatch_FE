import Text from '@base/Text';
import type { TextProps } from '@base/Text/types';

export default {
  title: 'Component/Base/Text',
  component: Text,
  argTypes: {
    children: {
      control: 'text'
    },
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    color: {
      control: 'color'
    },
    bold: {
      control: 'boolean'
    },
    block: {
      control: 'boolean'
    }
  }
};

export const Default = (props: TextProps): JSX.Element => (
  <>
    <Text {...props}>{props.children || 'Text'}</Text>
    <Text {...props}>{props.children || 'Text'}</Text>
    <Text {...props}>{props.children || 'Text'}</Text>
  </>
);
