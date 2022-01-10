import { useState, useEffect, useCallback } from 'react';
import type { ChangeEvent, ReactElement, FormEvent } from 'react';
import { Input } from '@base';
import useDebounce from '@hooks/useDebounce';
import type { SearchCocktailInputProps } from './types';
import { INPUT_TYPE } from '@constants';

const SEARCH_DEBOUNCE_TIME = 600;

const SearchCocktailInput = ({
  onSearch,
  initialValue = ''
}: SearchCocktailInputProps): ReactElement => {
  const [keyword, setKeyword] = useState(initialValue);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.currentTarget.value);
  }, []);

  const handleSearch = (): void => {
    onSearch(keyword);
  };

  const [debounceHandleSearch, clearDebounce] = useDebounce(
    handleSearch,
    SEARCH_DEBOUNCE_TIME
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (keyword.trim().length) {
      clearDebounce();
      onSearch(keyword);
    }
  };

  useEffect(() => {
    if (keyword.trim().length) {
      debounceHandleSearch();
    }
  }, [keyword]);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        inputType={INPUT_TYPE.TEXT}
        value={keyword}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchCocktailInput;
