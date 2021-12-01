import type { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  width?: string;
  height?: string;
  // color 타입은 추후 THEME_COLOR constants로 변경 예정
  color?: string;
  visible: boolean;
}
type BackgroundProps = Pick<ModalProps, 'visible'>;
type ContainerProps = Pick<
  ModalProps,
  'children' | 'width' | 'height' | 'color'
>;

export type { ModalProps, BackgroundProps, ContainerProps };
