import styled from '@emotion/styled';

const InnerModalContainer = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr;
  gap: 10px;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
  & * {
    flex-shrink: 0;
  }
`;

const IdentifierContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
`;

export { InnerModalContainer, IdentifierContainer };
