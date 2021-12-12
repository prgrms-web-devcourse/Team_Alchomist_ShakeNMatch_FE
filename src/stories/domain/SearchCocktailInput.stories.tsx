import SearchCocktailInput from '@domain/SearchCocktailInput';
import type { ReactElement } from 'react';

export default {
  title: 'Component/domain/SearchCocktailInput',
  component: SearchCocktailInput
};

export const Default = (): ReactElement => {
  return (
    <SearchCocktailInput
      onSearch={(keyword): void => {
        console.log('api 호출할 검색어: ', keyword);
      }}
    />
  );
};
