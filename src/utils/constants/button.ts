const BUTTON_TYPE = {
  BUTTON: 'button',
  SUBMIT: 'submit',
  RESET: 'reset'
} as const;

const TEXT_BUTTON_TYPE = {
  SHORT_WHITE: 'SHORT_WHITE',
  SHORT_PINK: 'SHORT_PINK',
  LONG_WHITE: 'LONG_WHITE',
  LONG_PINK: 'LONG_PINK',
  X_SHORT_WHITE: 'X_SHORT_WHITE'
} as const;

const BUTTON_SIZE = {
  SHORT: 'short',
  LONG: 'long',
  KAKAO: 'kakao',
  GOOGLE: 'google',
  HEADER_ICON: 'headerIcon',
  XSHORT: 'xShort'
} as const;

export { BUTTON_TYPE, TEXT_BUTTON_TYPE, BUTTON_SIZE };
