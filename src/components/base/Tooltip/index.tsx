import type { ReactElement } from 'react';
import { StyledTooltipContent, StyledTooltipWrapper } from './styled';
import type { TooltipProps } from './types';
import { Text } from '@base';
import { COLOR, TEXT_SIZE, TOOLTIP_DIRECTION, TOOLTIP_SIZE } from '@constants';

const Tooltip = ({
  children,
  tooltipMessage = '툴팁메시지',
  direction = TOOLTIP_DIRECTION.TOP,
  tooltipSize = TOOLTIP_SIZE.MD,
  tooltipMessageSize = TEXT_SIZE.md,
  ...props
}: TooltipProps): ReactElement => {
  return (
    <StyledTooltipWrapper className='tooltipcontainer' {...props}>
      {children}
      <StyledTooltipContent
        className='tooltiptext'
        direction={direction}
        tooltipSize={tooltipSize}
      >
        <Text color={COLOR.BASIC_WHITE} size={tooltipMessageSize}>
          {tooltipMessage}
        </Text>
      </StyledTooltipContent>
    </StyledTooltipWrapper>
  );
};

export default Tooltip;
