import { SectionDivider } from '@base';
import { Carousel } from '@compound';
import { THEMES, THEMES_COLOR } from '@constants/themes';
import type { ITHEME } from '@models';
import type { ReactElement } from 'react';
import { useMemo, useState, useEffect } from 'react';
import { SectionDividerContent } from './styled';
import type { ThemeSelectorProps } from './types';
import mainImageSrcs from '@assets/carouselTheme/big';
import detailImageSrcs from '@assets/carouselTheme';

const ThemeSelector = ({
  initialMainIndex = 0,
  initialDetailIndex = 0,
  onChangeIndex,
  ...props
}: ThemeSelectorProps): ReactElement => {
  const [selectedMainIndex, setSelectedMainIndex] = useState(initialMainIndex);
  const [selectedDetailIndex, setSelectedDetailIndex] =
    useState(initialDetailIndex);
  const selectedThemeName = useMemo(
    () => (Object.keys(THEMES) as ITHEME[])[selectedMainIndex],
    [selectedMainIndex]
  );
  const selectedDetailNames = useMemo(
    () => THEMES[selectedThemeName],
    [selectedThemeName]
  );

  const handleChangeMain = (value: number): void => {
    setSelectedMainIndex(value);
    setSelectedDetailIndex(0);
    onChangeIndex?.({ main: value, detail: 0 });
  };

  const handleChangeDetail = (value: number): void => {
    setSelectedDetailIndex(value);
    onChangeIndex?.({ main: selectedMainIndex, detail: value });
  };

  // 최초 렌더링 시
  useEffect(() => {
    if (!selectedThemeName) {
      handleChangeMain(0);
    } else if (!THEMES[selectedThemeName][selectedDetailIndex]) {
      handleChangeDetail(0);
    }
  }, []);

  return (
    <SectionDivider ratio={[1, 1]} {...props}>
      <SectionDividerContent className='mainCarousel'>
        <Carousel.Container
          selectedIndex={selectedMainIndex}
          onChangeItem={handleChangeMain}
        >
          {(Object.keys(THEMES) as ITHEME[]).map((theme) => (
            <Carousel.Item
              key={theme}
              backgroundColor={THEMES_COLOR[theme].main}
              imageSrc={mainImageSrcs[theme]}
              textColor='BLACK'
              title={theme}
            />
          ))}
        </Carousel.Container>
      </SectionDividerContent>
      <SectionDividerContent className='detailCarousel'>
        <Carousel.Container
          selectedIndex={selectedDetailIndex}
          onChangeItem={handleChangeDetail}
        >
          {selectedDetailNames.map((detailTheme) => (
            <Carousel.Item
              key={detailTheme}
              backgroundColor={
                THEMES_COLOR[selectedThemeName].detail[detailTheme]
              }
              // 여기서 조금 더 정확한 타입명시를 하는 방법은 없을까
              imageSrc={
                (
                  detailImageSrcs[selectedThemeName] as {
                    [key: string]: string;
                  }
                )[detailTheme]
              }
              textColor='BLACK'
              title={selectedThemeName !== 'MBTI' ? detailTheme : undefined}
            />
          ))}
        </Carousel.Container>
      </SectionDividerContent>
    </SectionDivider>
  );
};

export default ThemeSelector;
