import { COLOR } from '@constants';
import styled from '@emotion/styled';
import type { ColorKeys } from '@models';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5px;

  & input[name='age'],
  input[name='nickname'] {
    text-align: center;
  }
`;

const StyledErrorContainer = styled.div`
  height: 15px;
`;

const StyledNicknameInputContainer = styled.div`
  position: relative;
`;

const StyledCheckButton = styled.button<{ color: ColorKeys }>`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  padding: 5px 3px;
  border: none;
  background-color: ${({ color }): string => COLOR[color]};
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 0.2s ease-in-out;

  &:hover:not(:disabled) {
    filter: brightness(0.9);
  }

  &:active:not(:disabled) {
    transform: translate(0, -40%);
  }
  &:disabled {
    cursor: default;
  }
`;

export {
  StyledLabel,
  StyledErrorContainer,
  StyledNicknameInputContainer,
  StyledCheckButton
};
