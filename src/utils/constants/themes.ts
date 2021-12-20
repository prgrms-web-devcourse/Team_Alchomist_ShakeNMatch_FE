import type { IThemesColor } from '@models';

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
    main: 'BASIC_WHITE',
    detail: {
      HAPPY: 'ORANGE',
      ANGRY: 'STRONG_PINK',
      SAD: 'BLUE',
      ROMANTIC: 'LIGHT_PINK',
      LONELY: 'DARK_GRAY'
    }
  },
  WEATHER: {
    main: 'BASIC_WHITE',
    detail: {
      SUNNY: 'ORANGE',
      RAINY: 'BLUE',
      CLOUDY: 'DARK_GRAY',
      SNOWY: 'BRIGHT_IVORY'
    }
  },
  COLOR: {
    main: 'BASIC_WHITE',
    detail: {
      RED: 'STRONG_PINK',
      ORANGE: 'ORANGE',
      YELLOW: 'LIGHT_YELLOW',
      GREEN: 'GREEN',
      BLUE: 'BLUE',
      PURPLE: 'VIOLET',
      WHITE: 'BASIC_WHITE',
      BLACK: 'BLACK_OPACITY'
    }
  },
  MUSIC: {
    main: 'BASIC_WHITE',

    detail: {
      JAZZ: 'DARK_GRAY',
      ROCK: 'STRONG_PINK',
      BALLAD: 'LIGHT_PINK',
      HIPHOP: 'BLUE',
      CLASSIC: 'BRIGHT_BROWN',
      INDIE: 'GREEN'
    }
  },
  MBTI: {
    main: 'BASIC_WHITE',
    detail: {
      INTJ: 'LIGHT_PINK',
      INFP: 'LIGHT_PINK',
      INTP: 'LIGHT_PINK',
      ENTJ: 'LIGHT_PINK',
      ENTP: 'LIGHT_PINK',
      INFJ: 'LIGHT_PINK',
      ENFJ: 'LIGHT_PINK',
      ENFP: 'LIGHT_PINK',
      ISTJ: 'LIGHT_PINK',
      ISFJ: 'LIGHT_PINK',
      ESTJ: 'LIGHT_PINK',
      ESFJ: 'LIGHT_PINK',
      ISTP: 'LIGHT_PINK',
      ISFP: 'LIGHT_PINK',
      ESTP: 'LIGHT_PINK',
      ESFP: 'LIGHT_PINK'
    }
  }
} as const;

export { THEMES, THEMES_COLOR };
