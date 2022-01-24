import type { TooltipProps } from '@base/Tooltip/types';
import { Tooltip } from '@base';
import styled from '@emotion/styled';
import type { ReactElement } from 'react';

export default {
  title: 'Component/Base/Tooltip',
  component: Tooltip,
  argTypes: {
    message: {
      control: 'text',
      defaultValue: '초기메시지값'
    },
    direction: {
      control: 'inline-radio',
      defaultValue: 'right',
      options: ['right', 'left', 'top', 'bottom']
    },
    tooltipSize: {
      control: 'inline-radio',
      defaultValue: 'md',
      options: ['sm', 'md', 'lg']
    },
    tooltipMessageSize: {
      control: 'inline-radio',
      defaultValue: 'md',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    }
  }
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-color: aqua;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 100px;
  border-radius: 20px;
`;

export const Default = (props: TooltipProps): ReactElement => {
  return (
    <StyledContainer>
      <Tooltip {...props}>
        <StyledButton type='button'>{'마우스를 호버 해보세요'}</StyledButton>
      </Tooltip>
    </StyledContainer>
  );
};
