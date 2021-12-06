/* eslint-disable react/jsx-key */
import { useState, useEffect, Children } from 'react';
import type { ReactElement } from 'react';
import {
  StyledCarouselContainer,
  StyledItemContainer,
  TempButton1,
  TempButton2
} from './styled';
import IngredientCarouselItem from '@domain/IngredientCarousel/IngredientCarouselItem';

interface Item {
  name: string;
}

interface IngredientCarouselProps {
  itemList: Item[];
}

const IngredientCarousel = ({
  itemList = []
}: IngredientCarouselProps): ReactElement => {
  const [headItemIdx, setHeadItemIdx] = useState(0);
  const [leftButtonStatus, setLeftButtonStatus] = useState(true);
  const [rightButtonStatus, setRightButtonStatus] = useState(false);

  const lastItemIdx = headItemIdx + 2;
  console.log('head: ', headItemIdx, 'last: ', lastItemIdx);

  useEffect(() => {
    if (headItemIdx === 0) {
      setLeftButtonStatus(true);
    }
    if (headItemIdx > 2) {
      setLeftButtonStatus(false);
    }
    if (lastItemIdx >= itemList.length) {
      setRightButtonStatus(true);
    }
    if (lastItemIdx < itemList.length) {
      setRightButtonStatus(false);
    }
  }, [headItemIdx]);

  const handlePrev = (): void => {
    console.log('이전 3개!');

    setHeadItemIdx((prevHead: number) => prevHead - 3);
  };

  const handleNext = (): void => {
    console.log('다음 3개!');

    setHeadItemIdx((prevHead: number) => prevHead + 3);
  };

  const displayItems = itemList.filter(
    (_, index) => index >= headItemIdx && index <= headItemIdx + 2
  );

  console.log(displayItems);

  return (
    <StyledCarouselContainer>
      <TempButton1 disabled={leftButtonStatus} onClick={handlePrev} />
      <StyledItemContainer>
        {Children.toArray(
          displayItems.map((item) => (
            <IngredientCarouselItem text={item.name} />
          ))
        )}
      </StyledItemContainer>
      <TempButton2 disabled={rightButtonStatus} onClick={handleNext} />
    </StyledCarouselContainer>
  );
};

export default IngredientCarousel;
