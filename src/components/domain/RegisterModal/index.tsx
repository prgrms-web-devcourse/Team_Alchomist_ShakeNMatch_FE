import { Modal } from '@base';
import {
  FormValidateIdentifier,
  SectionDividerWithTitle,
  UserForm
} from '@domain';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { IdentifierContainer } from './styled';
import type { RegisterModalProps } from './types';
import { COLOR, TEXT_SIZE, MODAL_SIZE, USERFORM_TYPES } from '@constants';

const RegisterModal = ({
  onSubmit,
  ...props
}: RegisterModalProps): ReactElement => {
  const [tasksDone, setTasksDone] = useState(0);
  return (
    <Modal
      backgroundColor={COLOR.TRANSPARENT}
      color={COLOR.IVORY}
      size={MODAL_SIZE.MD}
      visible={true}
    >
      <SectionDividerWithTitle
        ratio={[4, 3]}
        titleSize={TEXT_SIZE.md}
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
          type={USERFORM_TYPES.REGISTER}
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
