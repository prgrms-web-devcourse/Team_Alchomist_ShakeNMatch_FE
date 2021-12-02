import type { HTMLAttributes } from 'react';
import type { THEME_COLOR } from '@constants/color';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  color?: THEME_COLOR;
  visible: boolean;
}
type BackgroundProps = Pick<ModalProps, 'visible'>;
type ContainerProps = Pick<ModalProps, 'children' | 'size' | 'color'>;

export type { ModalProps, BackgroundProps, ContainerProps };
