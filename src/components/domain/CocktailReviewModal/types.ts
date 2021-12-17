import type { ModalProps } from '@base/Modal/types';

interface CocktailReviewModalProps extends ModalProps {
  cocktailId: number;
  handleSubmit(userInfo: Review): void;
  onCancel(): void;
}
interface Review {
  userFile: File | null;
  userRate: number;
  userComment: string;
}

export type { CocktailReviewModalProps, Review };
