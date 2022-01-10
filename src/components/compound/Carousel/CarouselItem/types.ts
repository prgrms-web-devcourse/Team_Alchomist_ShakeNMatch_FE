import type { ColorType } from '@models';
import type { HTMLAttributes } from 'react';

const CAROUSEL_SIZE = {
  width: '400px',
  height: '360px'
} as const;

const CAROUSEL_IMAGE_SIZE = {
  withTitle: {
    width: '180px',
    height: '180px'
  },
  withoutTitle: {
    width: '220px',
    height: '220px'
  }
};

interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: ColorType;
  textColor?: ColorType;
  imageSrc: string;
  title?: string;
  selected?: boolean;
  onPrev?(): void;
  onNext?(): void;
}
export { CAROUSEL_SIZE, CAROUSEL_IMAGE_SIZE };
export type { CarouselItemProps };
