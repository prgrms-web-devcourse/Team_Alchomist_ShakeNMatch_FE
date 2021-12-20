import type { HTMLAttributes } from 'react';
import { COLOR } from '@constants';

const ALBUM_ATTRIBUTES = {
  alcohol: {
    width: '130px',
    height: '130px',
    shape: 'circle',
    imageWidth: '40px',
    imageHeight: '40px',
    backgroundColor: COLOR.BASIC_WHITE
  },
  sweetener: {
    width: '130px',
    height: '130px',
    shape: 'round',
    imageWidth: '40px',
    imageHeight: '40px',
    backgroundColor: COLOR.BASIC_WHITE
  },
  result: {
    width: '130px',
    height: '155px',
    shape: 'round',
    imageWidth: '80px',
    imageHeight: '80px',
    backgroundColor: COLOR.BASIC_WHITE
  }
} as const;

type AlbumAttributeKeys = keyof typeof ALBUM_ATTRIBUTES;

interface AlbumProps extends HTMLAttributes<HTMLDivElement> {
  cocktailId?: number;
  type?: AlbumAttributeKeys;
  text?: string;
  imageSrc?: string;
  handleAlbumClick?(id: number): void;
}

export type { AlbumProps, AlbumAttributeKeys };
export { ALBUM_ATTRIBUTES };
