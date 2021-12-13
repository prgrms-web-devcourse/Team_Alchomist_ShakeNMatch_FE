import type { TEXT_SIZE, TEXT_WEIGHT } from '@constants';
import type { COLOR } from '@constants/colors';
import type { USER_VALIDATE_ERROR_MESSAGES } from '@constants/user';

type ColorKeys = keyof typeof COLOR;
type ColorType = typeof COLOR[ColorKeys];

type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type TextSizeKeys = keyof typeof TEXT_SIZE;
type ITextSize = typeof TEXT_SIZE[TextSizeKeys];
type TextWeightKeys = keyof typeof TEXT_WEIGHT;
type ITextWeight = typeof TEXT_WEIGHT[TextWeightKeys];

// user Form
type IUserFormType = 'Register' | 'EditProfile';
type IUserInputType = 'nickname' | 'gender' | 'age' | 'mbti';
type IUserGender = '남자' | '여자';
type IUserMbti =
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

// validator.ts
type ValidateFnType = (e: string) => boolean;
type ValidateKeys = IUserInputType;

type IUserValidateError = Partial<typeof USER_VALIDATE_ERROR_MESSAGES>;
interface ValidateUserArgsType {
  nickname: string;
  gender: string;
  age: IUserGender;
  mbti: IUserMbti;
}

export type {
  ColorKeys,
  ColorType,
  SizeType,
  ITextSize,
  ITextWeight,
  TextSizeKeys,
  TextWeightKeys,
  IUserInputType,
  IUserFormType,
  IUserGender,
  IUserMbti,
  ValidateFnType,
  ValidateKeys,
  IUserValidateError,
  ValidateUserArgsType
};
