import { useState, useCallback, useEffect, Children } from 'react';
import useWheel from '@hooks/useWheel';
import useThrottle from '@hooks/useThrottle';
import type { ReactElement } from 'react';
import { StyledCarouselContainer } from './styled';
import type { IngredientCarouselProps, IngredientIconsKeys } from './types';
import { ROW_TYPE } from './types';
import { IngredientIcons } from '@assets/ingredients';
import { IconButton, Album } from '@compound';
import { ICON_NAME, ALBUM_TYPES } from '@constants';

const CLEAR_THROTTLE_TIME = 500;

const IngredientCarousel = ({
  itemList = [],
  row = 'single',
  albumType = ALBUM_TYPES.ALCOHOL
}: IngredientCarouselProps): ReactElement => {
  const [itemIdx, setItemIdx] = useState({
    head: 0,
    tail: 0 + (ROW_TYPE[row].length - 1)
  });
  const [wheelRef, wheelDelta] = useWheel<HTMLDivElement>();

  const handlePrev = useCallback((): void => {
    setItemIdx((prevItemIdx) => ({
      head: prevItemIdx.head - ROW_TYPE[row].length,
      tail: prevItemIdx.tail - ROW_TYPE[row].length
    }));
  }, [row]);

  const handleNext = useCallback((): void => {
    setItemIdx((prevItemIdx) => ({
      head: prevItemIdx.head + ROW_TYPE[row].length,
      tail: prevItemIdx.tail + ROW_TYPE[row].length
    }));
  }, [row]);

  const handleWheel = useCallback((): void => {
    if (wheelDelta.deltaY > 0 && itemIdx.tail < itemList.length - 1) {
      handleNext();
    } else if (wheelDelta.deltaY < 0 && itemIdx.head > 0) {
      handlePrev();
    }
  }, [wheelDelta, handleNext, handlePrev]);

  const [throttleWheel, clearThrottleWheel] = useThrottle(handleWheel);

  useEffect(() => {
    throttleWheel();
    setTimeout(clearThrottleWheel, CLEAR_THROTTLE_TIME);
  }, [wheelDelta.deltaY]);

  const displayItems = itemList.filter(
    (_, index) =>
      index >= itemIdx.head && index < itemIdx.head + ROW_TYPE[row].length
  );

  return (
    <StyledCarouselContainer ref={wheelRef} row={row}>
      <IconButton
        disabled={itemIdx.head === 0}
        name={ICON_NAME.ARROW_LEFT_NAVY}
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: '30px'
        }}
        onClick={handlePrev}
      />
      {Children.toArray(
        displayItems.map((item) => (
          <Album
            imageSrc={IngredientIcons[item.type as IngredientIconsKeys]}
            text={item.name}
            type={albumType}
          />
        ))
      )}
      <IconButton
        disabled={itemIdx.tail >= itemList.length - 1}
        name={ICON_NAME.ARROW_RIGHT_NAVY}
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '30px'
        }}
        onClick={handleNext}
      />
    </StyledCarouselContainer>
  );
};

export default IngredientCarousel;
