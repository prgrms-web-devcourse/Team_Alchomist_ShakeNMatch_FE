import { COLOR, TEXT_SIZE } from '@constants';
import styled from '@emotion/styled';

const StyledSelect = styled.select`
  width: 393px;
  height: 52px;
  background: ${COLOR.IVORY};
  border-radius: 7px;
  font-size: ${TEXT_SIZE.md};
  color: ${COLOR.BLACK};
  text-align: center;
  outline: ${COLOR.BLUE};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.95);
  }
`;

export default StyledSelect;
