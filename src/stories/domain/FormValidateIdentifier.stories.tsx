import FormValidateIdentifier from '@components/domain/FormValidateIdentifier';
import type { FormValidateIdentifierProps } from '@components/domain/FormValidateIdentifier/types';
import type { ReactElement } from 'react';

export default {
  title: 'Component/Domain/FormValidateIdentifier',
  component: FormValidateIdentifier
};

export const Default = (props: FormValidateIdentifierProps): ReactElement => (
  <div style={{ marginLeft: 20, marginTop: 30 }}>
    <FormValidateIdentifier {...props} />
  </div>
);
