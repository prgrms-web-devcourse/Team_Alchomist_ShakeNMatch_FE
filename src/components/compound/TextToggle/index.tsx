import useToggle from '@hooks/useToggle';
import type { ReactElement } from 'react';
import { StyledToggleContainer, StyledText, StyledToggleInput } from './styled';
import { TEXT_TOGGLE } from './types';
import type { TextToggleProps } from './types';

const TextToggle = ({
  children,
  block = false,
  name,
  on = false,
  toggleType = 'ingredient',
  onChange
}: TextToggleProps): ReactElement => {
  const [checked, toggle] = useToggle(on);

  const handleChange = (): void => {
    toggle();
    onChange();
  };

  return (
    <StyledToggleContainer block={block} toggled={checked}>
      <StyledToggleInput
        checked={checked}
        name={name}
        type='checkbox'
        onChange={handleChange}
      />

      <StyledText toggled={checked} {...TEXT_TOGGLE[toggleType].textProps}>
        {children}
      </StyledText>
    </StyledToggleContainer>
  );
};

export default TextToggle;
