import { SectionDivider, Text } from '@base';
import { useHover } from '@hooks';
import type { ReactElement } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  StyledJangoContainer,
  StyledJangoTextWrapper,
  StyledMainMenuWrapper,
  StyledThemeContainer,
  StyledThemeTextWrapper
} from './styled';
import type { MainMenuSelectorProps } from './types';
import { COLOR, TEXT_SIZE, DIVIDER_DIRECTION } from '@constants';

const ONE_POINT_TWO = 1.2;
const INITIAL_GAP = '25vw';
const CHANGE_GAP = '1vw';
const INITIAL_RATIO = [1, 1];
const THEME_HOVERED_RATIO = [ONE_POINT_TWO, 1];
const JANGO_HOVERED_RATIO = [1, ONE_POINT_TWO];
const THEME_CLICKED_RATIO = [9, 1];
const JANGO_CLICKED_RATIO = [1, 9];

const MainMenuSelector = ({
  onMenuSelected,
  selectedMenu
}: MainMenuSelectorProps): ReactElement => {
  const [ratio, setRatio] = useState(INITIAL_RATIO);
  const [gap, setGap] = useState(INITIAL_GAP);
  const [isThemeHovered, themeRef] = useHover<HTMLDivElement>();
  const [isJangoHovered, jangoRef] = useHover<HTMLDivElement>();
  const clickedElement = useRef<'theme' | 'jango' | null>(null);

  const handleInitialize = useCallback(() => {
    setRatio(INITIAL_RATIO);
    setGap(INITIAL_GAP);
    clickedElement.current = null;
  }, []);
  const handleThemeClick = useCallback(() => {
    setRatio(THEME_CLICKED_RATIO);
    setGap(CHANGE_GAP);
    clickedElement.current = 'theme';
    onMenuSelected?.('theme');
  }, []);

  const handleJangoClick = useCallback(() => {
    setRatio(JANGO_CLICKED_RATIO);
    setGap(CHANGE_GAP);
    clickedElement.current = 'jango';
    onMenuSelected?.('jango');
  }, []);

  useEffect(() => {
    if (!clickedElement.current) {
      if (isJangoHovered) setRatio(JANGO_HOVERED_RATIO);
      else setRatio(INITIAL_RATIO);
    }
  }, [isJangoHovered]);

  useEffect(() => {
    if (!clickedElement.current) {
      if (isThemeHovered) setRatio(THEME_HOVERED_RATIO);
      else setRatio(INITIAL_RATIO);
    }
  }, [isThemeHovered]);

  useEffect(() => {
    if (!selectedMenu) {
      handleInitialize();
    }
  }, [selectedMenu]);

  return (
    <StyledMainMenuWrapper>
      <SectionDivider
        className='menuContainer'
        direction={DIVIDER_DIRECTION.VERTICAL}
        dividerOptions={{ color: COLOR.TRANSPARENT, gap }}
        height='200vw'
        ratio={ratio}
        rotate='-45deg'
        showDivider
        width='200vh'
      >
        <StyledThemeContainer
          ref={themeRef}
          selected={clickedElement.current === 'theme'}
          onClick={handleThemeClick}
        >
          {!selectedMenu && (
            <StyledThemeTextWrapper className='textWrapper'>
              <Text color={COLOR.BASIC_WHITE} size={TEXT_SIZE.sm}>
                ???????????? ?????? ???????????? ??? ???????????? ?????? ??????????
              </Text>
            </StyledThemeTextWrapper>
          )}
        </StyledThemeContainer>
        <StyledJangoContainer
          ref={jangoRef}
          selected={clickedElement.current === 'jango'}
          onClick={handleJangoClick}
        >
          {!selectedMenu && (
            <StyledJangoTextWrapper className='textWrapper'>
              <Text color={COLOR.BASIC_WHITE} size={TEXT_SIZE.sm}>
                ???????????? ???????????? ????????? ?????? ??????????
              </Text>
            </StyledJangoTextWrapper>
          )}
        </StyledJangoContainer>
      </SectionDivider>
    </StyledMainMenuWrapper>
  );
};

export default MainMenuSelector;
