import type { TooltipProps } from '@base/Tooltip/types';
import Tooltip from '@base/Tooltip';
import styled from '@emotion/styled';
import type { ReactElement } from 'react';
export default {
  title: 'Component/Base/Tooltip',
  component: Tooltip,
  argTypes: {
    message: {
      control: 'text',
      defaultValue:
        '사용자들이 즐겨찾기에 추가한 칵테일 Top 10 안에 드는 칵테일입니다'
    },
    direction: {
      control: 'inline-radio',
      defaultValue: 'right',
      options: ['right', 'left', 'top', 'bottom']
    },
    size: {
      control: 'inline-radio',
      defaultValue: 'md',
      options: ['sm', 'md', 'lg']
    },
    fontSize: {
      control: 'text',
      defaultValue: '8px'
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
