import { Image, Text } from '@base';
import { IconButton } from '@compound';
import type { ReactElement } from 'react';
import { useCallback } from 'react';
import { StyledContainer, StyledWrapper } from './styled';
import type { CarouselItemProps } from './types';
import { CAROUSEL_IMAGE_SIZE } from './types';
import { COLOR, TEXT_SIZE, IMG_MODE } from '@constants';

const CarouselItem = ({
  backgroundColor = COLOR.GREEN,
  textColor = COLOR.BASIC_WHITE,
  imageSrc,
  title,
  selected = false,
  onPrev,
  onNext,
  ...props
}: CarouselItemProps): ReactElement => {
  const handlePrev = useCallback(() => {
    onPrev?.();
  }, [onPrev]);

  const handleNext = useCallback(() => {
    onNext?.();
  }, [onNext]);

  return (
    <StyledContainer
      backgroundColor={backgroundColor}
      selected={selected}
      {...props}
    >
      <IconButton
        disabled={!selected}
        name='arrowUpNavy'
        type='button'
        onClick={handlePrev}
      />
      <StyledWrapper>
        <Image
          height={
            title
              ? CAROUSEL_IMAGE_SIZE.withTitle.height
              : CAROUSEL_IMAGE_SIZE.withoutTitle.height
          }
          mode={IMG_MODE.CONTAIN}
          src={imageSrc}
          width={
            title
              ? CAROUSEL_IMAGE_SIZE.withTitle.width
              : CAROUSEL_IMAGE_SIZE.withoutTitle.width
          }
        />
        {title && (
          <Text bold color={textColor} size={TEXT_SIZE.lg}>
            {title}
          </Text>
        )}
      </StyledWrapper>
      <IconButton
        disabled={!selected}
        name='arrowDownNavy'
        type='button'
        onClick={handleNext}
      />
    </StyledContainer>
  );
};

export default CarouselItem;
