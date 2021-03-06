import styled from '@emotion/styled';
import type { StyledToggleContainerProps } from './types';
import { COLOR } from '@constants';

const StyledToggleContainer = styled.label<StyledToggleContainerProps>`
  display: ${({ block }): string => (block ? 'block' : 'inline-block')};
  min-width: 108px;
  height: 33px;
  border-radius: 16px;
  background-color: ${({ toggled }): string =>
    toggled ? COLOR.NAVY : COLOR.LIGHT_WHITE};
  text-align: center;
  line-height: 2.2;
  cursor: pointer;
  user-select: none;
  padding: 0 20px;
`;

const StyledToggleInput = styled.input`
  display: none;
`;

export { StyledToggleContainer, StyledToggleInput };
