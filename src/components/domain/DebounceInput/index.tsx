import { Input } from '@base';
import { useEffect, useState } from 'react';
import type { ChangeEvent, ReactElement, FormEvent } from 'react';
import useDebounce from '@hooks/useDebounce';

const SEARCH_DEBOUNCE_TIME = 600;

// 임시 Cocktail 타입
interface ICocktail {
  id: string;
  name: string;
}

interface DebounceInputProps {
  onSearchDone(searchResults: ICocktail[]): void;
}

const DebounceInput = ({ onSearchDone }: DebounceInputProps): ReactElement => {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.currentTarget.value);
  };

  const searchCocktail = (): void => {
    // api 호출 함수
    console.log('api호출');
    // api 응답 데이터
    const res = [{ id: '1', name: '1' }];
    onSearchDone(res);
  };

  const debounceSearchCocktail = useDebounce(
    searchCocktail,
    SEARCH_DEBOUNCE_TIME
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    debounceSearchCocktail();
  };

  useEffect(() => {
    if (keyword.trim().length) {
      debounceSearchCocktail();
    }
  }, [keyword]);

  return (
    <form onSubmit={handleSubmit}>
      <Input inputType='text' onChange={handleChange} />
    </form>
  );
};

export default DebounceInput;
