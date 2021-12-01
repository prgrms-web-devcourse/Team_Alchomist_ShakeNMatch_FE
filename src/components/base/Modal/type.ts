import type { ReactNode } from 'react';
import type { ColorType } from '@models';

interface ModalProps {
  children: ReactNode;
  width?: string;
  height?: string;
  color?: ColorType;
  visible: boolean;
}
type BackgroundProps = Pick<ModalProps, 'visible'>;
type ContainerProps = Pick<
  ModalProps,
  'children' | 'width' | 'height' | 'color'
>;

export type { ModalProps, BackgroundProps, ContainerProps };
