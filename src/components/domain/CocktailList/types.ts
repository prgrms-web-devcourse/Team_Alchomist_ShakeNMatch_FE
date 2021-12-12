import type { HTMLAttributes, ReactChild } from 'react';

interface Cocktail {
  name: string;
  icon: string;
}

interface CocktailListProps extends HTMLAttributes<HTMLDivElement> {
  cocktailList: Cocktail[];
  noResultMsg?: string;
}

interface StyledMotionWrapperProps {
  children: ReactChild;
  resultIndex: number;
}

export type { CocktailListProps, StyledMotionWrapperProps };
