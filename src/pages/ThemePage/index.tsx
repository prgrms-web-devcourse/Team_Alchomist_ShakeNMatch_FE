import { SectionDivider, Text } from '@base';
import TextButton from '@compound/TextButton';
import { THEMES } from '@constants/themes';
import ThemeSelector from '@domain/ThemeSelector';
import type { ITHEME } from '@models';
import type { ReactElement } from 'react';
import { useCallback, useMemo, useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  StyledBackButton,
  StyledHeader,
  StyledResultContainer,
  StyledThemePageContainer
} from './styled';

const RADIX_TEN = 10;

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
      if (result === 'true') newSearchParams.result = 'true';
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
      setIsMountedWithResult(true);
    }
  }, []);

  return (
    <>
      <StyledHeader />
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
            <Text bold> 테마 별로 레시피를 추천받아 보세요!</Text>
          )}
        </h2>
        <SectionDivider
          {...(showResult && { className: 'result' })}
          height='500px'
          width='200vw'
        >
          <ThemeSelector
            initialDetailIndex={parseInt(selectedThemes.detail || '0', 10)}
            initialMainIndex={parseInt(selectedThemes.main || '0', 10)}
            onChangeIndex={handleChangeTheme}
          />
          <StyledResultContainer>
            <Text>
              {
                THEMES[
                  Object.keys(THEMES)[
                    parseInt(selectedThemes.main, RADIX_TEN)
                  ] as ITHEME
                ][parseInt(selectedThemes.detail, RADIX_TEN)]
              }
            </Text>
          </StyledResultContainer>
        </SectionDivider>
        {!showResult ? (
          <TextButton buttonType='LONG_WHITE' onClick={handleResult}>
            결과 보기
          </TextButton>
        ) : (
          <StyledBackButton color='NAVY' onClick={handleBack} />
        )}
      </StyledThemePageContainer>
    </>
  );
};

export default ThemePage;
