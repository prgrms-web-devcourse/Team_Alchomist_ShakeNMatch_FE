import type { ColorKeys } from '@models';
import type { HTMLAttributes } from 'react';

interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: ColorKeys;
  textColor?: ColorKeys;
  imageSrc: string;
  title?: string;
  selected?: boolean;
  onPrev?(): void;
  onNext?(): void;
}

export type { CarouselItemProps };
