import UserReviewItem from '@domain/CocktailDetailModal/UserReviewItem';
import { MOCK_COCKTAIL_RESPONSE } from '@domain/CocktailDetailModal/types';
import type { ReactElement } from 'react';

export default {
  title: 'Component/Domain/UserReviewItem',
  component: UserReviewItem
};

const MOOCK_USER_ID = 2;

export const Default = (): ReactElement => {
  return (
    <>
      {MOCK_COCKTAIL_RESPONSE.data.reviews.map(
        ({ reviewId, userId, cocktailId, url, description, rating }) => (
          <UserReviewItem
            cocktailId={cocktailId}
            loginedUserId={MOOCK_USER_ID}
            reviewId={reviewId}
            reviewOwnerId={userId}
            userComment={description}
            userImageUrl={url}
            userRating={rating}
          />
        )
      )}
    </>
  );
};
