import Text from '@base/Text';
import type { TextProps } from '@base/Text/types';
import { TEXT_SIZE } from '@base/Text/types';
import { COLOR } from '@constants';

export default {
  title: 'Component/Base/Text',
  component: Text,
  argTypes: {
    children: {
      control: 'text'
    },
    size: {
      control: 'inline-radio',
      options: Object.keys(TEXT_SIZE)
    },
    color: {
      control: 'select',
      options: Object.keys(COLOR)
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
