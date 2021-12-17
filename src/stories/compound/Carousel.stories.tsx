import type { ReactElement } from 'react';
import { useState } from 'react';
import colorSrc from '@assets/carouselTheme/big/color.png';
import mbtiSrc from '@assets/carouselTheme/big/mbti.png';
import moodSrc from '@assets/carouselTheme/big/mood.png';
import musicSrc from '@assets/carouselTheme/big/music.png';
import trendingSrc from '@assets/carouselTheme/big/trending.png';
import weatherSrc from '@assets/carouselTheme/big/weather.png';
import enfjSrc from '@assets/carouselTheme/mbtiIcons/enfj.png';
import Carousel from '@components/compound/Carousel';
import type { CarouselItemProps } from '@components/compound/Carousel/CarouselItem/types';
import styled from '@emotion/styled';

export default {
  title: 'Component/Compound/Carousel',
  component: Carousel
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0efe3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = (props: CarouselItemProps): ReactElement => (
  <Wrapper>
    <Carousel.Item
      backgroundColor='DARK_GRAY'
      imageSrc='https://picsum.photos/180'
      selected={!props.selected}
      title='TRENDING'
      onNext={(): void => {
        console.log('next!');
      }}
      onPrev={(): void => {
        console.log('prev!');
      }}
    />
  </Wrapper>
);

export const Container = (): ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Wrapper>
      <Carousel.Container
        selectedIndex={selectedIndex}
        onChangeItem={(index): void => {
          setSelectedIndex(index);
        }}
      >
        <Carousel.Item
          backgroundColor='LIGHT_PINK'
          imageSrc={moodSrc}
          title='MOOD'
        />
        <Carousel.Item
          backgroundColor='LIGHT_YELLOW'
          imageSrc={weatherSrc}
          title='WEATHER'
        />
        <Carousel.Item
          backgroundColor='MIDDLE_PINK'
          imageSrc={mbtiSrc}
          title='MBTI'
        />
        <Carousel.Item
          backgroundColor='NAVY'
          imageSrc={colorSrc}
          title='COLOR'
        />
        <Carousel.Item
          backgroundColor='ORANGE'
          imageSrc={musicSrc}
          title='MUSIC'
        />
        <Carousel.Item
          backgroundColor='VIOLET'
          imageSrc={trendingSrc}
          title='TRENDING'
        />
        <Carousel.Item backgroundColor='NAVY' imageSrc={enfjSrc} />
      </Carousel.Container>
    </Wrapper>
  );
};
