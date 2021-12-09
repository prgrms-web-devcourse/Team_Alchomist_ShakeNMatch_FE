import type { ReactElement } from 'react';
import colorSrc from '@assets/carouselTheme/big/color.png';
import mbtiSrc from '@assets/carouselTheme/big/mbti.png';
import moodSrc from '@assets/carouselTheme/big/mood.png';
import musicSrc from '@assets/carouselTheme/big/music.png';
import trendingSrc from '@assets/carouselTheme/big/trending.png';
import weatherSrc from '@assets/carouselTheme/big/weather.png';
import enfjSrc from '@assets/carouselTheme/mbti/enfj.svg';
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
    <Carousel.Item
      backgroundColor='GREEN'
      imageSrc='https://picsum.photos/180'
      selected={props.selected}
      title='TRENDING'
      onNext={(): void => {
        console.log('next!');
      }}
      onPrev={(): void => {
        console.log('prev!');
      }}
    />
    <Carousel.Item
      backgroundColor='LIGHT_GRAY'
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

export const Container = (props: CarouselItemProps): ReactElement => (
  <Wrapper>
    <Carousel.Container>
      <Carousel.Item
        backgroundColor='LIGHT_PINK'
        imageSrc={moodSrc}
        selected={!props.selected}
        title='MOOD'
      />
      <Carousel.Item
        backgroundColor='LIGHT_YELLOW'
        imageSrc={weatherSrc}
        selected={props.selected}
        title='WEATHER'
      />
      <Carousel.Item
        backgroundColor='MIDDLE_PINK'
        imageSrc={mbtiSrc}
        selected={!props.selected}
        title='MBTI'
      />
      <Carousel.Item
        backgroundColor='NAVY'
        imageSrc={colorSrc}
        selected={!props.selected}
        title='COLOR'
      />
      <Carousel.Item
        backgroundColor='ORANGE'
        imageSrc={musicSrc}
        selected={!props.selected}
        title='MUSIC'
      />
      <Carousel.Item
        backgroundColor='VIOLET'
        imageSrc={trendingSrc}
        selected={!props.selected}
        title='TRENDING'
      />
      <Carousel.Item
        backgroundColor='NAVY'
        imageSrc={enfjSrc}
        selected={!props.selected}
      />
    </Carousel.Container>
  </Wrapper>
);
