import {
  MAX_NICKNAME_LENGTH,
  MIN_AGE,
  MIN_NICKNAME_LENGTH,
  USER_VALIDATE_ERROR_MESSAGES
} from '@constants';
import type {
  IUserValidateError,
  ValidateFnType,
  ValidateKeys,
  ValidateUserArgsType
} from '@models';

const validateNickName: ValidateFnType = (values) =>
  values.length >= MIN_NICKNAME_LENGTH && values.length <= MAX_NICKNAME_LENGTH;
const validateAge: ValidateFnType = (values) => parseInt(values, 10) >= MIN_AGE;

const validateFunctions = {
  nickname: validateNickName,
  age: validateAge,
  gender: null,
  mbti: null
} as const;

const validateUser = (
  values: ValidateUserArgsType
): Partial<IUserValidateError> | void => {
  const errors: IUserValidateError = {};
  if (!values) return errors;
  const validateKeys = Object.keys(values) as ValidateKeys[];
  validateKeys.forEach((key) => {
    if (values[key]) {
      const isValidated = validateFunctions[key]?.(values[key]);
      if (isValidated === false) {
        errors[key] = USER_VALIDATE_ERROR_MESSAGES[key];
      }
    }
  });

  return errors;
};

export { validateUser, validateFunctions };
