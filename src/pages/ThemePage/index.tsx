import { SectionDivider, Text } from '@base';
import TextButton from '@compound/TextButton';
import { THEMES } from '@constants/themes';
import ThemeSelector from '@domain/ThemeSelector';
import type { ITHEME } from '@models';
import type { ReactElement } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  StyledHeader,
  StyledResultContainer,
  StyledThemePageContainer
} from './styled';

const RADIX_TEN = 10;

const ThemePage = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [selectedThemes, setSelectedThemes] = useState({
  //   main: searchParams.get('main'),
  //   detail: searchParams.get('detail')
  // });
  const selectedThemes = useMemo(
    () => ({
      main: searchParams.get('main') || '0',
      detail: searchParams.get('detail') || '0'
    }),
    [searchParams]
  );
  const showResult = searchParams.get('result');
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
  }, [selectedThemes]);

  return (
    <>
      <StyledHeader />
      <StyledThemePageContainer>
        <h2>
          <Text bold> 테마 별로 레시피를 추천받아 보세요!</Text>
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
        {!showResult && (
          <TextButton buttonType='LONG_WHITE' onClick={handleResult}>
            결과 보기
          </TextButton>
        )}
      </StyledThemePageContainer>
    </>
  );
};

export default ThemePage;
