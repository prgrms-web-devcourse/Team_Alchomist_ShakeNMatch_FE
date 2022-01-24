import { useToggle } from '@hooks';
import type { ChangeEvent, ReactElement } from 'react';
import { StyledToggleContainer, StyledToggleInput } from './styled';
import { TEXT_TOGGLE } from './types';
import type { TextToggleProps } from './types';
import { Text } from '@base';
import { COLOR, INPUT_TYPE, TOGGLE_TYPES } from '@constants';

const TextToggle = ({
  children,
  block = false,
  id,
  initialState = false,
  toggleType = TOGGLE_TYPES.INGREDIENT,
  onChange
}: TextToggleProps): ReactElement => {
  const [isToggled, toggle] = useToggle(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    toggle();
    onChange?.({ id: parseInt(e.target.id, 10), toggled: !isToggled });
  };

  return (
    <StyledToggleContainer block={block} toggled={isToggled}>
      <StyledToggleInput
        checked={isToggled}
        id={id.toString()}
        type={INPUT_TYPE.CHECKBOX}
        onChange={handleChange}
      />
      <Text
        color={isToggled ? COLOR.BASIC_WHITE : COLOR.BLACK}
        {...TEXT_TOGGLE[toggleType].textProps}
      >
        {children}
      </Text>
    </StyledToggleContainer>
  );
};

export default TextToggle;
