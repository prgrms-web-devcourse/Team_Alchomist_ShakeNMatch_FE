import type { ReactElement } from 'react';
import type { IconProps } from './types';
import { ICON_TYPES, ICON_COLOR } from '@constants';
import { ICON_SIZE } from './types';

const Icon = ({ type, ...props }: IconProps): ReactElement => {
  const IconTag = ICON_TYPES[type];
  const iconSize = ICON_SIZE[type];
  const iconColor = ICON_COLOR[type];

  const iconStyle = {
    color: iconColor,
    width: iconSize.width,
    height: iconSize.height
  };
  return <IconTag style={{ ...iconStyle }} {...props} />;
};

export default Icon;
