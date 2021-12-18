import { Text, Image } from '@base';
import TextButton from '@compound/TextButton';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';
import RatingStar from '@domain/RatingStar';
import useAxios from '@hooks/useAxios';
import type { ReactElement } from 'react';
import {
  StyledReview,
  StyledImageWrapper,
  StyledRatingCommentWrapper
} from './style';
import type { UserReviewItemProps, DeleteResponse } from './types';

const UserReviewItem = ({
  nickname,
  reviewId,
  loginedUserId,
  reviewOwnerId,
  userComment,
  userImageUrl,
  userRating
}: UserReviewItemProps): ReactElement => {
  const defaultRequest = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);
  const deleteMyCocktailReview = (
    reviewId: number
  ): Promise<DeleteResponse> => {
    return defaultRequest.delete(`/review/${reviewId}`);
  };

  const handleDelete = (): void => {
    if (loginedUserId === reviewOwnerId) {
      deleteMyCocktailReview?.(reviewId);
    }
  };

  return (
    <StyledReview>
      <StyledImageWrapper>
        <Image height='80px' mode='fill' src={userImageUrl} width='80px' />
      </StyledImageWrapper>
      <Text size='xs'>{nickname}</Text>
      <StyledRatingCommentWrapper>
        <RatingStar mode='show' rateTobeDisplayed={userRating} />
        <Text size='xs'>{userComment}</Text>
      </StyledRatingCommentWrapper>
      {loginedUserId === reviewOwnerId && (
        <TextButton buttonType='X_SHORT_WHITE' onClick={handleDelete}>
          {'삭제'}
        </TextButton>
      )}
    </StyledReview>
  );
};

export default UserReviewItem;
