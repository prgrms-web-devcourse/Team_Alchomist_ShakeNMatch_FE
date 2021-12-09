/* eslint-disable @typescript-eslint/no-magic-numbers */
import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  border: 1px solid;
  padding-right: 44px;
`;

const StyledTabWrapper = styled.div`
  position: absolute;
  right: 0;
  background-color: lightgray;
  height: 100%;
`;

interface StyledTabProps extends HTMLAttributes<HTMLDivElement> {
  isSelected: boolean;
}

const StyledTab = styled.div<StyledTabProps>`
  position: relative;
  writing-mode: vertical-rl;
  padding: 0 10px;
  cursor: pointer;
  text-align: center;
  line-height: 2.5;
  width: 44px;
  font-size: 24px;
  padding: 20px 0px;
  line-height: 2;
  border-radius: 15px;
  background-color: transparent;
  z-index: 100;
`;

interface StyledBackgroundProps {
  selectedTab: string;
  size?: number;
  firstTabSize?: number;
}

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
