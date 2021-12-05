import type { ReactElement } from 'react';
import { StyledLine } from './styled';
import type { DividerProps } from './types';

const DEFAULT_GAP = 0;
const DEFAULT_SIZE = 1;

// 임시 컬러

const Divider = ({
  direction = 'horizontal',
  size = DEFAULT_SIZE,
  gap = DEFAULT_GAP,
  color = 'DARK_GRAY',
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
