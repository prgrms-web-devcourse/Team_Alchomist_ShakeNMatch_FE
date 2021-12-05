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

interface IconProps {
  type: IconType;
}

export type { IconProps };
