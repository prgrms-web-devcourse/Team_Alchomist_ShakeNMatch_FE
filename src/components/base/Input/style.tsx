import styled from '@emotion/styled';
import type { InputProps } from './types';

import { TEXT_SIZE } from '@utils/constants';

const StyledInput = styled.input<Required<Pick<InputProps, 'fontSize'>>>`
  font-size: ${({ fontSize }): string => TEXT_SIZE[fontSize]};
  border-radius: 1rem;
  width: 393px;
  height: 52px;
  background: #eae4e4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
`;

export { StyledInput };
