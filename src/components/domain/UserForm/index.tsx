import Divider from '@base/Divider';
import TextButton from '@compound/TextButton';
import useForm from '@hooks/useForm';
import type { ReactElement } from 'react';
import { StyledForm } from './styled';
import type { UserFormProps } from './types';
import UserInput from '../../compound/UserInput';
import { validateUser } from '@utils/lib/validator';
import { Text } from '@base';

const UserForm = ({
  type = 'Register',
  initialValues,
  onSubmit,
  ...props
}: UserFormProps): ReactElement => {
  const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues,
    validateOnChange: true,
    onSubmit,
    validateFn: validateUser
  });

  if (isLoading) {
    return <Text>isLoading</Text>;
  }

  console.log(values, errors);

  return (
    <StyledForm onSubmit={handleSubmit} {...props}>
      <UserInput
        errorMessage={errors.nickname}
        formType={type}
        inputType='nickname'
        value={values.nickname}
        onChange={handleChange}
      />
      <Divider color='LIGHT_GRAY' />
      <UserInput
        errorMessage={errors.gender}
        formType={type}
        inputType='gender'
        value={values.gender}
        onChange={handleChange}
      />
      <Divider color='LIGHT_GRAY' />

      <UserInput
        errorMessage={errors.age}
        formType={type}
        inputType='age'
        value={values.age}
        onChange={handleChange}
      />
      <Divider color='LIGHT_GRAY' />

      <UserInput
        errorMessage={errors.mbti}
        formType={type}
        inputType='mbti'
        value={values.mbti}
        onChange={handleChange}
      />
      <Divider color='BASIC_WHITE' />
      <TextButton buttonType='LONG_PINK' type='submit'>
        {type === 'Register' ? '회원가입' : '수정하기'}
      </TextButton>
    </StyledForm>
  );
};

export default UserForm;