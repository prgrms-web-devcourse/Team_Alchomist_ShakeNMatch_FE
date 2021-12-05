import type { HTMLAttributes } from 'react';
import type { ColorKeys } from '@models/types';

const MODAL_SIZE = {
  sm: {
    width: '574px',
    height: '668px'
  },
  md: {
    width: '891px',
    height: '668px'
  },
  lg: {
    width: '1080px',
    height: '840px'
  }
} as const;
type ModalSizeKeys = keyof typeof MODAL_SIZE;

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  size: ModalSizeKeys;
  color: ColorKeys;
  backgroundColor: ColorKeys;
  visible: boolean;
}
type BackgroundProps = Pick<ModalProps, 'visible' | 'backgroundColor'>;
type ContainerProps = Pick<ModalProps, 'children' | 'size' | 'color'>;

export type { ModalProps, BackgroundProps, ContainerProps };
export { MODAL_SIZE };
