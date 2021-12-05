import Upload from '@base/Upload';
import type { ReactElement } from 'react';
import type { UploadProps } from '@base/Upload/types';
import { SytledUploadPreview } from '@base/Upload/styled';

export default {
  title: 'Component/base/Upload',
  component: Upload
};

const Droppable = (props: UploadProps): ReactElement => {
  return (
    <Upload {...props}>
      {(file: File, dragging: boolean, imgSrc: string): ReactElement => (
        <SytledUploadPreview dragging={dragging} file={file} imgSrc={imgSrc}>
          {file ? file.name : '파일을 드래그 해 주세요'}
        </SytledUploadPreview>
      )}
    </Upload>
  );
};

export { Droppable };
