import type { ReactElement } from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Image, Text } from '@base';
import searchBartender from '@assets/characters/searchBartender.png';
import {
  SearchCocktailInput,
  SectionDividerWithTitle,
  HeaderPageTemplate,
  CocktailList
} from '@domain';
import { StyledContentWrapper } from './styled';

import useAxios from '@hooks/useAxios';
import type { ICocktailSimple, IApiResponse } from '@models/types';
import { IMG_MODE, AXIOS_REQUEST_TYPE } from '@constants';

const SearchPage = (): ReactElement => {
  const [results, setResults] = useState<ICocktailSimple[]>([]);
  const { keyword } = useParams();
  const navigate = useNavigate();

  const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);

  const searchCocktailByName = (
    keyword: string
  ): Promise<IApiResponse<ICocktailSimple[]>> => {
    return request.get(`/cocktail/name?name=${keyword}`);
  };

  const handleSearch = useCallback((inputKeyword: string): void => {
    navigate(`/search/${inputKeyword}`);
  }, []);

  useEffect(() => {
    const setSearchResults = async (): Promise<void> => {
      if (keyword) {
        const searchResult = await searchCocktailByName(keyword);
        setResults(searchResult.data);
      }
    };
    setSearchResults();
  }, [keyword]);

  return (
    <HeaderPageTemplate>
      <SectionDividerWithTitle alignItems withHeader>
        <StyledContentWrapper>
          <Text block>찾아 보고 싶은 칵테일이 있나요?</Text>
          <Image mode={IMG_MODE.CONTAIN} src={searchBartender} />
          <SearchCocktailInput initialValue={keyword} onSearch={handleSearch} />
        </StyledContentWrapper>
        <CocktailList cocktailList={results} />
      </SectionDividerWithTitle>
    </HeaderPageTemplate>
  );
};

export default SearchPage;
