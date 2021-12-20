import styled from '@emotion/styled';

const StyledSectionDividerContent = styled.div<{ alignItems: boolean }>`
  display: flex;
  justify-content: center;
  align-items: ${({ alignItems }): string =>
    alignItems ? 'center' : 'flex-start'};
`;

export { StyledSectionDividerContent };
