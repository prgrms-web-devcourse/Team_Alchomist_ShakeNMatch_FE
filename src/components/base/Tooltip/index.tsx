import type { ReactElement } from 'react';
import { StyledTooltipContent, StyledTooltipWrapper } from './styled';
import type { TooltipProps } from './types';

const Tooltip = ({
  children,
  message,
  fontSize = '8px',
  size = 'md',
  direction = 'top',
  ...props
}: TooltipProps): ReactElement => {
  return (
    <StyledTooltipWrapper className='tooltipcontainer' {...props}>
      {children}
      <StyledTooltipContent
        className='tooltiptext'
        direction={direction}
        fontSize={fontSize}
        size={size}
      >
        {message}
      </StyledTooltipContent>
    </StyledTooltipWrapper>
  );
};

export default Tooltip;
