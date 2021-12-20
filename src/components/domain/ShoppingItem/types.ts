import type { HTMLAttributes } from 'react';

interface ShoppingItemProps extends HTMLAttributes<HTMLDivElement> {
  imageWidth?: string;
  imageHeight?: string;
  imageSrc?: string;
  title?: string;
  price?: string;
  vendor?: string;
}

export type { ShoppingItemProps };
