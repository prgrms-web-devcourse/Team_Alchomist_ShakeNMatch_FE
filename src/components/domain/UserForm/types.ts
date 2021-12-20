import type { IUserForm, IUserFormType } from '@models';
import type { HTMLAttributes } from 'react';

interface UserFormProps extends HTMLAttributes<HTMLFormElement> {
  type: IUserFormType;
  initialValues?: Partial<IUserForm>;
  onSubmit?(values: { [key: string]: any }): void;
  onValidatedValuesChanged?(value: number): void;
}

export type { UserFormProps };
