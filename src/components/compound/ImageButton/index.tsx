import { Button, Image } from '@base';
import { BUTTON_TYPES_SIZE } from '@base/Button/types';
import type { MouseEventHandler, ReactElement } from 'react';
import { useCallback } from 'react';
import type { ImageButtonProps } from './types';
import { COLOR, IMG_MODE, BUTTON_TYPE, BUTTON_SIZE } from '@constants';

const DEFAULT_ALT = 'ImageButton';

const ImageButton = ({
  type = BUTTON_TYPE.BUTTON,
  size = BUTTON_SIZE.KAKAO,
  src,
  mode = IMG_MODE.FILL,
  onClick,
  disabled = false,
  dropShadow = false,
  ...props
}: ImageButtonProps): ReactElement => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      onClick?.(e);
    },
    [onClick]
  );

  return (
    <Button
      basicColor={COLOR.TRANSPARENT}
      disabled={disabled}
      dropShadow={dropShadow}
      size={size}
      style={{ padding: 0 }}
      type={type}
      onClick={handleClick}
      {...props}
    >
      <Image
        alt={DEFAULT_ALT}
        height={BUTTON_TYPES_SIZE[size].height}
        mode={mode}
        src={src}
        width={BUTTON_TYPES_SIZE[size].width}
      />
    </Button>
  );
};

export default ImageButton;
