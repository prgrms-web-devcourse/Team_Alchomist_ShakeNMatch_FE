import type { HTMLAttributes, ReactElement } from 'react';
import type { CarouselItemProps } from '../CarouselItem/types';

interface CarouselContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<CarouselItemProps>[] | ReactElement<CarouselItemProps>;
  initialSelectedIndex?: number;
  onChangeItem?(value: number): void;
}

export type { CarouselContainerProps };
