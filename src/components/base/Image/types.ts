import type { ImgHTMLAttributes } from 'react';

type ImageMode = 'cover' | 'fill' | 'contain';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  lazy?: boolean;
  width?: number | string;
  height?: number | string;
  mode: ImageMode;
  block?: boolean;
  placeholder?: string;
  threshold?: number;
}

type StyledImgProps = Pick<ImageProps, 'width' | 'height' | 'mode' | 'block'>;

export type { ImageMode, ImageProps, StyledImgProps };
