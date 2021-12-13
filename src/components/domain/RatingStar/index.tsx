import type { MouseEventHandler, ReactElement } from 'react';
import { useState, Children } from 'react';
import IconButton from '@compound/IconButton';
import type { RatingStarProps } from './types';

const RatingStar = ({
  mode = 'edit',
  maxRate = 5,
  rateTobeDisplayed = 0
}: RatingStarProps): ReactElement => {
  const [rating, setRating] = useState<number>(rateTobeDisplayed);
  const childrenArray = new Array(maxRate).fill(1);

  const handleClick: MouseEventHandler = (e): void => {
    if (parseInt(e.currentTarget.id) === rating) {
      setRating((prevRating) => prevRating - 1);
      return;
    }
    setRating(parseInt(e.currentTarget.id));
  };

  return mode === 'edit' ? (
    <div>
      {Children.toArray(
        childrenArray.map((_, index) => (
          <IconButton
            id={(index + 1).toString()}
            name={rating > index ? 'starFull' : 'starEmpty'}
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
            name={rateTobeDisplayed > index ? 'starFull' : 'starEmpty'}
          />
        ))
      )}
    </div>
  );
};

export default RatingStar;
