import { Modal } from '@base';
import FormValidateIdentifier from '@domain/FormValidateIdentifier';
import SectionDividerWithTitle from '@domain/SectionDividerWithTitle';
import UserForm from '@domain/UserForm';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { IdentifierContainer } from './styled';
import type { RegisterModalProps } from './types';

const RegisterModal = ({
  onSubmit,
  ...props
}: RegisterModalProps): ReactElement => {
  const [tasksDone, setTasksDone] = useState(0);
  return (
    <Modal backgroundColor='TRANSPARENT' color='IVORY' size='md' visible={true}>
      <SectionDividerWithTitle
        ratio={[4, 3]}
        titleSize='md'
        titleText='처음 뵙는 분이네요!'
      >
        <IdentifierContainer>
          <FormValidateIdentifier
            height='200px'
            tasksDone={tasksDone}
            totalTasksToDone={4}
            width='100px'
          />
        </IdentifierContainer>
        <UserForm
          initialValues={{
            nickname: null,
            gender: null,
            age: null,
            mbti: null
          }}
          type='Register'
          onSubmit={onSubmit}
          onValidatedValuesChanged={(value): void => {
            setTasksDone(value);
          }}
          {...props}
        />
      </SectionDividerWithTitle>
    </Modal>
  );
};

export default RegisterModal;
