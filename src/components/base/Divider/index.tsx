import type { ReactElement } from 'react';
import { StyledLine } from './styled';
import type { DividerProps } from './types';
import { COLOR, DIVIDER_DIRECTION } from '@constants';

const DEFAULT_GAP = 0;
const DEFAULT_SIZE = 1;

// 임시 컬러

const Divider = ({
  direction = DIVIDER_DIRECTION.HORIZONTAL,
  size = DEFAULT_SIZE,
  gap = DEFAULT_GAP,
  color = COLOR.DARK_GRAY,
  ...props
}: DividerProps): ReactElement => {
  return (
    <StyledLine
      className={direction}
      color={color}
      gap={gap}
      size={size}
      {...props}
    />
  );
};

export default Divider;
