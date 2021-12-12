import { useEffect, useState, useCallback } from 'react';
import type { ChangeEvent, ReactElement, FormEvent } from 'react';
import { Input } from '@base';
import useDebounce from '@hooks/useDebounce';
import type { DebounceInputProps } from './types';

const SEARCH_DEBOUNCE_TIME = 600;

const DebounceInput = ({ onSearchDone }: DebounceInputProps): ReactElement => {
  const [keyword, setKeyword] = useState('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.currentTarget.value);
  }, []);

  const searchCocktail = useCallback(async (): Promise<void> => {
    // 임시 api 호출 함수
    console.log('api호출');
    // 임시 api 응답 데이터
    const res = [{ id: '1', name: '1' }];
    onSearchDone(res);
  }, []);

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
