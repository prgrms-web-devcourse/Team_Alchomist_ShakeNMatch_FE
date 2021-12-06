import type {
  ChangeEvent,
  ChangeEventHandler,
  DragEvent,
  DragEventHandler,
  ReactElement
} from 'react';
import { useState, useRef } from 'react';
import { AcceptType } from './types';
import type { UploadProps } from './types';
import {
  StyledUploadContainer,
  StyledInput,
  StyledUploadPreview
} from './styled';
import { Text } from '@base';
import defaultUploader from '../../../assets/defaultUploader.svg';

const Upload = ({
  droppable = true,
  name = 'FileUploadInput',
  accept = 'image',
  value,
  onChangeFile,
  ...props
}: UploadProps): ReactElement => {
  const [file, setFile] = useState(value);
  const [dragging, setDragging] = useState(false);
  const [fileSrcUrl, setFileSrcUrl] = useState(defaultUploader);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChangeOrDrop: ChangeEventHandler<HTMLInputElement> &
    DragEventHandler<HTMLDivElement> = (
    e: ChangeEvent<HTMLInputElement> & DragEvent<HTMLDivElement>
  ): void => {
    let fileContainer: HTMLInputElement | DataTransfer;

    if (droppable && e.dataTransfer) {
      e.preventDefault();
      e.stopPropagation();
      fileContainer = e.dataTransfer;
    } else {
      fileContainer = e.target;
    }

    if (!fileContainer.files) return;

    const changedFile: File = fileContainer.files && fileContainer.files[0];

    if (changedFile.type?.includes(AcceptType[accept].split('/')[0])) {
      const fileUrl = URL.createObjectURL(changedFile);
      setFileSrcUrl(fileUrl);
      setFile(changedFile);
      onChangeFile?.(changedFile);
    }

    if (e.dataTransfer) setDragging(false);
  };

  const handleChooseFile = (): void => {
    if (inputRef.current) inputRef.current.click();
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>): void => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    const dataTransfer = e.dataTransfer as DataTransfer;

    if (dataTransfer.items && dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>): void => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    setDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>): void => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <StyledUploadContainer
      onClick={handleChooseFile}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleFileChangeOrDrop}
      {...props}
    >
      <StyledInput
        ref={inputRef}
        accept={AcceptType[accept]}
        name={name}
        type='file'
        onChange={handleFileChangeOrDrop}
      />
      <StyledUploadPreview
        dragging={dragging}
        fileSrcType={accept}
        fileSrcUrl={fileSrcUrl}
      >
        {!file ? (
          <Text size='xs'>{`파일(${accept})을 선택/드래그 해 주세요`}</Text>
        ) : (
          <Text size='xs'>{`새 파일(${accept})을 업로드 하려면 클릭/드래그`}</Text>
        )}
      </StyledUploadPreview>
    </StyledUploadContainer>
  );
};

export default Upload;
