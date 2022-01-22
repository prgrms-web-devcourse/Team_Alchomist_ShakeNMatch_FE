import { Icon } from '@base';
import { useToggle } from '@hooks';
import type { ReactElement, ChangeEventHandler } from 'react';
import { useMemo, useCallback } from 'react';
import { StyledLabel } from './styled';
import type { IconToggleProps } from './types';
import { ICON_TOGGLE_NAME } from './types';
import { INPUT_TYPE } from '@constants';

const IconToggle = ({
  name,
  initialState = false,
  onChange
}: IconToggleProps): ReactElement => {
  const [isToggled, toggle] = useToggle(initialState);
  const iconType = useMemo(() => {
    const toggledState = isToggled ? 'toggled' : 'notToggled';
    return ICON_TOGGLE_NAME[name][toggledState];
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
        type={INPUT_TYPE.CHECKBOX}
        onChange={handleToggle}
      />
      <Icon type={iconType} />
    </StyledLabel>
  );
};

export default IconToggle;
