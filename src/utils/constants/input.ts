const INPUT_TYPE = {
  TEXT: 'text',
  NUMBER: 'number',
  CHECKBOX: 'checkbox',
  FILE: 'file'
} as const;

const USER_INPUT_TYPE = {
  NICKNAME: 'nickname',
  AGE: 'age',
  GENDER: 'gender',
  MBTI: 'mbti'
} as const;

export { INPUT_TYPE, USER_INPUT_TYPE };
