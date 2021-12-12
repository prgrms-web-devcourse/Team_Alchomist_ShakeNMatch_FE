// 임시 Cocktail 타입
interface ICocktail {
  id: string;
  name: string;
}

interface DebounceInputProps {
  onSearchDone(searchResults: ICocktail[]): void;
}

export type { DebounceInputProps };
