const THEME_MOOD = ['HAPPY', 'ANGRY', 'SAD'] as const;
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

export { THEMES };
