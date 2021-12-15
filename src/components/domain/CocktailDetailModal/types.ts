import type { ModalProps } from '@base/Modal/types';

type CocktailDetailModalProps = ModalProps;

const MOCK_INGREDIENT_DATA = [1, 1, 1, 1, 1, 1, 1, 1];
const MOCK_REVIEW_DATA = [1, 1, 1, 1, 1, 1, 1];
const MOCK_COCKTAIL_INSTRUCTION = `만드는 방법 1 믹싱 글라스에 얼음을 가득 채우고 진과 베르무트를 넣어 넣어주세요. 
2 30초 정도 잘 저어주세요. 
3 얼음이 걸러지게 스트레이너를 사용하여 준비된 마티니 잔에 부어주세요.
4올리브를 그냥 넣거나 칵테일 픽을 사용해 장식해 주세요. 또는 레몬 껍질을 사용할 경우 비틀어 시트러스 향을 뿌려준 후 장식해 주세요.
Tips 마티니의 레시피는 간단하면서 매우 다양합니다. 
진과 베르무트를 50:50으로 하면 50/50 마티니(또는 wet 마티니), 
드라이 베르무트와 스위트 베르무트를 같은 양으로 섞는 퍼펙트 마티니, 진 대신 보드카를 사용하는 보드카 마티니, 올리브 캔의 주스를 추가해 만드는 더티 마티니, 등 수많은 영화에 등장하는 마티니는 가장 사랑받는 칵테일 중 하나입니다.`;
const MOCK_COCKTAIL_NAME = 'MARTINY';

export type { CocktailDetailModalProps };
export {
  MOCK_INGREDIENT_DATA,
  MOCK_COCKTAIL_NAME,
  MOCK_REVIEW_DATA,
  MOCK_COCKTAIL_INSTRUCTION
};
