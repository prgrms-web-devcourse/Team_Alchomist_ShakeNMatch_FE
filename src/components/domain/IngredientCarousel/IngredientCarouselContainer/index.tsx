/* eslint-disable react/jsx-key */
import { useState, useMemo, useCallback, useEffect, Children } from 'react';
import type { ReactElement } from 'react';
import { StyledCarouselContainer, TempButton1, TempButton2 } from './styled';
import IngredientCarouselItem from '@domain/IngredientCarousel/IngredientCarouselItem';
import type { IngredientCarouselProps } from './types';
import { ROW_TYPE } from './types';

const IngredientCarousel = ({
  itemList = [],
  row = 'single'
}: IngredientCarouselProps): ReactElement => {
  const [headItemIdx, setHeadItemIdx] = useState(0);
  const [leftButtonStatus, setLeftButtonStatus] = useState(true);
  const [rightButtonStatus, setRightButtonStatus] = useState(false);
  // 버튼 IconButton으로 변경 필요
  // 앨범을 토글할 수 있도록 할 새로운 컴포넌트 필요
  // 토글된 재료 저장할 상태 및 함수 필요
  // 저장된 재료 상태를 상위로 전달해줄 함수 필요ㅌㅈ

  const lastItemIdx = useMemo(
    () => headItemIdx + ROW_TYPE[row].length - 1,
    [headItemIdx, row]
  );
  const TOTAL_ITEMS = useMemo(() => itemList.length, [itemList]);

  useEffect(() => {
    if (headItemIdx === 0) {
      setLeftButtonStatus(true);
    }
    if (headItemIdx > 2) {
      setLeftButtonStatus(false);
    }
    if (lastItemIdx >= TOTAL_ITEMS) {
      setRightButtonStatus(true);
    }
    if (lastItemIdx < TOTAL_ITEMS) {
      setRightButtonStatus(false);
    }
  }, [headItemIdx]);

  const handlePrev = useCallback((): void => {
    setHeadItemIdx((prevHead: number) => prevHead - ROW_TYPE[row].length);
  }, [row]);

  const handleNext = useCallback((): void => {
    setHeadItemIdx((prevHead: number) => prevHead + ROW_TYPE[row].length);
  }, [row]);

  const displayItems = itemList.filter(
    (_, index) =>
      index >= headItemIdx && index < headItemIdx + ROW_TYPE[row].length
  );

  return (
    <StyledCarouselContainer row={row}>
      <TempButton1 disabled={leftButtonStatus} onClick={handlePrev} />
      {Children.toArray(
        displayItems.map((item) => <IngredientCarouselItem text={item.name} />)
      )}
      <TempButton2 disabled={rightButtonStatus} onClick={handleNext} />
    </StyledCarouselContainer>
  );
};

export default IngredientCarousel;
