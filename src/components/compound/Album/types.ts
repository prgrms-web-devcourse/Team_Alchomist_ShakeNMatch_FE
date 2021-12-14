import type { HTMLAttributes } from 'react';

const ALBUM_ATTRIBUTES = {
  alcohol: {
    width: '130px',
    height: '130px',
    shape: 'circle'
  },
  sweetener: {
    width: '130px',
    height: '130px',
    shape: 'round'
  },
  result: {
    width: '130px',
    height: '150px',
    shape: 'round'
  }
} as const;

type AlbumAttributeKeys = keyof typeof ALBUM_ATTRIBUTES;

interface AlbumProps extends HTMLAttributes<HTMLDivElement> {
  type?: AlbumAttributeKeys;
  text?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageSrc?: string;
}

export type { AlbumProps, AlbumAttributeKeys };
export { ALBUM_ATTRIBUTES };
