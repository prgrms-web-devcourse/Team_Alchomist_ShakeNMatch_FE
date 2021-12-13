import SectionDividerWithTitle from '@domain/SectionDividerWithTitle';
import type { ReactElement } from 'react';
import UserForm from '@domain/UserForm';
import FormValidateIdentifier from '@domain/FormValidateIdentifier';
import type { SectionDividerWithTitleProps } from '@domain/SectionDividerWithTitle/types';

export default {
  title: 'Component/Domain/SectionDividerWithTitle',
  component: SectionDividerWithTitle,
  argTypes: {
    gap: {
      control: 'number'
    },
    showDivider: {
      control: 'boolean'
    }
  }
};

export const Default = (args: SectionDividerWithTitleProps): ReactElement => (
  <SectionDividerWithTitle
    titleText={args.titleText || '처음 오시는 분이군요!'}
    {...args}
  >
    <div>
      <FormValidateIdentifier
        height='200px'
        tasksDone={2}
        totalTasksToDone={4}
        width='100px'
      />
    </div>
    <div>
      <UserForm
        initialValues={{ nickname: null, gender: null, age: null, mbti: null }}
        type='Register'
      />
    </div>
  </SectionDividerWithTitle>
);
