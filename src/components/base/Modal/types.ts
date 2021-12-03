import type { HTMLAttributes } from 'react';
import type { IThemeColor } from '@constants/color';

const MODAL_SIZE = {
  lg: {
    width: '1000px',
    height: '1000px'
  },
  md: {
    width: '500px',
    height: '500px'
  },
  sm: {
    width: '100px',
    height: '100px'
  }
} as const;
type ModalSizeKeys = keyof typeof MODAL_SIZE;
type IModalSize = typeof MODAL_SIZE[ModalSizeKeys];

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  size?: IModalSize;
  color?: IThemeColor;
  visible: boolean;
}
type BackgroundProps = Pick<ModalProps, 'visible'>;
type ContainerProps = Pick<ModalProps, 'children' | 'size' | 'color'>;

export type { ModalProps, IModalSize, BackgroundProps, ContainerProps };
export { MODAL_SIZE };
