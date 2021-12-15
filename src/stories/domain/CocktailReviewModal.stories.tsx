import type { ReactElement } from 'react';
import { useState } from 'react';
import CocktailReviewModal from '@domain/CocktailReviewModal';
import type { Review } from '@domain/CocktailReviewModal/types';

export default {
  title: 'Component/Domain/CocktailReviewModal',
  component: CocktailReviewModal
};

export const Default = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);
  const [userReview, setUserReview] = useState<Review | null>(null);

  const handleComplete = (reviewInfo: Review): void => {
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
        <div>{userReview ? userReview.userFile?.name : '-'}</div>
        <label>{'평점'}</label>
        <div>{userReview ? userReview.userRate.toString() : '0'}</div>
        <label>{'한줄 평'}</label>
        <div>{userReview ? userReview.userComment : '없음'}</div>
      </p>
      <CocktailReviewModal
        color={'BASIC_WHITE'}
        handleSubmit={handleComplete}
        size={'sm'}
        visible={isVisible}
        onCancel={(): void => {
          setIsVisible(false);
        }}
      />
    </>
  );
};
