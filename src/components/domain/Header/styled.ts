import { COLOR } from '@constants';
import styled from '@emotion/styled';

const StyledHeaderContainer = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 2px solid ${COLOR.LIGHT_GRAY};
  padding-right: 10px;
  align-items: center;

  & > *:first-child {
    margin-right: auto;
  }
`;

export { StyledHeaderContainer };
