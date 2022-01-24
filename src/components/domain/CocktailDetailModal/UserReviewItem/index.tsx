import { Text, Image } from '@base';
import { TextButton } from '@compound';
import {
  COLOR,
  TEXT_SIZE,
  AXIOS_REQUEST_TYPE,
  IMG_MODE,
  TEXT_BUTTON_TYPE,
  RATING_STAR_MODE
} from '@constants';
import { RatingStar } from '@domain';
import { useAxios } from '@hooks';
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
  userRating,
  onDelete
}: UserReviewItemProps): ReactElement => {
  const defaultRequest = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);

  const onHandleDelete = (): void => {
    const deleteMyCocktailReview = (
      reviewId: number
    ): Promise<DeleteResponse> => {
      return defaultRequest.delete(`/review/${reviewId}`);
    };

    const handleDelete = async (reviewId: number): Promise<void> => {
      if (loginedUserId === reviewOwnerId) {
        const result = await deleteMyCocktailReview?.(reviewId);
        if (result.data) {
          onDelete?.(reviewId);
        }
      }
    };
    handleDelete(reviewId);
  };

  return (
    <StyledReview>
      <StyledImageWrapper>
        <Image
          height='80px'
          mode={IMG_MODE.FILL}
          src={userImageUrl}
          width='80px'
        />
      </StyledImageWrapper>
      <StyledRatingCommentWrapper>
        <RatingStar
          mode={RATING_STAR_MODE.SHOW}
          rateTobeDisplayed={userRating}
        />
        <Text bold color={COLOR.BLUE} dangerously={true} size={TEXT_SIZE.xxs}>
          {'from. ' + nickname}
        </Text>
        <Text size={TEXT_SIZE.xxs}>{userComment}</Text>
      </StyledRatingCommentWrapper>
      {loginedUserId === reviewOwnerId && (
        <TextButton
          buttonType={TEXT_BUTTON_TYPE.X_SHORT_WHITE}
          onClick={onHandleDelete}
        >
          {'삭제'}
        </TextButton>
      )}
    </StyledReview>
  );
};

export default UserReviewItem;
