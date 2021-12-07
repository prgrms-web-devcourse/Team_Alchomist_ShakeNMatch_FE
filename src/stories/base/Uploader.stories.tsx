import Upload from '@base/Uploader';
import type { ReactElement } from 'react';
import type { UploadProps } from '@base/Uploader/types';
import { AcceptType } from '@base/Uploader/types';

export default {
  title: 'Component/base/Upload',
  component: Upload,
  argTypes: {
    accept: {
      control: 'inline-radio',
      options: Object.keys(AcceptType)
    },
    droppable: {
      control: 'boolean'
    }
  }
};

const Droppable = (props: UploadProps): ReactElement => {
  return <Upload {...props} />;
};

export { Droppable };
