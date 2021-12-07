import { COLOR, TEXT_SIZE } from '@constants';
import styled from '@emotion/styled';

const StyledSelect = styled.select`
  width: 200px;
  height: 30px;
  background: ${COLOR.BASIC_WHITE};
  box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  font-size: ${TEXT_SIZE.xs};
  color: ${COLOR.BLACK};
  text-align: center;
  border: none;
  cursor: pointer;

  &:hover {
    outline: 1px solid ${COLOR.LIGHT_PINK};
  }
`;

export default StyledSelect;
