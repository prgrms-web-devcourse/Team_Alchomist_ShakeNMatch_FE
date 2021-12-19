import type { ModalProps } from '@base/Modal/types';
import type { IReview } from '@models';

interface CocktailReviewModalProps extends ModalProps {
  nickname: string;
  loginedUserId?: number;
  cocktailId: number;
  handleOnSubmitted(userInfo: IReview): void;
  onCancel(): void;
}

export type { CocktailReviewModalProps, IReview };
