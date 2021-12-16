import { Image, Text } from '@base';
import RatingStar from '@domain/RatingStar';
import type { ReactElement } from 'react';
import { StyledReview } from './style';

interface UserReviewItemProps {
  userImageUrl?: string;
  userRating?: number;
  userComment?: string;
}

const UserReviewItem = ({
  userImageUrl,
  userRating,
  userComment
}: UserReviewItemProps): ReactElement => {
  return (
    <StyledReview>
      <Image mode='contain' src={userImageUrl} />
      <RatingStar mode='show' rateTobeDisplayed={userRating} />
      <Text size='xs'>{userComment}</Text>
    </StyledReview>
  );
};

export default UserReviewItem;
