import { Text, Image } from '@base';
import TextButton from '@compound/TextButton';
import RatingStar from '@domain/RatingStar';
import type { ReactElement } from 'react';
import {
  StyledReview,
  StyledImageWrapper,
  StyledRatingCommentWrapper
} from './style';
import type { UserReviewItemProps } from './types';

const UserReviewItem = ({
  reviewId,
  userImageUrl,
  userRating,
  userComment,
  onDelete
}: UserReviewItemProps): ReactElement => {
  const handleDelete = (): void => {
    onDelete?.(reviewId);
  };

  return (
    <StyledReview>
      <StyledImageWrapper>
        <Image height='80px' mode='fill' src={userImageUrl} width='80px' />
      </StyledImageWrapper>
      <StyledRatingCommentWrapper>
        <RatingStar mode='show' rateTobeDisplayed={userRating} />
        <Text size='xs'>{userComment}</Text>
      </StyledRatingCommentWrapper>
      <TextButton buttonType='X_SHORT_WHITE' onClick={handleDelete}>
        {'삭제'}
      </TextButton>
    </StyledReview>
  );
};

export default UserReviewItem;
