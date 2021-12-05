import useThrottle from '@hooks/useThrottle';
import useWheel from '@hooks/useWheel';
import type { AnimationEventHandler, ReactElement } from 'react';
import {
  useEffect,
  useCallback,
  Children,
  useState,
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
  initialSelectedIndex = DEFAULT_SELECTED_INDEX,
  onChangeItem,
  ...props
}: CarouselContainerProps): ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [wheelRef, wheelDelta] = useWheel<HTMLDivElement>();
  const childrenLength: number = useMemo(
    () => Children.toArray(children).length,
    [children]
  );

  const handleNext = useCallback(() => {
    if (selectedIndex < childrenLength - 1) {
      setSelectedIndex((prevIndex) => prevIndex + 1);

      onChangeItem?.(selectedIndex + 1);
    } else {
      setSelectedIndex(0);

      onChangeItem?.(0);
    }
  }, [childrenLength, selectedIndex]);

  const handlePrev = useCallback(() => {
    if (0 < selectedIndex) {
      setSelectedIndex((prevIndex) => prevIndex - 1);

      onChangeItem?.(selectedIndex - 1);
    } else {
      setSelectedIndex(childrenLength - 1);
    }
  }, [selectedIndex]);

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
      ...element.props,
      onAnimationEnd: handleAnimationEnd,
      selected: index === selectedIndex
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
