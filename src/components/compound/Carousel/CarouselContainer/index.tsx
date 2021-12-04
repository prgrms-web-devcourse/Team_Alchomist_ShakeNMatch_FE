import type { ReactElement } from 'react';
import {
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

  const selectedItem = Children.toArray(children).map((element, index) => {
    if (!isValidElement(element)) return;

    return cloneElement<CarouselItemProps>(element, {
      onPrev: handlePrev,
      onNext: handleNext,
      ...element.props,
      selected: index === selectedIndex
    });
  });

  return (
    <StyledCarouselContainer {...props}>{selectedItem}</StyledCarouselContainer>
  );
};

export default CarouselContainer;
