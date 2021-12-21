import type { IUserFormType, IUserInputType } from '@models';

interface UserInputProps {
  inputType: IUserInputType;
  formType: IUserFormType;
  errorMessage?: string;
  initialNicknameValidated?: boolean;
  onNicknameChecked?(value: boolean): void;
}

interface IcheckNicknameAPIState {
  value: boolean | null;
  isLoading: boolean;
  error: string | null;
}

export type { UserInputProps, IcheckNicknameAPIState };
