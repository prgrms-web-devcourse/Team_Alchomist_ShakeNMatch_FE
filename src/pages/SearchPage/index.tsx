import type { ReactElement } from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SectionDivider } from '@base';
import CocktailList from '@domain/CocktailList';
import SearchCocktailInput from '@domain/SearchCocktailInput';
import { SectionDividerContent } from './styled';

// temp
interface ICocktail {
  id: string;
  name: string;
  type: string;
}

// temp 응답 결과
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
    console.log('다음 키워드로 칵테일 검색', keyword);
    // 응답 결과를 setResults
    setResults(DUMMY);
  }, [keyword]);

  return (
    <SectionDivider
      dividerOptions={{ gap: 20 }}
      height={500}
      ratio={[1, 1]}
      showDivider
      width={1000}
    >
      <SectionDividerContent>
        <SearchCocktailInput onSearch={handleSearch} />
      </SectionDividerContent>
      <SectionDividerContent>
        <CocktailList cocktailList={results} />
      </SectionDividerContent>
    </SectionDivider>
  );
};

export default SearchPage;
