import {
  MAX_NICKNAME_LENGTH,
  MIN_AGE,
  MIN_NICKNAME_LENGTH,
  USER_GENDER,
  USER_MBTI,
  USER_VALIDATE_ERROR_MESSAGES
} from '@constants';
import type {
  IUserValidateError,
  ValidateFnType,
  ValidateKeys,
  ValidateUserArgsType
} from '@models';

const validateNickName: ValidateFnType = (value) =>
  value.length >= MIN_NICKNAME_LENGTH && value.length <= MAX_NICKNAME_LENGTH;
const validateAge: ValidateFnType = (value) => parseInt(value, 10) >= MIN_AGE;
const validateGender: ValidateFnType = (value) =>
  value.length > 0 && USER_GENDER.some((gender) => gender === value);
const validateMBTI: ValidateFnType = (value) =>
  value.length > 0 && USER_MBTI.some((mbti) => mbti === value);

const validateUserFunctions = {
  nickname: validateNickName,
  age: validateAge,
  gender: validateGender,
  mbti: validateMBTI
} as const;

const validateUser = (
  values: ValidateUserArgsType
): Partial<IUserValidateError> | void => {
  const errors: IUserValidateError = {};

  if (!values) return errors;

  const validateKeys = Object.keys(values) as ValidateKeys[];
  validateKeys.forEach((key) => {
    if (values[key]) {
      const isValidated = validateUserFunctions[key](values[key]);
      if (isValidated === false) {
        // validate 실패시
        errors[key] = USER_VALIDATE_ERROR_MESSAGES[key];
      }
    } else {
      // 아무런 입력값이 없을경우
      errors[key] = USER_VALIDATE_ERROR_MESSAGES[key];
    }
  });

  return errors;
};

export { validateUser, validateUserFunctions };
