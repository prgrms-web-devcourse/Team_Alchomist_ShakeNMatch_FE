/* eslint-disable @typescript-eslint/no-unused-vars */
import { Divider, SectionDivider, Text } from '@base';
import { Loader } from '@compound';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';
import { THEMES } from '@constants/themes';
import BackButton from '@domain/BackButton';
import CocktailList from '@domain/CocktailList';
import ThemeSelector from '@domain/ThemeSelector';
import useAxios from '@hooks/useAxios';
import useDebounce from '@hooks/useDebounce';
import type { IApiResponse, ICocktailSimple, ITHEME } from '@models';
import type { ReactElement } from 'react';
import { useCallback, useMemo, useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  StyledResultButton,
  StyledResultContainer,
  StyledThemePageContainer
} from './styled';

const RADIX_TEN = 10;
const DEBOUNCE_DELAY = 700;

const ThemePage = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);

  const selectedThemesIndex = useMemo(
    () => ({
      main: searchParams.get('main') || '0',
      detail: searchParams.get('detail') || '0'
    }),
    [searchParams]
  );

  const mainTheme = useMemo(
    () =>
      (Object.keys(THEMES) as ITHEME[])[
        parseInt(selectedThemesIndex.main, RADIX_TEN)
      ],
    [selectedThemesIndex]
  );
  const detailTheme = useMemo(
    () => THEMES[mainTheme][parseInt(selectedThemesIndex.detail, RADIX_TEN)],
    [mainTheme, selectedThemesIndex]
  );
  const showResult = useMemo(() => searchParams.get('result'), [searchParams]);
  // 최초 접근 지점 확인 ( result 로 바로 접근인지 아닌지에 따라 handleBack navigate 지점 변경)
  const [isMountedWithResult, setIsMountedWithResult] = useState(false);
  const [cocktailListAPIState, setCocktailListAPIState] = useState<{
    value: ICocktailSimple[];
    isLoading: boolean;
    error: any;
  }>({
    value: [],
    isLoading: false,
    error: null
  });

  const getCocktailList = async (
    main: string,
    detail: string
  ): Promise<void> => {
    try {
      setCocktailListAPIState((prevCocktailList) => ({
        ...prevCocktailList,
        isLoading: true
      }));
      const { data: cocktailList } = await request.get<
        IApiResponse<ICocktailSimple[]>
      >(`/cocktail/theme?mainCategory=${main}&subCategory=${detail}`);
      if (cocktailList && Array.isArray(cocktailList)) {
        setCocktailListAPIState({
          value: cocktailList,
          isLoading: false,
          error: null
        });
      }
    } catch (e) {
      console.error(e);
      setCocktailListAPIState({
        value: [],
        isLoading: false,
        error: e
      });
    }
  };

  const [debounceGetCocktailList] = useDebounce<[string, string]>(
    (main, detail) => {
      getCocktailList(main, detail);
    },
    DEBOUNCE_DELAY
  );

  const handleChangeTheme = useCallback(
    ({ main, detail }: { main: number; detail: number }) => {
      const newSearchParams: {
        main: string;
        detail: string;
        result?: string;
      } = {
        main: main.toString(RADIX_TEN),
        detail: detail.toString(RADIX_TEN)
      };
      if (searchParams.get('result') === 'true') {
        newSearchParams.result = 'true';
      }
      setTimeout(() => {
        // 동기 처리시 useEffect 내 첫렌더링에서 set이 진행되지 않음
        setSearchParams(newSearchParams, { replace: true });
      }, 0);
    },
    [searchParams]
  );

  const handleResult = useCallback(() => {
    const { main, detail } = selectedThemesIndex;
    if (main !== null && detail !== null) {
      setSearchParams({
        main,
        detail,
        result: 'true'
      });
    }
  }, [selectedThemesIndex, setSearchParams]);

  const handleBack = useCallback(() => {
    if (isMountedWithResult) {
      const { main, detail } = selectedThemesIndex;
      setSearchParams({ main, detail }, { replace: true }); // result 페이지로 바로 접근됬을경우
    } else {
      navigate(-1); // result 이전에서 접근해 온경우
    }
  }, [navigate, isMountedWithResult, selectedThemesIndex, setSearchParams]);

  useEffect(() => {
    if (showResult) {
      debounceGetCocktailList(mainTheme, detailTheme);

      setIsMountedWithResult(true);
    }
  }, [mainTheme, detailTheme, showResult]);

  return (
    <>
      <StyledThemePageContainer>
        <h2>
          {showResult ? (
            <>
              <Text>당신이 선택한 </Text>
              <Text bold color='BLUE' italic>
                {`'${mainTheme}' `}
              </Text>
              <Text>에 어울리는 칵테일!</Text>
            </>
          ) : (
            <Text> 테마 별로 레시피를 추천받아 보세요!</Text>
          )}
        </h2>
        <Divider color='TRANSPARENT' gap={5} />
        <SectionDivider
          {...(showResult && { className: 'result' })}
          width='200vw'
        >
          <ThemeSelector
            initialDetailIndex={parseInt(selectedThemesIndex.detail || '0', 10)}
            initialMainIndex={parseInt(selectedThemesIndex.main || '0', 10)}
            onChangeIndex={handleChangeTheme}
          />
          <StyledResultContainer>
            {cocktailListAPIState.isLoading ? (
              <Loader />
            ) : (
              <CocktailList cocktailList={cocktailListAPIState.value} />
            )}
          </StyledResultContainer>
        </SectionDivider>
        {!showResult ? (
          <StyledResultButton buttonType='LONG_WHITE' onClick={handleResult}>
            결과 보기
          </StyledResultButton>
        ) : (
          <BackButton color='NAVY' onClick={handleBack} />
        )}
      </StyledThemePageContainer>
    </>
  );
};

export default ThemePage;
