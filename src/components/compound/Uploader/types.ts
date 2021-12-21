import type { HTMLAttributes } from 'react';

interface UploadProps
  extends HTMLAttributes<HTMLDivElement | HTMLInputElement> {
  droppable: boolean;
  name?: string;
  accept: AcceptTypeKeys;
  value: File | null;
  onChangeFile(file: File): void;
}

interface PreviewProps {
  dragging: boolean;
  fileSrcType: AcceptTypeKeys;
  fileSrcUrl: string | null;
}

const AcceptType = {
  image: 'image/*',
  video: 'video/*'
} as const;

type AcceptTypeKeys = keyof typeof AcceptType;

export { AcceptType };
export type { UploadProps, PreviewProps, AcceptTypeKeys };
