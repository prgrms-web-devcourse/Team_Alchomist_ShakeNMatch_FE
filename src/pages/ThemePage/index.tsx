import { request } from '@apis/config';
import { Divider, SectionDivider, Text } from '@base';
import { THEMES } from '@constants/themes';
import BackButton from '@domain/BackButton';
import CocktailList from '@domain/CocktailList';
import ThemeSelector from '@domain/ThemeSelector';
import useDebounce from '@hooks/useDebounce';
import type { ICocktail, ITHEME } from '@models';
import type { ReactElement } from 'react';
import { useCallback, useMemo, useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  StyledResultButton,
  StyledResultContainer,
  StyledThemePageContainer
} from './styled';

const RADIX_TEN = 10;
// 임시 상수
const SLICE_COUNT = 50;
const DEBOUNCE_DELAY = 700;

const ThemePage = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedThemes = useMemo(
    () => ({
      main: searchParams.get('main') || '0',
      detail: searchParams.get('detail') || '0'
    }),
    [searchParams]
  );
  const showResult = useMemo(() => searchParams.get('result'), [searchParams]);
  const [isMountedWithResult, setIsMountedWithResult] = useState(false); // 최초 접근 지점 확인 ( result 로 바로 접근인지 아닌지에 따라 handleBack navigate 지점 변경)
  const [cocktailList, setCocktailList] = useState<{
    value: ICocktail[];
    isLoading: boolean;
    error: any;
  }>({
    value: [],
    isLoading: false,
    error: null
  });

  // 임시 cocktail get api 함수
  const getCocktailList = (main: string, detail: string): void => {
    console.log(main, detail);
    setCocktailList((prevCocktailList) => ({
      ...prevCocktailList,
      isLoading: true
    }));
    request
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((data) => {
        if (data && Array.isArray(data)) {
          const newCocktailList = data
            .slice(0, SLICE_COUNT)
            .map(({ title, url }) => ({
              name: title,
              imageUrl: [url]
            }));
          console.log(newCocktailList);
          setCocktailList({
            value: newCocktailList as any[],
            isLoading: false,
            error: null
          });
        }
      })
      .catch((e) => {
        console.error(e);
        setCocktailList({
          value: [],
          isLoading: false,
          error: 'error!'
        });
      });
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
      const result = searchParams.get('result');
      if (result === 'true') {
        debounceGetCocktailList(
          main.toString(RADIX_TEN),
          detail.toString(RADIX_TEN)
        );
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
    const { main, detail } = selectedThemes;
    console.log(main, detail);
    if (main !== null && detail !== null) {
      setSearchParams({
        main,
        detail,
        result: 'true'
      });
    }
    getCocktailList(main, detail);
  }, [selectedThemes, setSearchParams]);

  const handleBack = useCallback(() => {
    if (isMountedWithResult) {
      const { main, detail } = selectedThemes;
      setSearchParams({ main, detail }, { replace: true }); // result 페이지로 바로 접근됬을경우
    } else {
      navigate(-1); // result 이전에서 접근해 온경우
    }
  }, [navigate, isMountedWithResult, selectedThemes, setSearchParams]);

  useEffect(() => {
    if (showResult) {
      const { main, detail } = selectedThemes;
      getCocktailList(main, detail);
      setIsMountedWithResult(true);
    }
  }, []);

  return (
    <>
      <StyledThemePageContainer>
        <h2>
          {showResult ? (
            <>
              <Text>당신이 선택한 </Text>
              <Text bold color='BLUE' italic>
                {`'${
                  Object.keys(THEMES)[parseInt(selectedThemes.main)] as ITHEME
                }' `}
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
            initialDetailIndex={parseInt(selectedThemes.detail || '0', 10)}
            initialMainIndex={parseInt(selectedThemes.main || '0', 10)}
            onChangeIndex={handleChangeTheme}
          />
          <StyledResultContainer>
            {cocktailList.isLoading ? (
              <Text>Loading</Text>
            ) : (
              <CocktailList cocktailList={cocktailList.value} />
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
