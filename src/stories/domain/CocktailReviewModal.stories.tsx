import type { ReactElement } from 'react';
import { useState } from 'react';
import CocktailReviewModal from '@domain/CocktailReviewModal';
import type { IReview } from '@domain/CocktailReviewModal/types';
import { COLOR } from '@constants';

export default {
  title: 'Component/Domain/CocktailReviewModal',
  component: CocktailReviewModal
};

const MOCK_COCKTAIL_ID = 3;

export const Default = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);
  const [userReview, setUserReview] = useState<IReview | null>(null);

  const handleComplete = (reviewInfo: IReview): void => {
    console.log(reviewInfo);
    setUserReview(reviewInfo);
    setIsVisible(false);
  };

  return (
    <>
      <button
        type='button'
        onClick={(): void => {
          setIsVisible(true);
        }}
      >
        {'리뷰 작성'}
      </button>
      <p>
        <label>{'파일이름'}</label>
        <div>{userReview ? userReview.nickname : '-'}</div>
        <label>{'평점'}</label>
        <div>{userReview ? userReview.rating.toString() : '0'}</div>
        <label>{'한줄 평'}</label>
        <div>{userReview ? userReview.description : '없음'}</div>
      </p>
      <CocktailReviewModal
        cocktailId={MOCK_COCKTAIL_ID}
        color={COLOR.BASIC_WHITE}
        handleOnSubmitted={handleComplete}
        nickname='승록'
        size={'sm'}
        visible={isVisible}
        onCancel={(): void => {
          setIsVisible(false);
        }}
      />
    </>
  );
};
