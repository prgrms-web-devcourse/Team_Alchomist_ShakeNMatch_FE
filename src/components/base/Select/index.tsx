import type { ReactElement } from 'react';
import StyledSelect from './styled';
import type { SelectProps } from './types';

const Select = ({
  children,
  placeholder = '선택해주세요',
  defaultValue = 'INFP',
  ...props
}: SelectProps): ReactElement => {
  return (
    <StyledSelect defaultValue={defaultValue} {...props}>
      <option disabled>{placeholder}</option>
      {children}
    </StyledSelect>
  );
};

export default Select;
