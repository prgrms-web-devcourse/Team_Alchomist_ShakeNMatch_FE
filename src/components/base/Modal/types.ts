import type { ReactNode } from 'react';
import type { ColorType } from '@models';

interface ModalProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: ColorType;
  visible: boolean;
}
type BackgroundProps = Pick<ModalProps, 'visible'>;
type ContainerProps = Pick<ModalProps, 'children' | 'size' | 'color'>;

export type { ModalProps, BackgroundProps, ContainerProps };
