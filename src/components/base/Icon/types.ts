import type { SVGAttributes } from 'react';

const ICON_SIZE = {
  starFull: {
    width: '20px',
    height: '20px'
  },
  starEmpty: {
    width: '20px',
    height: '20px'
  },
  flagFull: {
    width: '40px',
    height: '40px'
  },
  flagEmpty: {
    width: '40px',
    height: '40px'
  },
  arrowUpNavy: {
    width: '50px',
    height: '25px'
  },
  arrowDownNavy: {
    width: '50px',
    height: '25px'
  },
  arrowRightNavy: {
    width: '50px',
    height: '25px'
  },
  arrowLeftNavy: {
    width: '50px',
    height: '25px'
  },
  arrowUpWhite: {
    width: '50px',
    height: '25px'
  },
  arrowDownWhite: {
    width: '50px',
    height: '25px'
  },
  arrowRightWhite: {
    width: '50px',
    height: '25px'
  },
  arrowLeftWhite: {
    width: '50px',
    height: '25px'
  },
  back: {
    width: '60px',
    height: '60px'
  }
} as const;

type IconType =
  | 'starFull'
  | 'starEmpty'
  | 'flagFull'
  | 'flagEmpty'
  | 'arrowDownNavy'
  | 'arrowUpNavy'
  | 'arrowRightNavy'
  | 'arrowLeftNavy'
  | 'arrowDownWhite'
  | 'arrowUpWhite'
  | 'arrowRightWhite'
  | 'arrowLeftWhite'
  | 'back';
interface IconProps extends SVGAttributes<HTMLOrSVGElement> {
  type: IconType;
}

export type { IconType, IconProps };
export { ICON_SIZE };
