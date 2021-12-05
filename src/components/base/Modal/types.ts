import type { HTMLAttributes } from 'react';
import type { ColorKeys } from '@models/types';

const MODAL_SIZE = {
  lg: {
    width: '574px',
    height: '668px'
  },
  md: {
    width: '891px',
    height: '668px'
  },
  sm: {
    width: '1080px',
    height: '840px'
  }
} as const;
type ModalSizeKeys = keyof typeof MODAL_SIZE;

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  size?: ModalSizeKeys;
  color?: ColorKeys;
  visible: boolean;
}
type BackgroundProps = Pick<ModalProps, 'visible'>;
type ContainerProps = Pick<ModalProps, 'children' | 'size' | 'color'>;

export type { ModalProps, BackgroundProps, ContainerProps };
export { MODAL_SIZE };
