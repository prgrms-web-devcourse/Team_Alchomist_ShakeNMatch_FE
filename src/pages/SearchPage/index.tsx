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
import type { ICocktail } from '@models/types';

const DUMMY = [
  { id: '123', name: '칵테일', type: 'whiskey' },
  { id: '124', name: '칵테이', type: 'whiskey' },
  { id: '125', name: '칵테삼', type: 'whiskey' },
  { id: '126', name: '칵테사', type: 'whiskey' },
  { id: '127', name: '칵테오', type: 'whiskey' },
  { id: '128', name: '칵테육', type: 'whiskey' }
];

const SearchPage = (): ReactElement => {
  const [results, setResults] = useState<ICocktail[]>([]);
  const { keyword } = useParams();
  const navigate = useNavigate();

  const handleSearch = useCallback((inputKeyword: string): void => {
    navigate(`/search/${inputKeyword}`);
  }, []);

  useEffect(() => {
    // keyword로 검색 api 호출
    // const setSearchResults = async (): Promise<void> => {
    //   if (keyword) {
    //     const searchResult = await searchCocktailByName(keyword);
    //     setResults(searchResult);
    //   }
    // };
    // setSearchResults();

    // const searchResult = searchCocktailByName
    console.log('다음 키워드로 칵테일 검색', keyword);
    // 응답 결과를 setResults
    setResults(DUMMY);
  }, [keyword]);

  return (
    <SectionDividerWithTitle alignItems>
      <StyledContentWrapper>
        <Text block>찾아 보고 싶은 칵테일이 있나요?</Text>
        <Image mode='contain' src={searchBartender} />
        <SearchCocktailInput onSearch={handleSearch} />
      </StyledContentWrapper>
      {/* 상태값 바뀔 때마다 애니메이션 재적용 필요 */}
      <CocktailList cocktailList={results} />
    </SectionDividerWithTitle>
  );
};

export default SearchPage;
