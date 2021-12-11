import styled from '@emotion/styled';
import type { StyledTabProps, StyledBackgroundProps } from './types';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  align-items: center;
`;

const StyledTabWrapper = styled.div`
  position: absolute;
  right: -44px;
  background-color: lightgray;
  height: 100%;
`;

const StyledTab = styled.div<StyledTabProps>`
  position: relative;
  writing-mode: vertical-rl;
  cursor: pointer;
  text-align: center;
  width: 44px;
  font-size: 24px;
  padding: 20px 0px;
  line-height: 1.8;
  border-radius: 15px;
  background-color: transparent;
  z-index: 100;
`;

const StyledBackground = styled.div<StyledBackgroundProps>`
  position: absolute;
  top: ${({ selectedTab, firstTabSize }): string | number =>
    selectedTab === '0' ? 0 : `${firstTabSize}px`};
  transition: top 0.2s, height 0.1s ease-in-out;
  right: 0;
  width: 44px;
  height: ${({ size }): string => (size ? `${size}px` : '0px')};
  border-radius: 15px;
  background-color: beige;
`;

export { StyledContainer, StyledTabWrapper, StyledTab, StyledBackground };
