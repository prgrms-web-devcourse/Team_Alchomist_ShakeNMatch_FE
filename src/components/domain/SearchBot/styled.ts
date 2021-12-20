import styled from '@emotion/styled';
import type { StyledInputBackgroundProps } from './types';
import { COLOR } from '@constants';
import { Image } from '@base';
import { keyframes } from '@emotion/react';

const shake = keyframes`
  0%{
    transform: rotate(0);
  }
  25%{
    transform: rotate(5deg);
  }
  50%{
    transform: rotate(0);
  }
  75%{
    transform: rotate(-5deg);
  }
  100%{
    transform: rotate(0) scale(1.1);
  }
`;

const StyledImage = styled(Image)`
  cursor: pointer;
  &:hover {
    animation: ${shake} 1s linear forwards;
  }
`;

const StyledContainer = styled.div`
  position: absolute;
  right: 30px;
  bottom: 10px;
`;

const StyledBot = styled.div`
  position: relative;
`;

const StyledInputBackground = styled.div<StyledInputBackgroundProps>`
  display: ${({ isVisible }): string => (isVisible ? 'flex' : 'none')};
  background-color: ${COLOR.BASIC_WHITE};
  position: absolute;
  top: 0px;
  left: -330px;
  right: 0;
  margin: 0 auto;
  width: 250px;
  height: 80px;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  animation: show 0.2s ease-in-out;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-left-color: ${COLOR.BASIC_WHITE};
    border-right: 0;
    border-bottom: 0;
    margin-top: -10px;
    margin-right: -20px;
  }
`;

export { StyledImage, StyledContainer, StyledBot, StyledInputBackground };
