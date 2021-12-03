import type { ReactElement } from 'react';
import { Line } from './styled';
import type { DividerProps } from './types';

const DEFAULT_GAP = 0;
const DEFAULT_SIZE = 1;

// 임시 컬러
const DEFAULT_COLOR = 'black';

const Divider = ({
  direction = 'horizontal',
  size = DEFAULT_SIZE,
  gap = DEFAULT_GAP,
  color = DEFAULT_COLOR,
  ...props
}: DividerProps): ReactElement => {
  return (
    <Line
      className={direction}
      color={color}
      gap={gap}
      size={size}
      {...props}
    />
  );
};

export default Divider;
