import type { HTMLAttributes } from 'react';

interface UploadProps
  extends HTMLAttributes<HTMLDivElement | HTMLInputElement> {
  droppable: boolean;
  name: string;
  accept?: 'image/*';
  value: File | null;
  onChangeFile(file: File): void;
}

export type { UploadProps };
