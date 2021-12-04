import styled from '@emotion/styled';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 400px;
  height: 600px;
  border: 1px solid;
`;

const StyledTabWrapper = styled.div`
  position: absolute;
  right: 0;
`;

const StyledTab = styled.div`
  writing-mode: vertical-rl;
  background-color: blue;
  padding: 0 10px;
  cursor: pointer;
  text-align: center;
  line-height: 2.5;
  width: 40px;
  height: 160px;
`;

export { StyledContainer, StyledTabWrapper, StyledTab };
