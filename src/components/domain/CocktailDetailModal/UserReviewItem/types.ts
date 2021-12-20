interface UserReviewItemProps {
  nickname?: string;
  loginedUserId?: number;
  cocktailId?: number;
  reviewId: number;
  reviewOwnerId: number;
  userComment?: string;
  userImageUrl?: string;
  userRating?: number;
  onDelete?(reviewId: number): void;
}

interface DeleteResponse {
  data: string;
  serverDateTime: string;
}

export type { UserReviewItemProps, DeleteResponse };
