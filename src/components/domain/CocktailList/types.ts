import type { HTMLAttributes, ReactChild } from 'react';
import type { CocktailIcons } from '@assets/cocktails';
import type { ICocktailSimple } from '@models/types';

interface CocktailListProps extends HTMLAttributes<HTMLDivElement> {
  cocktailList: ICocktailSimple[];
  noResultMsg?: string;
}

interface StyledMotionWrapperProps {
  children: ReactChild;
  resultIndex: number;
}

type CocktailIconsKeys = keyof typeof CocktailIcons;

export type { CocktailListProps, StyledMotionWrapperProps, CocktailIconsKeys };
