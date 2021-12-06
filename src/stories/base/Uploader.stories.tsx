import Upload from '@base/Uploader';
import type { ReactElement } from 'react';
import type { UploadProps } from '@base/Uploader/types';
import { AcceptType } from '@base/Uploader/types';
import { StyledUploadPreview } from '@base/Uploader/styled';

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
