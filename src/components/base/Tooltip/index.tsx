import type { ReactElement } from 'react';
import { StyledTooltipContent, StyledTooltipWrapper } from './styled';
import type { TooltipProps } from './types';
import { Text } from '@base';

const Tooltip = ({
  children,
  tooltipMessage = '툴팁메시지',
  direction = 'top',
  size = 'md',
  ...props
}: TooltipProps): ReactElement => {
  return (
    <StyledTooltipWrapper className='tooltipcontainer' {...props}>
      {children}
      <StyledTooltipContent
        className='tooltiptext'
        direction={direction}
        size={size}
      >
        <Text color={'BASIC_WHITE'} size={'xs'}>
          {tooltipMessage}
        </Text>
      </StyledTooltipContent>
    </StyledTooltipWrapper>
  );
};

export default Tooltip;
