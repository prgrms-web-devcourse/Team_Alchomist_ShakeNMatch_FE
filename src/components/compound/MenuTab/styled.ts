import { COLOR } from '@constants';
import styled from '@emotion/styled';
import type { StyledTabProps, StyledBackgroundProps } from './types';

const BORDER_RADIUS = '15px';

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
  background-color: ${COLOR.LIGHT_GRAY};
  height: 100%;
  border-top-right-radius: ${BORDER_RADIUS};
  border-bottom-right-radius: ${BORDER_RADIUS};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  background-color: transparent;
  z-index: 100;
  &:first-of-type {
    margin-top: 20px;
  }
`;

const StyledBackground = styled.div<StyledBackgroundProps>`
  position: absolute;
  top: ${({ selectedTab, firstTabSize }): string | number =>
    selectedTab === '0' ? 0 : `${firstTabSize}px`};
  transition: top 0.2s, height 0.3s cubic-bezier(0.49, -0.24, 0.22, 1.12);
  right: 0;
  width: 44px;
  height: ${({ size }): string => (size ? `${size}px` : '0px')};
  background: ${COLOR.LIGHT_GREEN_OPACITY};
  border-radius: ${BORDER_RADIUS};
  margin-top: 20px;
  opacity: 0.6;
  z-index: 101;
`;

export { StyledContainer, StyledTabWrapper, StyledTab, StyledBackground };
