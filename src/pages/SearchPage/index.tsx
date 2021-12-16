import type { ReactElement } from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CocktailList from '@domain/CocktailList';
import { Image, Text } from '@base';
import searchBartender from '@assets/characters/searchBartender.png';
import SearchCocktailInput from '@domain/SearchCocktailInput';
import { StyledContentWrapper } from './styled';
import SectionDividerWithTitle from '@domain/SectionDividerWithTitle';
// import { searchCocktailByName } from '@apis/cocktail';
// import type { ICocktail } from '@models/types';

// const DUMMY = [
//   { id: '123', name: '칵테일', type: 'whiskey' },
//   { id: '124', name: '칵테이', type: 'whiskey' },
//   { id: '125', name: '칵테삼', type: 'whiskey' },
//   { id: '126', name: '칵테사', type: 'whiskey' },
//   { id: '127', name: '칵테오', type: 'whiskey' },
//   { id: '128', name: '칵테육', type: 'whiskey' }
// ];

import useAxios from '@hooks/useAxios';
import type { ICocktail } from '@models/types';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';

const SearchPage = (): ReactElement => {
  const [results, setResults] = useState<ICocktail[]>([]);
  const { keyword } = useParams();
  const navigate = useNavigate();

  const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);
  const searchCocktailByName = (keyword: string): Promise<ICocktail[]> => {
    return request.get(`/cocktail/name?name=${keyword}`);
  };

  const handleSearch = useCallback((inputKeyword: string): void => {
    navigate(`/search/${inputKeyword}`);
  }, []);

  useEffect(() => {
    const setSearchResults = async (): Promise<void> => {
      if (keyword) {
        console.log('call!');
        const searchResult = await searchCocktailByName(keyword);
        setResults(searchResult);
      }
    };
    setSearchResults();
  }, [keyword]);

  console.log('here', keyword);

  return (
    <SectionDividerWithTitle alignItems>
      <StyledContentWrapper>
        <Text block>찾아 보고 싶은 칵테일이 있나요?</Text>
        <Image mode='contain' src={searchBartender} />
        <SearchCocktailInput onSearch={handleSearch} />
      </StyledContentWrapper>
      <CocktailList cocktailList={results} />
    </SectionDividerWithTitle>
  );
};

export default SearchPage;
