import type { IUserFormType } from '@models';
import type { HTMLAttributes } from 'react';

interface UserFormProps extends HTMLAttributes<HTMLFormElement> {
  type: IUserFormType;
  initialValues: { [key: string]: any };
  onSubmit?(values: { [key: string]: any }): void;
  onValidatedValuesChanged?(value: number): void;
}

export type { UserFormProps };
