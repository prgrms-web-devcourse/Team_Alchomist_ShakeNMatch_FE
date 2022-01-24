import { StyledButton } from './styled';
import { Icon } from '@base';
import type { ReactElement } from 'react';
import type { IconButtonProps } from './types';
import { BUTTON_TYPE } from '@constants';

const IconButton = ({
  type = BUTTON_TYPE.BUTTON,
  name,
  ...props
}: IconButtonProps): ReactElement => {
  return (
    <StyledButton id={props.id ? props.id : ''} type={type} {...props}>
      <Icon type={name} />
    </StyledButton>
  );
};

export default IconButton;
