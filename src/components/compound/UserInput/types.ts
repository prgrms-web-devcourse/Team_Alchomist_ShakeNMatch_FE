import type { IUserFormType, IUserInputType } from '@models';

interface UserInputProps {
  inputType: IUserInputType;
  formType: IUserFormType;
  errorMessage?: string;
}

export type { UserInputProps };
