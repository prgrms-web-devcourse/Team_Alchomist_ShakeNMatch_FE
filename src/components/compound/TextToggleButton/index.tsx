import type { ReactElement } from 'react';
import { useState } from 'react';
import Text from '@base/Text';

import styled from '@emotion/styled';

const StyledToggle = styled.div<any>`
  width: 108px;
  height: 33px;
  border-radius: 16px;
`;

const TEXT_TOGGLE = {
  ingredient: {
    style: {
      width: '108px',
      height: '33px',
      'border-radius': '16px'
    },
    textProps: {
      size: 'sm',
      color: 'BLACK'
    }
  }
} as const;
type TextToggleKeys = keyof typeof TEXT_TOGGLE;

interface TextToggleButtonProps {
  children: string;
  toggleType: TextToggleKeys;
}

const TextToggleButton = ({
  children,
  toggleType
}: TextToggleButtonProps): ReactElement => {
  const [toggled, setToggled] = useState(false);

  const handleToggle = (): void => {
    setToggled(!toggled);
  };

  return (
    <StyledToggle
      style={{ ...TEXT_TOGGLE[toggleType].style }}
      toggled={toggled}
      onClick={handleToggle}
    >
      <Text {...TEXT_TOGGLE[toggleType].textProps}>{children}</Text>
    </StyledToggle>
  );
};

export default TextToggleButton;
export type { TextToggleButtonProps };
