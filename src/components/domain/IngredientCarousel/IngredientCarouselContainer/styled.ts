import styled from '@emotion/styled';

const StyledCarouselContainer = styled.div`
  background-color: beige;

  position: relative;
  display: flex;
  width: 600px;
  height: 200px;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
`;

const StyledItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 450px;
  padding: 0 30px;
  justify-content: flex-start;
  gap: 30px;
`;

const TempButton1 = styled.button`
  width: 30px;
  height: 40px;
  position: absolute;
  left: 30px;
`;

const TempButton2 = styled.button`
  width: 30px;
  height: 40px;
  position: absolute;
  right: 30px;
`;

export {
  StyledCarouselContainer,
  StyledItemContainer,
  TempButton1,
  TempButton2
};
