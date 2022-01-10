import type { HTMLAttributes } from 'react';
import type { ColorType } from '@models/types';

const MODAL_SIZE = {
  sm: {
    width: '360px',
    height: '400px'
  },
  md: {
    width: '680px',
    height: '480px'
  },
  lg: {
    width: '1040px',
    height: '640px'
  }
} as const;
type ModalSizeKeys = keyof typeof MODAL_SIZE;

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  size: ModalSizeKeys;
  color: ColorType;
  backgroundColor: ColorType;
  visible: boolean;
  onClose?(): void;
}
type BackgroundProps = Pick<ModalProps, 'visible' | 'backgroundColor'>;
type ContainerProps = Pick<ModalProps, 'children' | 'size' | 'color'>;

export type { ModalProps, BackgroundProps, ContainerProps };
export { MODAL_SIZE };
