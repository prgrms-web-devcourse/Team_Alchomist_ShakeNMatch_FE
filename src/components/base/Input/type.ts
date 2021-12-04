import type { SizeType } from '@/types';
import type { HTMLAttributes } from 'react';

const REAL_TYPE = {
  nickname: 'text',
  gender: 'text',
  age: 'number',
  mbti: 'text'
} as const;

type InputType = keyof typeof REAL_TYPE;

const TEXT_SIZE = {
  xs: '1rem',
  sm: '1.5rem',
  md: '2rem',
  lg: '2.5rem',
  xl: '3rem'
} as const;

export const MBTI = [
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
];

type IMbti =
  | 'INTJ'
  | 'INTP'
  | 'ENTJ'
  | 'ENTP'
  | 'INFJ'
  | 'INFP'
  | 'ENFJ'
  | 'ENFP'
  | 'ISTJ'
  | 'ISFJ'
  | 'ESTJ'
  | 'ESFJ'
  | 'ISTP'
  | 'ISFP'
  | 'ESTP'
  | 'ESFP';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  inputType: InputType;
  fontSize: SizeType;
  maxLength: number;
}

export type { InputProps, InputType, IMbti };
export { TEXT_SIZE, REAL_TYPE };
