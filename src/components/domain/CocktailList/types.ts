import type { HTMLAttributes, ReactChild } from 'react';
import type { ICocktail } from '@models';
import type { CocktailIcons } from '@assets/cocktails';

interface CocktailListProps extends HTMLAttributes<HTMLDivElement> {
  cocktailList: Pick<ICocktail, 'id' | 'name' | 'type'>[];
  noResultMsg?: string;
}

interface StyledMotionWrapperProps {
  children: ReactChild;
  resultIndex: number;
}

type CocktailIconsKeys = keyof typeof CocktailIcons;

export type { CocktailListProps, StyledMotionWrapperProps, CocktailIconsKeys };
