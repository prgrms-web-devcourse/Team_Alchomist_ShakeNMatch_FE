import type { HTMLAttributes, ReactChild } from 'react';

// temp
interface ICocktail {
  id: string;
  name: string;
  type: string;
}

interface CocktailListProps extends HTMLAttributes<HTMLDivElement> {
  cocktailList: ICocktail[];
  noResultMsg?: string;
}

interface StyledMotionWrapperProps {
  children: ReactChild;
  resultIndex: number;
}

export type { CocktailListProps, StyledMotionWrapperProps };
