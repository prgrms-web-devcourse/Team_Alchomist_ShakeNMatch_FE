import type { ReactElement } from 'react';
import StyledSelect from './styled';
import type { SelectProps } from './types';

const Select = ({
  children,
  placeholder = '선택해주세요',
  value = 'default',
  ...props
}: SelectProps): ReactElement => {
  return (
    <StyledSelect value={value} {...props}>
      <option disabled value='default'>
        {placeholder}
      </option>
      {children}
    </StyledSelect>
  );
};

export default Select;
