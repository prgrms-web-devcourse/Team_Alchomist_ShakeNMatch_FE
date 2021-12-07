import styled from '@emotion/styled';
import type { InputProps } from './types';
import { COLOR, TEXT_SIZE } from '@utils/constants';

const StyledInput = styled.input<Required<Pick<InputProps, 'fontSize'>>>`
  font-size: ${({ fontSize }): string => TEXT_SIZE[fontSize]};
  width: 393px;
  height: 52px;
  background: ${COLOR.IVORY};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  border: none;
`;

export { StyledInput };
