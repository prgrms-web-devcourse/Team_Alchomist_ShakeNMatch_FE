import { SectionDivider } from '@base';
import Carousel from '@compound/Carousel';
import { THEMES } from '@constants/themes';
import type { ITHEME } from '@models';
import type { ReactElement } from 'react';
import { useMemo, useState, useEffect } from 'react';
import { SectionDividerContent } from './styled';
import type { ThemeSelectorProps } from './types';

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
    <SectionDivider
      dividerOptions={{ color: 'TRANSPARENT', gap: 20 }}
      height={500}
      ratio={[1, 1]}
      showDivider
      width={1000}
      {...props}
    >
      <SectionDividerContent className='mainCarousel'>
        <Carousel.Container
          selectedIndex={selectedMainIndex}
          onChangeItem={handleChangeMain}
        >
          {Object.keys(THEMES).map((theme) => (
            <Carousel.Item
              key={theme}
              imageSrc='https://via.placeholder.com/150'
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
          {THEMES[selectedThemeName].map((detailTheme) => (
            <Carousel.Item
              key={detailTheme}
              backgroundColor='LIGHT_PINK'
              imageSrc='https://via.placeholder.com/150'
              title={detailTheme}
            />
          ))}
        </Carousel.Container>
      </SectionDividerContent>
    </SectionDivider>
  );
};

export default ThemeSelector;
