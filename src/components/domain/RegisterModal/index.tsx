import { Divider, Modal, SectionDivider, Text } from '@base';
import FormValidateIdentifier from '@domain/FormValidateIdentifier';
import UserForm from '@domain/UserForm';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { IdentifierContainer, InnerModalContainer } from './styled';
import type { RegisterModalProps } from './types';

const RegisterModal = ({
  onSubmit,
  ...props
}: RegisterModalProps): ReactElement => {
  const [tasksDone, setTasksDone] = useState(0);
  return (
    <Modal
      backgroundColor='DARK_GRAY'
      color='LIGHT_WHITE'
      size='md'
      visible={true}
    >
      <InnerModalContainer>
        <div>
          <Text size='md'>처음 뵙는 분이네요!</Text>
          <Divider color='BLACK' gap={1} />
        </div>
        <SectionDivider height='100%' ratio={[3, 4]} width='100%'>
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
        </SectionDivider>
      </InnerModalContainer>
    </Modal>
  );
};

export default RegisterModal;
