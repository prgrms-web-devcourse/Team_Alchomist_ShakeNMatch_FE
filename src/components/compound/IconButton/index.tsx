import { StyledButton } from './styled';
import Icon from '@base/Icon';
import type { ReactElement } from 'react';
import type { IconButtonProps } from './types';

const IconButton = ({
  type = 'button',
  name,
  ...props
}: IconButtonProps): ReactElement => {
  return (
    <StyledButton type={type} {...props}>
      <Icon type={name} />
    </StyledButton>
  );
};

export default IconButton;
