import type { HTMLAttributes } from 'react';

interface Cocktail {
  name: string;
  icon: string;
}

interface CocktailListProps extends HTMLAttributes<HTMLDivElement> {
  cocktailList: Cocktail[];
  noResultMsg?: string;
}

export type { CocktailListProps };
