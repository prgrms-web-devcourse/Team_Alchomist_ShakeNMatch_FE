import type { HTMLAttributes } from 'react';

type ImageMode = 'cover' | 'fill' | 'contain';

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  lazy?: boolean;
  src: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  mode: ImageMode;
  block?: boolean;
  placeholder?: string;
  threshold: number;
}

type StyledImgProps = Pick<ImageProps, 'width' | 'height' | 'mode' | 'block'>;

export type { ImageProps, StyledImgProps };
