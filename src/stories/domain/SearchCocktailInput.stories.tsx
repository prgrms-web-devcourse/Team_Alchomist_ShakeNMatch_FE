import SearchCocktailInput from '@domain/SearchCocktailInput';
import type { ReactElement } from 'react';

export default {
  title: 'Component/domain/SearchCocktailInput',
  component: SearchCocktailInput
};

export const Default = (): ReactElement => {
  return (
    <SearchCocktailInput
      onSearchDone={(searchResults): void => {
        console.log('검색된 칵테일: ', searchResults);
      }}
    />
  );
};
