import type {
  ChangeEvent,
  ChangeEventHandler,
  DragEventHandler,
  ReactElement,
  DragEvent
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

const Uploader = ({
  droppable = true,
  name = 'FileUploadInput',
  accept = 'image',
  value,
  onChangeFile,
  ...props
}: UploadProps): ReactElement => {
  const [file, setFile] = useState(value);
  const [dragging, setDragging] = useState(false);
  const [fileSrcUrl, setFileSrcUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChangeOrDrop: ChangeEventHandler<HTMLInputElement> &
    DragEventHandler<HTMLDivElement> = (
    e: ChangeEvent<HTMLInputElement> & DragEvent<HTMLDivElement>
  ) => {
    let fileContainer: HTMLInputElement | DataTransfer | null = null;

    if (droppable && e.dataTransfer) {
      e.preventDefault();
      e.stopPropagation();
      fileContainer = e.dataTransfer;
      setDragging(false);
    } else if (e.target instanceof HTMLInputElement) {
      fileContainer = e.target;
    }

    if (!fileContainer) return;

    const changedFile: File | null =
      fileContainer.files && fileContainer.files[0];

    if (changedFile?.type?.includes(AcceptType[accept].split('/')[0])) {
      const fileUrl = URL.createObjectURL(changedFile);
      setFileSrcUrl(fileUrl);
      setFile(changedFile);
      onChangeFile?.(changedFile);
    }
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
          <Text
            color='DARK_GRAY'
            size='xs'
          >{`${accept}를 선택/드래그 해 주세요`}</Text>
        ) : (
          <Text
            color='DARK_GRAY_OPACITY'
            size='xs'
          >{`다른 ${accept}를 업로드 하려면 선택/드래그`}</Text>
        )}
      </StyledUploadPreview>
    </StyledUploadContainer>
  );
};

export default Uploader;
