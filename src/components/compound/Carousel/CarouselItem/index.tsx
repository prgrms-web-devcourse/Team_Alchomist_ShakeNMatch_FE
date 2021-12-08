import Image from '@base/Image';
import Text from '@base/Text';
import IconButton from '@compound/IconButton';
import type { ReactElement } from 'react';
import { useCallback } from 'react';
import { StyledContainer, StyledWrapper } from './styled';
import type { CarouselItemProps } from './types';
import { CAROUSEL_IMAGE_SIZE } from './types';

const CarouselItem = ({
  backgroundColor = 'GREEN',
  textColor = 'BASIC_WHITE',
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
      hidden={!selected}
      {...props}
    >
      <IconButton
        disabled={!selected}
        name='arrowUpWhite'
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
          mode='fill'
          placeholder=''
          src={imageSrc}
          width={
            title
              ? CAROUSEL_IMAGE_SIZE.withTitle.width
              : CAROUSEL_IMAGE_SIZE.withoutTitle.width
          }
        />
        {title && (
          <Text bold color={textColor} size='lg'>
            {title}
          </Text>
        )}
      </StyledWrapper>
      <IconButton
        disabled={!selected}
        name='arrowDownWhite'
        type='button'
        onClick={handleNext}
      />
    </StyledContainer>
  );
};

export default CarouselItem;
