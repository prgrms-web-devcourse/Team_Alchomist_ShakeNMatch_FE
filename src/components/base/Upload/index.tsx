import type {
  ChangeEvent,
  ChangeEventHandler,
  DragEvent,
  ReactElement
} from 'react';
import { useState, useRef } from 'react';
import type { UploadProps } from './types';
import { StyledUploadContainer, StyledInput } from './styled';

const ZERO = 0;

const Upload = ({
  children,
  droppable,
  name,
  accept = 'image/*',
  value,
  onChangeFile,
  ...props
}: UploadProps): ReactElement => {
  const [file, setFile] = useState(value);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const target = e.target as HTMLInputElement;
    const files = target.files;

    if (!files) return;

    const changedFile: File = files[ZERO];

    setFile(changedFile);
    onChangeFile?.(changedFile);
  };

  const handleChooseFile = (): void => {
    if (inputRef.current) inputRef.current.click();
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>): void => {
    if (!droppable) return;
    e.preventDefault();
    e.stopPropagation();

    const dataTransfer = e.dataTransfer as DataTransfer;

    if (dataTransfer.items && dataTransfer.items.length > ZERO) {
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

  const handleFileDrop = (e: DragEvent<HTMLDivElement>): void => {
    if (!droppable) return;
    e.preventDefault();
    e.stopPropagation();

    const dataTransfer = e.dataTransfer as DataTransfer;
    const files = dataTransfer.files;
    const changedFile = files[ZERO];

    setFile(changedFile);
    onChangeFile?.(changedFile);
    setDragging(false);
  };

  return (
    <StyledUploadContainer
      onClick={handleChooseFile}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleFileDrop}
      {...props}
    >
      <StyledInput
        ref={inputRef}
        accept={accept}
        name={name}
        type='file'
        onChange={handleFileChange}
      />
      {typeof children === 'function' ? children(file, dragging) : children}
    </StyledUploadContainer>
  );
};

export default Upload;
