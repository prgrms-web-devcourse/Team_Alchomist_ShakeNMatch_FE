import { COLOR, TEXT_SIZE, TEXT_WEIGHT } from '@constants';
import styled from '@emotion/styled';

const StyledSelect = styled.select`
  width: 200px;
  height: 30px;
  background: transparent;
  border-radius: 1px;
  font-size: ${TEXT_SIZE.xs};
  color: ${COLOR.BLACK};
  text-align: center;
  border: none;
  border-bottom: 2px solid ${COLOR.BLACK};
  cursor: pointer;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-weight: ${TEXT_WEIGHT.bold};

  &:hover,
  &:focus {
    box-shadow: 0 1px 3px -1px ${COLOR.BLACK};
    outline: none;
  }
`;

export default StyledSelect;
