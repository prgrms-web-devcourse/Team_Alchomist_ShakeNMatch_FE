import type { HTMLAttributes } from 'react';

interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor: string;
  imageSrc: string;
  title?: string;
  selected?: boolean;
  onPrev?(): void;
  onNext?(): void;
}

export type { CarouselItemProps };
