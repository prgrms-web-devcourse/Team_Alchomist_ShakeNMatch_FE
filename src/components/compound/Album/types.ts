import type { HTMLAttributes } from 'react';
import { COLOR } from '@constants';
import type { HTMLAttributes } from 'react';

const ALBUM_ATTRIBUTES = {
  alcohol: {
    width: '130px',
    height: '130px',
    shape: 'circle',
    imageWidth: '70px',
    imageHeight: '70px',
    backgroundColor: COLOR.BASIC_WHITE
  },
  sweetener: {
    width: '130px',
    height: '130px',
    shape: 'round',
    imageWidth: '80px',
    imageHeight: '80px',
    backgroundColor: COLOR.BASIC_WHITE
  },
  result: {
    width: '130px',
    height: '155px',
    shape: 'round',
    imageWidth: '90px',
    imageHeight: '90px',
    backgroundColor: COLOR.BASIC_WHITE
  }
} as const;

type AlbumAttributeKeys = keyof typeof ALBUM_ATTRIBUTES;

interface AlbumProps extends HTMLAttributes<HTMLDivElement> {
  type?: AlbumAttributeKeys;
  text?: string;
  imageSrc?: string;
}

export type { AlbumProps, AlbumAttributeKeys };
export { ALBUM_ATTRIBUTES };
