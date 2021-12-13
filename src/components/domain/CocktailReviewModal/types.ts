import type { ModalProps } from '@base/Modal/types';

type CocktailReviewModalProps = ModalProps;
interface Review {
  userFile: File | null;
  userRate: number;
  userComment: string;
}

export type { CocktailReviewModalProps, Review };
