import type {
  IMbti,
  TEXT_SIZE,
  TEXT_WEIGHT,
  USER_VALIDATE_ERROR_MESSAGES
} from '@constants';
import type { COLOR } from '@constants/colors';

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

// validator.ts
type ValidateFnType = (e: string) => boolean;
type ValidateKeys = IUserInputType;

type IUserValidateError = Partial<typeof USER_VALIDATE_ERROR_MESSAGES>;
interface ValidateUserArgsType {
  nickname: string;
  gender: string;
  age: string;
  mbti: IMbti;
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
  ValidateFnType,
  ValidateKeys,
  IUserValidateError,
  ValidateUserArgsType
};
