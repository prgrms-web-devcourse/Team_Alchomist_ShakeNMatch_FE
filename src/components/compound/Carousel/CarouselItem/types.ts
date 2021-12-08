import type { ColorKeys } from '@models';
import type { HTMLAttributes } from 'react';

const CAROUSEL_SIZE = {
  width: '380px',
  height: '330px'
} as const;

const CAROUSEL_IMAGE_SIZE = {
  withTitle: {
    width: '135px',
    height: '135px'
  },
  withoutTitle: {
    width: '220px',
    height: '220px'
  }
};

interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: ColorKeys;
  textColor?: ColorKeys;
  imageSrc: string;
  title?: string;
  selected?: boolean;
  onPrev?(): void;
  onNext?(): void;
}
export { CAROUSEL_SIZE, CAROUSEL_IMAGE_SIZE };
export type { CarouselItemProps };
