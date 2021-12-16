import type { HTMLAttributes, ReactChild } from 'react';
import type { ICocktailSimple } from '@models/types';

interface CocktailListProps extends HTMLAttributes<HTMLDivElement> {
  cocktailList: ICocktailSimple[];
  noResultMsg?: string;
}

interface StyledMotionWrapperProps {
  children: ReactChild;
  resultIndex: number;
}

export type { CocktailListProps, StyledMotionWrapperProps };
