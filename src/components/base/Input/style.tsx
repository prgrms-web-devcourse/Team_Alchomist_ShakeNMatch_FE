import styled from '@emotion/styled';
import type { InputProps } from './types';

import { COLOR, TEXT_WEIGHT } from '@utils/constants';

const StyledInput = styled.input<
  Required<Pick<InputProps, 'fontSize' | 'alignCenter'>>
>`
  font-size: ${({ fontSize }): string => fontSize};
  width: 200px;
  height: 30px;
  background: transparent;
  border-radius: 1px;
  border: none;
  border-bottom: 2px solid ${COLOR.BLACK};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-weight: ${TEXT_WEIGHT.bold};
  text-align: ${({ alignCenter }): string =>
    alignCenter ? 'center' : 'start'};

  &:focus,
  :hover {
    box-shadow: 0 1px 3px -1px ${COLOR.BLACK};
    outline: none;
  }
`;

export { StyledInput };
