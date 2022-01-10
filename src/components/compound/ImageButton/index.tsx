import { Button, Image } from '@base';
import { BUTTON_SIZE } from '@base/Button/types';
import type { MouseEventHandler, ReactElement } from 'react';
import { useCallback } from 'react';
import type { ImageButtonProps } from './types';
import { IMG_MODE } from '@constants';

const ImageButton = ({
  type = 'button',
  size = 'kakao',
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
      basicColor='TRANSPARENT'
      disabled={disabled}
      dropShadow={dropShadow}
      size={size}
      style={{ padding: 0 }}
      type={type}
      onClick={handleClick}
      {...props}
    >
      <Image
        alt='ImageButton'
        height={BUTTON_SIZE[size].height}
        mode={mode}
        src={src}
        width={BUTTON_SIZE[size].width}
      />
    </Button>
  );
};

export default ImageButton;
