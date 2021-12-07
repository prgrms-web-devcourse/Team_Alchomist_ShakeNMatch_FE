/* eslint-disable react/jsx-key */
import {
  useState,
  useMemo,
  useCallback,
  useEffect,
  Children,
  useRef
} from 'react';
import type { ReactElement } from 'react';
import { StyledCarouselContainer, TempButton1, TempButton2 } from './styled';
import IngredientCarouselItem from '@domain/IngredientCarousel/IngredientCarouselItem';
import type { IngredientCarouselProps } from './types';
import { ROW_TYPE } from './types';

const IngredientCarousel = ({
  itemList = [],
  row = 'single'
}: IngredientCarouselProps): ReactElement => {
  const [itemIdx, setHeadItemIdx] = useState({
    head: 0,
    tail: 0 + (ROW_TYPE[row].length - 1)
  });
  const [leftButtonStatus, setLeftButtonStatus] = useState(true);
  const [rightButtonStatus, setRightButtonStatus] = useState(false);
  // 버튼 IconButton으로 변경 필요
  // 앨범을 토글할 수 있도록 할 새로운 컴포넌트 필요
  // 토글된 재료 저장할 상태 및 함수 필요
  // 저장된 재료 상태를 상위로 전달해줄 함수 필요ㅌㅈ

  // const lastItemIdx = useMemo(
  //   () => itemIdx.head + itemIdx.tail,
  //   [itemIdx, row]
  // );
  const TOTAL_ITEMS = useMemo(() => itemList.length, [itemList]);

  useEffect(() => {
    if (itemIdx.head === 0) {
      setLeftButtonStatus(true);
    }
    if (itemIdx.head > ROW_TYPE[row].length - 1) {
      setLeftButtonStatus(false);
    }
    if (itemIdx.tail >= TOTAL_ITEMS) {
      setRightButtonStatus(true);
    }
    if (itemIdx.tail < TOTAL_ITEMS) {
      setRightButtonStatus(false);
    }
  }, [itemIdx]);

  const handlePrev = useCallback((): void => {
    setHeadItemIdx((prevItemIdx) => ({
      head: prevItemIdx.head - ROW_TYPE[row].length,
      tail: prevItemIdx.tail - ROW_TYPE[row].length
    }));
  }, [row]);

  const handleNext = useCallback((): void => {
    setHeadItemIdx((prevItemIdx) => ({
      head: prevItemIdx.head + ROW_TYPE[row].length,
      tail: prevItemIdx.tail + ROW_TYPE[row].length
    }));
  }, [row]);

  const displayItems = itemList.filter(
    (_, index) =>
      index >= itemIdx.head && index < itemIdx.head + ROW_TYPE[row].length
  );

  const wheelRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: WheelEvent): void => {
    console.log(e.deltaX, e.deltaY);
  };

  wheelRef.current?.addEventListener('wheel', handleWheel);

  return (
    <StyledCarouselContainer ref={wheelRef} row={row}>
      <TempButton1 disabled={leftButtonStatus} onClick={handlePrev} />
      {Children.toArray(
        displayItems.map((item) => <IngredientCarouselItem text={item.name} />)
      )}
      <TempButton2 disabled={rightButtonStatus} onClick={handleNext} />
    </StyledCarouselContainer>
  );
};

export default IngredientCarousel;
