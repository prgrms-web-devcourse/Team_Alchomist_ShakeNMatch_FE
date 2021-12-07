import useToggle from '@hooks/useToggle';
import type { ChangeEvent, ReactElement } from 'react';
import { StyledToggleContainer, StyledToggleInput } from './styled';
import { TEXT_TOGGLE } from './types';
import type { TextToggleProps } from './types';
import Text from '@base/Text';

const TextToggle = ({
  children,
  block = false,
  name,
  initialState = false,
  toggleType = 'ingredient',
  onChange
}: TextToggleProps): ReactElement => {
  const [isToggled, toggle] = useToggle(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    toggle();
    onChange(e.target.name);
  };

  return (
    <StyledToggleContainer block={block} toggled={isToggled}>
      <StyledToggleInput
        checked={isToggled}
        name={name}
        type='checkbox'
        onChange={handleChange}
      />
      <Text
        color={isToggled ? 'BASIC_WHITE' : 'BLACK'}
        {...TEXT_TOGGLE[toggleType].textProps}
      >
        {children}
      </Text>
    </StyledToggleContainer>
  );
};

export default TextToggle;
