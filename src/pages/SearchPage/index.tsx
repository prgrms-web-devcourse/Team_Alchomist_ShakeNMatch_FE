import type { ReactElement } from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CocktailList from '@domain/CocktailList';
import { Image, Text } from '@base';
import searchBartender from '@assets/characters/searchBartender.png';
import SearchCocktailInput from '@domain/SearchCocktailInput';
import { StyledContentWrapper } from './styled';
import SectionDividerWithTitle from '@domain/SectionDividerWithTitle';

import useAxios from '@hooks/useAxios';
import type { ICocktailSimple, IApiResponse } from '@models/types';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';
import { CocktailDetailModal } from '@domain';

const SearchPage = (): ReactElement => {
  const [results, setResults] = useState<ICocktailSimple[]>([]);
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [clickedCocktailId, setClickedCocktailId] = useState<number | null>(
    null
  );
  const [isCocktailDetailModalVisible, setIsCocktailDetailModalVisible] =
    useState<boolean>(false);

  const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);

  const searchCocktailByName = (
    keyword: string
  ): Promise<IApiResponse<ICocktailSimple[]>> => {
    return request.get(`/cocktail/name?name=${keyword}`);
  };

  const handleSearch = useCallback((inputKeyword: string): void => {
    navigate(`/search/${inputKeyword}`);
  }, []);

  const handleAlbumClick = (cocktailId: number): void => {
    setClickedCocktailId(cocktailId);
    setIsCocktailDetailModalVisible(true);
  };

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
    <>
      <SectionDividerWithTitle alignItems>
        <StyledContentWrapper>
          <Text block>찾아 보고 싶은 칵테일이 있나요?</Text>
          <Image mode='contain' src={searchBartender} />
          <SearchCocktailInput onSearch={handleSearch} />
        </StyledContentWrapper>
        <CocktailList
          cocktailList={results}
          handleAlbumClick={handleAlbumClick}
        />
      </SectionDividerWithTitle>
      {clickedCocktailId && (
        <CocktailDetailModal
          backgroundColor='DARK_GRAY'
          clickedCocktailId={clickedCocktailId}
          color='IVORY'
          size='lg'
          visible={isCocktailDetailModalVisible}
          onClose={(): void => {
            console.log('CocktailDetailModal Closed');
            setIsCocktailDetailModalVisible(false);
          }}
        />
      )}
    </>
  );
};

export default SearchPage;
