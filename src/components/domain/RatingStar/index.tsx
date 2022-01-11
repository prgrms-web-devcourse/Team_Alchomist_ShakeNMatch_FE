import type { MouseEventHandler, ReactElement } from 'react';
import { useState, Children } from 'react';
import { IconButton } from '@compound';
import type { RatingStarProps } from './types';
import { ICON_NAME } from '@constants';

const RatingStar = ({
  mode = 'edit',
  maxRate = 5,
  rateTobeDisplayed = 0,
  onRateChange
}: RatingStarProps): ReactElement => {
  const [rating, setRating] = useState<number>(rateTobeDisplayed);
  const childrenArray = new Array(maxRate).fill(1);

  const handleClick: MouseEventHandler = (e): void => {
    const newRate = parseInt(e.currentTarget.id);
    onRateChange?.(newRate);
    if (newRate === rating) {
      setRating((prevRating) => prevRating - 1);
      return;
    }
    setRating(newRate);
  };

  return mode === 'edit' ? (
    <div>
      {Children.toArray(
        childrenArray.map((_, index) => (
          <IconButton
            id={(index + 1).toString()}
            name={rating > index ? ICON_NAME.STAR_FULL : ICON_NAME.STAR_EMPTY}
            onClick={handleClick}
          />
        ))
      )}
    </div>
  ) : (
    <div>
      {Children.toArray(
        childrenArray.map((_, index) => (
          <IconButton
            id={index.toString()}
            name={
              rateTobeDisplayed > index
                ? ICON_NAME.STAR_FULL
                : ICON_NAME.STAR_EMPTY
            }
          />
        ))
      )}
    </div>
  );
};

export default RatingStar;
