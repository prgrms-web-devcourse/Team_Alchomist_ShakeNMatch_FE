import type { ReactElement } from 'react';
import SectionDividerWithTitle from '@domain/SectionDividerWithTitle';
import CocktailList from '@domain/CocktailList';
import IngredientCarousel from '@domain/IngredientCarousel';
import { StyledIngredientContainer } from './styled';
import { Text } from '@base';
import TextButton from '@compound/TextButton';

// 사용자 재료 기반 추천 리스트

// 컨텍스트 : 유저의 myIngredients 배열 필요

const JangoPage = (): ReactElement => {
  // 컨텍스트에서 유저의 myIngredients를 받아온다.
  // 해당 재료들을 가지고 복수 재료 기반 api 요청을 통해 만들 수 있는 칵테일 리스트를 받아온다. => CocktailList에 내려준다.

  // myIngredients를 주재료와 부재료로 구분하여 싱글 캐러셀(주재료), 더블 캐러셀(부재료)에 뿌려준다.

  // IngredientSelectModal을 관리하는 상태가 있다. '내 재료 수정하기' 버튼을 통해 모달을 제어한다.
  // 모달에서 재료 업데이트가 일어나면 -> 서버에 반영 -> (어떠한 과정으로 컨텍스트를 업데이트 하지???) -> 다시 페이지에 반영을 해야한다
  // (이때 낙관적 업데이트도 할 수 있을 듯)

  // 어 지금보니까 내 술장고 재료 조회가 있네 => 그러면 User 객체에 myIngredients는 효용이 별로 없는 거 아닌가?

  return (
    <SectionDividerWithTitle>
      <StyledIngredientContainer style={{ width: '100%', height: '100%' }}>
        <Text>알콜</Text>
        <IngredientCarousel albumType='alcohol' itemList={[]} row='single' />
        <Text>감미료</Text>
        <IngredientCarousel albumType='sweetener' itemList={[]} row='double' />
        <TextButton buttonType='LONG_PINK'>내 재료 수정하기</TextButton>
      </StyledIngredientContainer>
      <CocktailList cocktailList={[]} />
    </SectionDividerWithTitle>
  );
};

export default JangoPage;
