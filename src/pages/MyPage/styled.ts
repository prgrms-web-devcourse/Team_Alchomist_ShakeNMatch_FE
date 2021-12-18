import { TextButton } from '@compound';
import { HEADER_HEIGHT } from '@constants/headerHeight';
import styled from '@emotion/styled';

const StyledSectionDividerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLogoutButton = styled(TextButton)`
  position: absolute;
  top: calc(${HEADER_HEIGHT} + 10px);
  right: 10px;
`;

export { StyledSectionDividerContent, StyledLogoutButton };
