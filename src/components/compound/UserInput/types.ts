import type { IUserFormType, IUserInputType } from '@models';

interface UserInputProps {
  inputType: IUserInputType;
  formType: IUserFormType;
  errorMessage?: string;
  onNicknameChecked?(value: boolean): void;
}

export type { UserInputProps };
