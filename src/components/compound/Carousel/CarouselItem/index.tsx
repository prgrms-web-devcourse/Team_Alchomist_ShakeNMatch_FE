import Image from '@base/Image';
import Text from '@base/Text';
import type { ReactElement } from 'react';
import { useCallback } from 'react';
import {
  StyledContainer,
  StyledNextButton,
  StyledPrevButton,
  StyledWrapper
} from './styled';
import type { CarouselItemProps } from './types';

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
      <StyledPrevButton disabled={!selected} onClick={handlePrev} />
      <StyledWrapper>
        <Image mode='cover' placeholder='' src={imageSrc} />
        <Text bold color={textColor} size='xl'>
          {title}
        </Text>
      </StyledWrapper>
      <StyledNextButton disabled={!selected} onClick={handleNext} />
    </StyledContainer>
  );
};

export default CarouselItem;
