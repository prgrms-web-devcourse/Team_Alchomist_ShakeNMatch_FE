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
import { StyledUploadContainer, StyledInput } from './styled';
import defaultUploader from '../../../assets/defaultUploader.svg';

const Upload = ({
  children,
  droppable = true,
  name = 'FileUploadInput',
  accept = 'img',
  value,
  onChangeFile,
  ...props
}: UploadProps): ReactElement => {
  const [file, setFile] = useState(value);
  const [dragging, setDragging] = useState(false);
  const [imgSrc, setImgSrc] = useState(defaultUploader);
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

    if (changedFile.type.includes(AcceptType[accept].split('/')[0])) {
      const fileUrl = URL.createObjectURL(changedFile);
      setImgSrc(fileUrl);
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
      {typeof children === 'function'
        ? children(file, dragging, imgSrc)
        : children}
    </StyledUploadContainer>
  );
};

export default Upload;
