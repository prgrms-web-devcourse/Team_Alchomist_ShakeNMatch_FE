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
import type { ICocktail, ICocktailSimple } from '@models/types';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';

const SearchPage = (): ReactElement => {
  const [results, setResults] = useState<ICocktailSimple[]>([]);
  const { keyword } = useParams();
  const navigate = useNavigate();

  const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);
  // api 응답 형식 변경해야됨 -> 상순님 울지마세요
  // 이 페이지에서 ICocktail로 받아서 filteredResult로 바꿔서 내려주는 값을
  // 내일부터는 그냥 ICocktailSimple[]로 받으니까 바로 내려주면 된다.
  const searchCocktailByName = (keyword: string): Promise<ICocktail> => {
    return request.get(`/cocktail/name?name=${keyword}`);
  };

  const handleSearch = useCallback((inputKeyword: string): void => {
    navigate(`/search/${inputKeyword}`);
  }, []);

  useEffect(() => {
    const setSearchResults = async (): Promise<void> => {
      if (keyword) {
        const searchResult = await searchCocktailByName(keyword);

        const filteredResult = {
          id: searchResult.id,
          name: searchResult.name,
          type: searchResult.type
        };
        setResults([filteredResult]);
      }
    };
    setSearchResults();
  }, [keyword]);

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
