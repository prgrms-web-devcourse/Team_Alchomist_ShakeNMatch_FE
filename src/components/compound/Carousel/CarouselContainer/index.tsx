import { useThrottle, useWheel } from '@hooks';
import type { AnimationEventHandler, ReactElement } from 'react';
import {
  useEffect,
  useCallback,
  Children,
  isValidElement,
  cloneElement,
  useMemo
} from 'react';
import type { CarouselItemProps } from '../CarouselItem/types';
import { StyledCarouselContainer } from './styled';
import type { CarouselContainerProps } from './types';

const DEFAULT_SELECTED_INDEX = 0;

const CarouselContainer = ({
  children,
  selectedIndex = DEFAULT_SELECTED_INDEX,
  onChangeItem,
  ...props
}: CarouselContainerProps): ReactElement => {
  const [wheelRef, wheelDelta] = useWheel<HTMLDivElement>();
  const childrenLength: number = useMemo(
    () => Children.toArray(children).length,
    [children]
  );

  const handleNext = useCallback(() => {
    if (selectedIndex < childrenLength - 1) {
      onChangeItem?.(selectedIndex + 1);
    } else {
      onChangeItem?.(0);
    }
  }, [childrenLength, selectedIndex, onChangeItem]);

  const handlePrev = useCallback(() => {
    if (0 < selectedIndex) {
      onChangeItem?.(selectedIndex - 1);
    } else {
      onChangeItem?.(childrenLength - 1);
    }
  }, [selectedIndex, onChangeItem]);

  const handleWheel = useCallback((): void => {
    if (wheelDelta.deltaY > 0) {
      handleNext();
    } else if (wheelDelta.deltaY < 0) {
      handlePrev();
    }
  }, [wheelDelta, handleNext, handlePrev]);

  const [throttleWheel, clearThrottleWheel] = useThrottle(handleWheel);

  const handleAnimationEnd: AnimationEventHandler = (e) => {
    if (e.type === 'animationend') {
      clearThrottleWheel();
    }
  };

  const selectedItem = Children.toArray(children).map((element, index) => {
    if (!isValidElement(element)) return;

    return cloneElement<CarouselItemProps>(element, {
      onPrev: handlePrev,
      onNext: handleNext,
      onAnimationEnd: handleAnimationEnd,
      selected: index === selectedIndex,
      ...element.props
    });
  });

  useEffect(throttleWheel, [wheelDelta]);

  return (
    <StyledCarouselContainer ref={wheelRef} {...props}>
      {selectedItem}
    </StyledCarouselContainer>
  );
};

export default CarouselContainer;
