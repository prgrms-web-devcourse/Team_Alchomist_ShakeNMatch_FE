import UserForm from '@domain/UserForm';
import type { UserFormProps } from '@domain/UserForm/types';
import type { ReactElement } from 'react';

export default {
  title: 'Component/Domain/UserForm',
  component: UserForm
};

export const Default = (args: UserFormProps): ReactElement => (
  <UserForm
    onSubmit={(e): void => {
      alert(JSON.stringify(e));
    }}
    onValidatedValuesChanged={(value): void => {
      alert(value);
    }}
    {...args}
  />
);
