import type { DOMAINS, TEXT_SIZE, TEXT_WEIGHT } from '@constants';
import type { COLOR } from '@constants/colors';
import type { THEMES } from '@constants/themes';
import type { USER_VALIDATE_ERROR_MESSAGES } from '@constants/user';

type ColorKeys = keyof typeof COLOR;
type ColorType = typeof COLOR[ColorKeys];

type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type TextSizeKeys = keyof typeof TEXT_SIZE;
type ITextSize = typeof TEXT_SIZE[TextSizeKeys];
type TextWeightKeys = keyof typeof TEXT_WEIGHT;
type ITextWeight = typeof TEXT_WEIGHT[TextWeightKeys];

type ITHEME = keyof typeof THEMES;
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

// api Data Entity
interface ITheme {
  id: string;
  mainCategory: string;
  subCategory: string;
}

interface IReview {
  id: string;
  rating: number;
  description: string;
  imageUrl: string;
  reviewer: IUser;
  cocktails: ICocktail;
}

interface ICocktail {
  id: string;
  name: string;
  themes: ITheme[];
  reviews: IReview[];
  recipe: string;
  type: string;
  likes: number;
  totalRating: number;
  ingredients: IIngredient[];
  volume: string[];
}

interface IIngredient {
  id: string;
  name: string;
  type: string;
  isAlcohol: boolean;
  measure: string;
}

interface IUser {
  id: string;
  nickName: string;
  isMan: boolean;
  age: number;
  mbti: IUserMbti;
  myIngredients?: IIngredient[];
  favorites?: Pick<ICocktail, 'id'>[];
}

type IDomain = typeof DOMAINS[keyof typeof DOMAINS];

export type {
  ColorKeys,
  ColorType,
  SizeType,
  ITextSize,
  ITextWeight,
  TextSizeKeys,
  TextWeightKeys,
  ITHEME,
  IUserInputType,
  IUserFormType,
  IUserGender,
  IUserMbti,
  ValidateFnType,
  ValidateKeys,
  IUserValidateError,
  ValidateUserArgsType,
  ITheme,
  ICocktail,
  IUser,
  IIngredient,
  IReview,
  IDomain
};
