import type { HTMLAttributes } from 'react';

interface UploadProps
  extends HTMLAttributes<HTMLDivElement | HTMLInputElement> {
  droppable: boolean;
  name?: string;
  accept: 'img';
  value: File | null;
  onChangeFile(file: File): void;
}

interface PreviewProps {
  dragging: boolean;
  file: File;
  imgSrc: string;
}

const AcceptType = {
  img: 'image/*'
} as const;

export { AcceptType };
export type { UploadProps, PreviewProps };
