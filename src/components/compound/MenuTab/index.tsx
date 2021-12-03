import type { ReactElement } from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  width: 400px;
  height: 600px;
  border: 1px solid;
`;

const StyledTab = styled.div`
  width: 100px;
  height: 30px;
  background-color: blue;
  border: 1px solid;
  display: inline-block;
  cursor: pointer;
`;

const StyledContent = styled.div<any>`
  width: 300px;
  height: 400px;
  background-color: coral;
  position: absolute;
  display: ${({ display }): string => (display ? 'block' : 'none')};
`;

const MenuTab = (): ReactElement => {
  // container와 탭이 2개 있다
  // 탭 안에는 텍스트 컴포넌트가 있다
  // 탭은 클릭 가능하다
  // 탭은 오른쪽으로 90도 회전되어 있다
  // 탭은 컨테이너 우측 상단에 위치한다

  // 컨테이너는 자식으로 컴포넌트를 2개 받는다
  // 첫번째 탭이 선택되면 첫번째 자식의 display가 none에서 block이 된다.
  // 선택되지 않은 탭의 자식은 none이다

  // 새로고침 반영 필요

  const [isFirstContentOn, setIsFirstContentOn] = useState(true);
  const [isSecondContentOn, setIsSecondContentOn] = useState(false);

  const handleFirstContent = (): void => {
    console.log('첫자식 선택!');
    setIsSecondContentOn(!isSecondContentOn);
    setIsFirstContentOn(!isFirstContentOn);
  };

  const handleSecondContent = (): void => {
    console.log('둘째자식 선택!');
    setIsFirstContentOn(!isFirstContentOn);
    setIsSecondContentOn(!isSecondContentOn);
  };

  return (
    <StyledContainer>
      <StyledTab onClick={handleFirstContent}>first</StyledTab>
      <StyledTab onClick={handleSecondContent}>second</StyledTab>
      <StyledContent display={isFirstContentOn}>
        첫번째 내용물입니당
      </StyledContent>
      <StyledContent display={isSecondContentOn}>
        두번째 내용물입니당
      </StyledContent>
    </StyledContainer>
  );
};

export default MenuTab;
