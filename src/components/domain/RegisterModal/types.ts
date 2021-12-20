import type { UserFormProps } from '@domain/UserForm/types';

interface RegisterModalProps
  extends Omit<
    UserFormProps,
    'type' | 'initialValues' | 'onValidatedValuesChanged'
  > {
  onSubmit?(values: { [key: string]: any }): void;
}

export type { RegisterModalProps };
