import type { ButtonProps } from '@base/Button/types';
import type { ImageMode } from '@base/Image/types';

interface ImageButtonProps extends ButtonProps {
  src: string;
  mode?: ImageMode;
  disabled?: boolean;
}

export type { ImageButtonProps };
