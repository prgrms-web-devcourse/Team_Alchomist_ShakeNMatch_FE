import styled from '@emotion/styled';
import type { InputProps } from './types';

import { COLOR, TEXT_SIZE } from '@utils/constants';

const StyledInput = styled.input<Required<Pick<InputProps, 'fontSize'>>>`
  font-size: ${({ fontSize }): string => TEXT_SIZE[fontSize]};
  width: 200px;
  height: 30px;
  background: ${COLOR.BASIC_WHITE};
  box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  border: none;

  &:focus {
    outline: 1px solid ${COLOR.LIGHT_PINK};
  }
`;

export { StyledInput };
