import styled from '@emotion/styled';
import Text from '@base/Text';
import type { StyledToggleContainerProps, StyledTextProps } from './types';
import { COLOR } from '@constants';

const StyledToggleContainer = styled.label<StyledToggleContainerProps>`
  display: ${({ block }): string => (block ? 'block' : 'inline-block')};
  width: 108px;
  height: 33px;
  border-radius: 16px;
  background-color: ${({ toggled }): string =>
    toggled ? COLOR.NAVY : COLOR.BASIC_WHITE};
  text-align: center;
  line-height: 2.2;
  cursor: pointer;
  user-select: none;
`;

const StyledText = styled(Text)<StyledTextProps>`
  color: ${({ toggled }): string => (toggled ? 'white' : 'black')};
`;

const StyledToggleInput = styled.input`
  display: none;
`;

export { StyledToggleContainer, StyledText, StyledToggleInput };
