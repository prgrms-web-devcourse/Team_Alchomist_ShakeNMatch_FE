import type { HTMLAttributes } from 'react';
import type { ColorKeys } from '@models';

const ALBUM_ATTRIBUTES = {
  alcohol: {
    width: '130px',
    height: '130px',
    shape: 'circle',
    imageWidth: '70px',
    imageHeight: '70px'
  },
  sweetener: {
    width: '130px',
    height: '130px',
    shape: 'round',
    imageWidth: '80px',
    imageHeight: '80px'
  },
  result: {
    width: '130px',
    height: '155px',
    shape: 'round',
    imageWidth: '90px',
    imageHeight: '90px'
  }
} as const;

type AlbumAttributeKeys = keyof typeof ALBUM_ATTRIBUTES;

interface AlbumProps extends HTMLAttributes<HTMLDivElement> {
  albumId?: number;
  type?: AlbumAttributeKeys;
  text?: string;
  imageSrc?: string;
  backgroundColor?: ColorKeys;
  textColor?: ColorKeys;
  onAlbumClick?(id: number): void;
}

export type { AlbumProps, AlbumAttributeKeys };
export { ALBUM_ATTRIBUTES };
