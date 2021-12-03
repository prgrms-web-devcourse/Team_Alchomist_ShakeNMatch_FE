const THEME_COLOR = {
  primary: 'grey',
  dark: 'black',
  light: 'white'
} as const;

type ThemeColorKeys = keyof typeof THEME_COLOR;
type IThemeColor = typeof THEME_COLOR[ThemeColorKeys];

export { THEME_COLOR };
export type { IThemeColor };
