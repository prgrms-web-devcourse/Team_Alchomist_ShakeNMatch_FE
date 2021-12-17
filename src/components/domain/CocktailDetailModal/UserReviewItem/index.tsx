import { Image, Text } from '@base';
import TextButton from '@compound/TextButton';
import RatingStar from '@domain/RatingStar';
import type { ReactElement } from 'react';
import { StyledReview } from './style';
import type { UserReviewItemProps } from './types';

const UserReviewItem = ({
  reviewId,
  userImageUrl,
  userRating,
  userComment,
  onDelete
}: UserReviewItemProps): ReactElement => {
  const handleDelete = (): void => {
    onDelete(reviewId);
  };

  return (
    <StyledReview>
      <Image mode='contain' src={userImageUrl} />
      <RatingStar mode='show' rateTobeDisplayed={userRating} />
      <Text size='xs'>{userComment}</Text>
      <TextButton buttonType='X_SHORT_WHITE' onClick={handleDelete}>
        {'삭제'}
      </TextButton>
    </StyledReview>
  );
};

export default UserReviewItem;
