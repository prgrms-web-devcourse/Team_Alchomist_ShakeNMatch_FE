import { SectionDivider } from '@base';
import Carousel from '@compound/Carousel';
import { THEMES } from '@constants/themes';
import type { ITHEME } from '@models';
import type { ReactElement } from 'react';
import { useMemo, useState } from 'react';
import { SectionDividerContent } from './styled';
import type { ThemeSelectorProps } from './types';

const ThemeSelector = ({
  initialThemeIndex = 0,
  initialDetailIndex = 0,
  onChangeIndex,
  ...props
}: ThemeSelectorProps): ReactElement => {
  const [selectedThemeIndex, setSelectedThemeIndex] =
    useState(initialThemeIndex);
  const [selectedDetailIndex, setSelectedDetailIndex] =
    useState(initialDetailIndex);
  const selectedThemeName = useMemo(
    () => (Object.keys(THEMES) as ITHEME[])[selectedThemeIndex],
    [selectedThemeIndex]
  );
  const handleChangeTheme = (value: number): void => {
    setSelectedThemeIndex(value);
    setSelectedDetailIndex(0);
    onChangeIndex?.({ theme: value, detail: 0 });
  };

  const handleChangeDetail = (value: number): void => {
    setSelectedDetailIndex(value);
    onChangeIndex?.({ theme: selectedThemeIndex, detail: value });
  };

  return (
    <SectionDivider
      dividerOptions={{ gap: 20 }}
      height={500}
      ratio={[1, 1]}
      showDivider
      width={1000}
      {...props}
    >
      <SectionDividerContent>
        <Carousel.Container
          selectedIndex={selectedThemeIndex}
          onChangeItem={handleChangeTheme}
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
      <SectionDividerContent>
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
