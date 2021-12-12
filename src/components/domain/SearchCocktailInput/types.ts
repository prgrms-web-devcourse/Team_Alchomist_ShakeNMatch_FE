// 임시 Cocktail 타입
interface ICocktail {
  id: string;
  name: string;
}

interface SearchCocktailInputProps {
  onSearchDone(searchResults: ICocktail[]): void;
}

export type { SearchCocktailInputProps };
