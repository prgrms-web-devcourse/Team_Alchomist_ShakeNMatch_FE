import type {
  ChangeEvent,
  ChangeEventHandler,
  DragEvent,
  ReactElement
} from 'react';
import { useState, useRef } from 'react';
import { AcceptType } from './types';
import type { UploadProps } from './types';
import { StyledUploadContainer, StyledInput } from './styled';
import defaultUploader from '../../../assets/defaultUploader.svg';

const ZERO = 0;

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

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const target = e.target as HTMLInputElement;
    const files = target.files;

    if (!files) return;

    const changedFile: File = files[ZERO];
    const fileUrl = URL.createObjectURL(changedFile);
    setImgSrc(fileUrl);
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
    const changedFile: File = files[ZERO];
    if (changedFile.type.includes(AcceptType[accept].split('/')[ZERO])) {
      const fileUrl = URL.createObjectURL(changedFile);
      setImgSrc(fileUrl);
      setFile(changedFile);
      onChangeFile?.(changedFile);
    }
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
        accept={AcceptType[accept]}
        name={name}
        type='file'
        onChange={handleFileChange}
      />
      {typeof children === 'function'
        ? children(file, dragging, imgSrc)
        : children}
    </StyledUploadContainer>
  );
};

export default Upload;
