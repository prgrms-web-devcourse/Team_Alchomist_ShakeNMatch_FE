/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { HTMLAttributes, ReactElement } from 'react';
import {
  useCallback,
  Children,
  useState,
  isValidElement,
  cloneElement,
  useEffect,
  useMemo
} from 'react';
import { StyledWrapper } from '../CarouselItem/styled';
import type { CarouselItemProps } from '../CarouselItem/types';
import { StyledCarouselContainer } from './styled';

interface CarouselContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<CarouselItemProps>[] | ReactElement<CarouselItemProps>;
  initialSelectedIndex?: number;
  onChangeItem?(value: number): void;
}

const DEFAULT_SELECTED_INDEX = 2;

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
