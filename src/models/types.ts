import type { DOMAINS, TEXT_SIZE, TEXT_WEIGHT } from '@constants';
import type { COLOR } from '@constants/colors';
import type { THEMES } from '@constants/themes';
import type { USER_VALIDATE_ERROR_MESSAGES } from '@constants/user';
import type { AXIOS_REQUEST_TYPE } from '@constants/axios';

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
  id: number;
  rating: number;
  description: string;
  url: string;
  userId: number;
  nickname: string;
  cocktailId: 1;
  cocktailName: string;
}

interface IReviewPostResponse {
  reviweId: number;
  rating: number;
  description: string;
  url: string;
  userId: number;
  nickname: string;
  cocktailId: 1;
  cocktailName: string;
}

interface ICocktailSimple {
  id: number;
  name: string;
}

interface ICocktail {
  id: number;
  name: string;
  themes: ITheme[];
  reviews: IReview[];
  recipe: string;
  type: string;
  likes: number;
  totalRating: number;
  ingredients: string[];
  volumes: IIngredient[];
}

interface IIngredient {
  [x: string]: any;
  id: number;
  name: string;
  type: string;
  measure: string;
  cocktails?: ICocktail[];
  alcohol: boolean;
}

interface IUser {
  id: number;
  nickname: string;
  isMan: boolean;
  age: number;
  mbti: IUserMbti;
  ingredients: IIngredient[];
}

interface IUserForm {
  nickname: string | null;
  gender: IUserGender | null;
  age: number | null;
  mbti: IUserMbti | null;
}

type IDomain = typeof DOMAINS[keyof typeof DOMAINS];

type RequestTypeKeys = keyof typeof AXIOS_REQUEST_TYPE;
type IRequestType = typeof AXIOS_REQUEST_TYPE[RequestTypeKeys];
interface IApiResponse<T> {
  data: T;
}

interface IApiResponse<T> {
  data: T;
}

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
  IUserForm,
  IUserGender,
  IUserMbti,
  ValidateFnType,
  ValidateKeys,
  IUserValidateError,
  ValidateUserArgsType,
  ITheme,
  ICocktailSimple,
  ICocktail,
  IUser,
  IIngredient,
  IReview,
  IReviewPostResponse,
  IDomain,
  IRequestType,
  IApiResponse
};
