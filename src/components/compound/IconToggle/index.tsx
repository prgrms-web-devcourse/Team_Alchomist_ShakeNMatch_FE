import Icon from '@base/Icon';
import useToggle from '@hooks/useToggle';
import type { ReactElement, ChangeEventHandler } from 'react';
import { useMemo, useCallback } from 'react';
import { StyledLabel } from './styled';
import type { IconToggleProps } from './types';
import { ICON_TOGGLE_NAME } from './types';

const IconToggle = ({
  name,
  initialState = false,
  onChange
}: IconToggleProps): ReactElement => {
  const [isToggled, toggle] = useToggle(initialState);
  const iconType = useMemo(() => {
    const toggled = isToggled ? 'toggled' : 'notToggled';
    return ICON_TOGGLE_NAME[name][toggled];
  }, [name, isToggled]);

  const handleToggle = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      toggle();
      onChange?.(e);
    },
    [onChange]
  );

  return (
    <StyledLabel>
      <input
        checked={isToggled}
        style={{ display: 'none' }}
        type='checkbox'
        onChange={handleToggle}
      />
      <Icon type={iconType} />
    </StyledLabel>
  );
};

export default IconToggle;
