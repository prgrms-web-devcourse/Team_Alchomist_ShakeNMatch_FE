import { Text, Input, Select } from '@base';
import type { InputProps } from '@base/Input/types';
import type { SelectProps } from '@base/Select/types';
import {
  USER_FORM_LABEL_TEXT,
  USER_GENDER,
  USER_MBTI,
  INPUT_TYPE,
  AXIOS_REQUEST_TYPE,
  COLOR,
  TEXT_SIZE,
  BUTTON_TYPE,
  USER_INPUT_TYPE
} from '@constants';
import { useAuthorization } from '@contexts';
import useAxios from '@hooks/useAxios';
import type { IApiResponse } from '@models';
import type { ReactElement } from 'react';
import { useCallback, useState, useEffect } from 'react';
import {
  StyledCheckButton,
  StyledErrorContainer,
  StyledLabel,
  StyledNicknameInputContainer
} from './styled';
import type { IcheckNicknameAPIState, UserInputProps } from './types';

const RADIX_TEN = 10;

const UserInput = ({
  inputType,
  formType,
  errorMessage,
  value,
  initialNicknameValidated,
  onNicknameChecked,
  ...props
}: UserInputProps & (InputProps | SelectProps)): ReactElement => {
  let inputEl;
  const { user } = useAuthorization();
  const [checkNicknameAPIState, setCheckNicknameAPIState] =
    useState<IcheckNicknameAPIState>({
      value: initialNicknameValidated || null,
      isLoading: false,
      error: null
    });
  const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);

  const checkUserNickname = (
    nickname: string
  ): Promise<IApiResponse<{ can: boolean }>> => {
    return request.get(`/user/nickname/${nickname}`);
  };

  const getVerifyNickname = async (nickname: string): Promise<void> => {
    try {
      setCheckNicknameAPIState((prevState) => ({
        ...prevState,
        isLoading: true
      }));
      const { data } = await checkUserNickname(nickname);
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
    if (inputType !== 'nickname') return;
    // 기존의 유저명이라면
    if (value === user?.nickname) {
      onNicknameChecked?.(true);
      setCheckNicknameAPIState({
        value: true,
        isLoading: false,
        error: null
      });
      return;
    }

    onNicknameChecked?.(false);
    setCheckNicknameAPIState({
      value: null,
      isLoading: false,
      error: null
    });
  }, [value, user]);

  const handleCheckNickname = useCallback(() => {
    value && getVerifyNickname(value.toString(RADIX_TEN));
  }, [value, getVerifyNickname]);

  switch (inputType) {
    case USER_INPUT_TYPE.AGE:
      inputEl = (
        <Input
          inputType={INPUT_TYPE.NUMBER}
          name={USER_INPUT_TYPE.AGE}
          value={value || ''}
          {...(props as InputProps)}
        />
      );
      break;
    case USER_INPUT_TYPE.NICKNAME:
      inputEl = (
        <StyledNicknameInputContainer>
          <Input
            inputType={INPUT_TYPE.TEXT}
            name={USER_INPUT_TYPE.NICKNAME}
            value={value || ''}
            {...(props as InputProps)}
          />
          {value && !errorMessage && (
            <StyledCheckButton
              color={checkNicknameAPIState.value ? 'GREEN' : 'MIDDLE_PINK'}
              disabled={
                checkNicknameAPIState.isLoading || !!checkNicknameAPIState.value
              }
              type={BUTTON_TYPE.BUTTON}
              onClick={handleCheckNickname}
            >
              <Text bold color={COLOR.BASIC_WHITE} size={TEXT_SIZE.xxxs}>
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
    case USER_INPUT_TYPE.GENDER:
      inputEl = (
        <Select
          name={USER_INPUT_TYPE.GENDER}
          value={value || ''}
          {...(props as SelectProps)}
        >
          {USER_GENDER.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </Select>
      );
      break;
    case USER_INPUT_TYPE.MBTI:
      inputEl = (
        <Select
          name={USER_INPUT_TYPE.MBTI}
          value={value || ''}
          {...(props as SelectProps)}
        >
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
      <Text color={COLOR.NAVY} dangerously size={TEXT_SIZE.xxs}>
        {USER_FORM_LABEL_TEXT[formType][inputType]}
      </Text>
      {inputEl}
      <StyledErrorContainer>
        <Text color={COLOR.STRONG_PINK} size={TEXT_SIZE.xxxs}>
          {checkNicknameAPIState.error || errorMessage}
        </Text>
      </StyledErrorContainer>
    </StyledLabel>
  );
};

export default UserInput;
