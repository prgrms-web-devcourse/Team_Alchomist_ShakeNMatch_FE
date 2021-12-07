import { Text } from '@base';
import Input from '@base/Input';
import type { InputProps } from '@base/Input/types';
import Select from '@base/Select';
import type { SelectProps } from '@base/Select/types';
import { MBTI, USER_FORM_LABEL_TEXT } from '@constants';
import type { ReactElement } from 'react';
import { StyledErrorContainer, StyledLabel } from './styled';
import type { UserInputProps } from './types';

const UserInput = ({
  inputType,
  formType,
  errorMessage,
  value = '',
  ...props
}: UserInputProps & (InputProps | SelectProps)): ReactElement => {
  let inputEl;

  switch (inputType) {
    case 'age':
      inputEl = (
        <Input
          inputType='number'
          name='age'
          value={value}
          {...(props as InputProps)}
        />
      );
      break;
    case 'nickname':
      inputEl = (
        <Input
          inputType='text'
          name='nickname'
          value={value}
          {...(props as InputProps)}
        />
      );
      break;
    case 'gender':
      inputEl = (
        <Select name='gender' value={value} {...(props as SelectProps)}>
          <option>남자</option>
          <option>여자</option>
        </Select>
      );
      break;
    case 'mbti':
      inputEl = (
        <Select name='mbti' value={value} {...(props as SelectProps)}>
          {MBTI.map((mbti) => (
            <option key={mbti} value={mbti.toLowerCase()}>
              {mbti}
            </option>
          ))}
        </Select>
      );
  }

  return (
    <StyledLabel>
      <Text dangerously size='xs'>
        {USER_FORM_LABEL_TEXT[formType][inputType]}
      </Text>
      {inputEl}
      <StyledErrorContainer>
        <Text color='STRONG_PINK' size='xs'>
          {errorMessage}
        </Text>
      </StyledErrorContainer>
    </StyledLabel>
  );
};

export default UserInput;
