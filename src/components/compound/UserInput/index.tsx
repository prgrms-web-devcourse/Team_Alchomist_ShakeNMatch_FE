import { request } from '@apis/config';
import { Text } from '@base';
import Input from '@base/Input';
import type { InputProps } from '@base/Input/types';
import Select from '@base/Select';
import type { SelectProps } from '@base/Select/types';
import { USER_FORM_LABEL_TEXT, USER_GENDER, USER_MBTI } from '@constants';
import type { ReactElement } from 'react';
import { useCallback, useState, useEffect } from 'react';
import {
  StyledCheckButton,
  StyledErrorContainer,
  StyledLabel,
  StyledNicknameInputContainer
} from './styled';
import type { UserInputProps } from './types';

interface IcheckNicknameAPIState {
  value: boolean | null;
  isLoading: boolean;
  error: string | null;
}

const RADIX_TEN = 10;

const UserInput = ({
  inputType,
  formType,
  errorMessage,
  value,
  onNicknameChecked,
  ...props
}: UserInputProps & (InputProps | SelectProps)): ReactElement => {
  let inputEl;

  const [checkNicknameAPIState, setCheckNicknameAPIState] =
    useState<IcheckNicknameAPIState>({
      value: null,
      isLoading: false,
      error: null
    });

  const getVerifyNickname = async (nickname: string): Promise<void> => {
    try {
      setCheckNicknameAPIState((prevState) => ({
        ...prevState,
        isLoading: true
      }));
      const { data } = await request.get<any, { data: { can: boolean } }>(
        `/user/nickname/${nickname}`
      );
      if (data.can) {
        onNicknameChecked?.(true);
        setCheckNicknameAPIState({
          value: true,
          isLoading: false,
          error: null
        });
      } else {
        onNicknameChecked?.(false);
        setCheckNicknameAPIState({
          value: false,
          isLoading: false,
          error: '사용중인 이름입니다'
        });
      }
    } catch (e) {
      console.error(e);
      setCheckNicknameAPIState((prevValue) => ({
        ...prevValue,
        isLoading: false,
        error: '알수없는 에러입니다. 잠시 후에 다시 시도해주세요.'
      }));
    }
  };

  // value 바뀔시 중복검사 상태 초기화
  useEffect(() => {
    onNicknameChecked?.(false);
    setCheckNicknameAPIState({
      value: null,
      isLoading: false,
      error: null
    });
  }, [value]);

  const handleCheckNickname = useCallback(() => {
    value && getVerifyNickname(value.toString(RADIX_TEN));
  }, [value, getVerifyNickname]);

  switch (inputType) {
    case 'age':
      inputEl = (
        <Input
          inputType='number'
          name='age'
          value={value || ''}
          {...(props as InputProps)}
        />
      );
      break;
    case 'nickname':
      inputEl = (
        <StyledNicknameInputContainer>
          <Input
            inputType='text'
            name='nickname'
            value={value || ''}
            {...(props as InputProps)}
          />
          {value && !errorMessage && (
            <StyledCheckButton
              color={checkNicknameAPIState.value ? 'GREEN' : 'MIDDLE_PINK'}
              disabled={
                checkNicknameAPIState.isLoading || !!checkNicknameAPIState.value
              }
              type='button'
              onClick={handleCheckNickname}
            >
              <Text bold color='BASIC_WHITE' size='xxxs'>
                {checkNicknameAPIState.isLoading
                  ? '체크 중...'
                  : checkNicknameAPIState.value
                  ? '사용 가능'
                  : '중복 검사'}
              </Text>
            </StyledCheckButton>
          )}
        </StyledNicknameInputContainer>
      );
      break;
    case 'gender':
      inputEl = (
        <Select name='gender' value={value || ''} {...(props as SelectProps)}>
          {USER_GENDER.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </Select>
      );
      break;
    case 'mbti':
      inputEl = (
        <Select name='mbti' value={value || ''} {...(props as SelectProps)}>
          {USER_MBTI.map((mbti) => (
            <option key={mbti} value={mbti}>
              {mbti}
            </option>
          ))}
        </Select>
      );
  }

  return (
    <StyledLabel>
      <Text color='NAVY' dangerously size='xxs'>
        {USER_FORM_LABEL_TEXT[formType][inputType]}
      </Text>
      {inputEl}
      <StyledErrorContainer>
        <Text color='STRONG_PINK' size='xxxs'>
          {checkNicknameAPIState.error || errorMessage}
        </Text>
      </StyledErrorContainer>
    </StyledLabel>
  );
};

export default UserInput;
