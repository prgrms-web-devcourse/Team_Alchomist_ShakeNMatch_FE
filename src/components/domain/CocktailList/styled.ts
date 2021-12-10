import styled from '@emotion/styled';
import type { ReactChild } from 'react';

const StyledContainer = styled.div`
  width: 630px;
`;

interface StyledMotionWrapperProps {
  children: ReactChild;
}

const StyledMotionWrapper = styled.div<StyledMotionWrapperProps>`
  display: inline-block;
`;

export { StyledContainer, StyledMotionWrapper };
