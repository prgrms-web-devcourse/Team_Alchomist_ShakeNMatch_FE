import type { IUserFormType } from '@models';
import type { HTMLAttributes } from 'react';

interface UserFormProps extends HTMLAttributes<HTMLFormElement> {
  type: IUserFormType;
  initialValues: { [key: string]: any };
  onSubmit?(values: { [key: string]: any }): void;
}

export type { UserFormProps };
