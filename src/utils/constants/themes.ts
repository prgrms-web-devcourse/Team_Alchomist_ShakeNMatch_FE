import type { IThemesColor } from '@models';
import { COLOR } from '@constants';

const THEME_MOOD = ['HAPPY', 'ANGRY', 'SAD', 'ROMANTIC', 'LONELY'] as const;
const THEME_WEATHER = ['SUNNY', 'RAINY', 'CLOUDY', 'SNOWY'] as const;
const THEME_COLOR = [
  'RED',
  'ORANGE',
  'YELLOW',
  'GREEN',
  'BLUE',
  'PURPLE',
  'WHITE',
  'BLACK'
] as const;
const THEME_MUSIC = [
  'JAZZ',
  'ROCK',
  'BALLAD',
  'HIPHOP',
  'CLASSIC',
  'INDIE'
] as const;
const THEME_MBTI = [
  'INTJ',
  'INTP',
  'ENTJ',
  'ENTP',
  'INFJ',
  'INFP',
  'ENFJ',
  'ENFP',
  'ISTJ',
  'ISFJ',
  'ESTJ',
  'ESFJ',
  'ISTP',
  'ISFP',
  'ESTP',
  'ESFP'
] as const;
// const THEME_TRENDING = ['MAN', 'FEMALE'] as const;

const THEMES = {
  MOOD: THEME_MOOD,
  WEATHER: THEME_WEATHER,
  COLOR: THEME_COLOR,
  MUSIC: THEME_MUSIC,
  MBTI: THEME_MBTI
  // TRENDING: THEME_TRENDING
} as const;

const THEMES_COLOR: IThemesColor = {
  MOOD: {
    main: COLOR.BASIC_WHITE,
    detail: {
      HAPPY: COLOR.ORANGE,
      ANGRY: COLOR.STRONG_PINK,
      SAD: COLOR.BLUE,
      ROMANTIC: COLOR.LIGHT_PINK,
      LONELY: COLOR.DARK_GRAY
    }
  },
  WEATHER: {
    main: COLOR.BASIC_WHITE,
    detail: {
      SUNNY: COLOR.ORANGE,
      RAINY: COLOR.BLUE,
      CLOUDY: COLOR.DARK_GRAY,
      SNOWY: COLOR.BRIGHT_IVORY
    }
  },
  COLOR: {
    main: COLOR.BASIC_WHITE,
    detail: {
      RED: COLOR.STRONG_PINK,
      ORANGE: COLOR.ORANGE,
      YELLOW: COLOR.LIGHT_YELLOW,
      GREEN: COLOR.GREEN,
      BLUE: COLOR.BLUE,
      PURPLE: COLOR.VIOLET,
      WHITE: COLOR.BASIC_WHITE,
      BLACK: COLOR.BLACK_OPACITY
    }
  },
  MUSIC: {
    main: COLOR.BASIC_WHITE,
    detail: {
      JAZZ: COLOR.DARK_GRAY,
      ROCK: COLOR.STRONG_PINK,
      BALLAD: COLOR.LIGHT_PINK,
      HIPHOP: COLOR.BLUE,
      CLASSIC: COLOR.BRIGHT_BROWN,
      INDIE: COLOR.GREEN
    }
  },
  MBTI: {
    main: COLOR.BASIC_WHITE,
    detail: {
      INTJ: COLOR.LIGHT_PINK,
      INFP: COLOR.LIGHT_PINK,
      INTP: COLOR.LIGHT_PINK,
      ENTJ: COLOR.LIGHT_PINK,
      ENTP: COLOR.LIGHT_PINK,
      INFJ: COLOR.LIGHT_PINK,
      ENFJ: COLOR.LIGHT_PINK,
      ENFP: COLOR.LIGHT_PINK,
      ISTJ: COLOR.LIGHT_PINK,
      ISFJ: COLOR.LIGHT_PINK,
      ESTJ: COLOR.LIGHT_PINK,
      ESFJ: COLOR.LIGHT_PINK,
      ISTP: COLOR.LIGHT_PINK,
      ISFP: COLOR.LIGHT_PINK,
      ESTP: COLOR.LIGHT_PINK,
      ESFP: COLOR.LIGHT_PINK
    }
  }
} as const;

export { THEMES, THEMES_COLOR };
