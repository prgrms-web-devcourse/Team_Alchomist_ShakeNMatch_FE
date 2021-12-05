import Upload from '@base/Upload';
import type { ReactElement } from 'react';
import type { UploadProps } from '@base/Upload/types';
import { AcceptType } from '@base/Upload/types';
import { StyledUploadPreview } from '@base/Upload/styled';

export default {
  title: 'Component/base/Upload',
  component: Upload,
  argTypes: {
    accept: {
      control: 'inline-radio',
      options: Object.keys(AcceptType)
    }
  }
};

const Droppable = (props: UploadProps): ReactElement => {
  return (
    <Upload {...props}>
      {(file: File, dragging: boolean, imgSrc: string): ReactElement => (
        <StyledUploadPreview dragging={dragging} file={file} imgSrc={imgSrc}>
          {file?.type.includes('video')
            ? '비디오네요'
            : '파일을 드래그 해 주세요'}
        </StyledUploadPreview>
      )}
    </Upload>
  );
};

export { Droppable };
