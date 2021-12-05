import type { ReactElement } from 'react';
import type { IconProps } from './types';
import { ICON_TYPE } from '@constants/icon';
import { ICON_SIZE } from './types';
import { ICON_COLOR } from '@constants/color';

const Icon = ({ type, ...props }: IconProps): ReactElement => {
  const IconTag = ICON_TYPE[type];
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
