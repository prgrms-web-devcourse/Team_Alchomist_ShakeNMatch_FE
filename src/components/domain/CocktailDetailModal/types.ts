import type { ModalProps } from '@base/Modal/types';
import type { IngredientObject } from './IngredientItem/types';

interface CocktailDetailModalProps extends ModalProps {
  cocktailId: number | null;
}

interface ICocktailData {
  data: {
    id: number;
    name: string;
    volumes: IngredientObject[];
    reviews: string[];
    recipe: string;
    imageUrl: string;
    likes: number;
    totalRating: number;
  };
}

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const MOCK_USER_INGREDIENT_IDS = [47, 25, 16];

const MOCK_COCKTAIL_RESPONSE = {
  data: {
    id: 1,
    name: 'Trinidad Sour',
    volumes: [
      {
        ingredientId: 1,
        name: '앙고스투라',
        measure: 'oz',
        type: 'liquor',
        amount: 2
      },
      {
        ingredientId: 2,
        name: '사르트뢰즈 그린',
        measure: 'ml',
        type: 'liquor',
        amount: 3
      },
      {
        ingredientId: 3,
        name: '룩사르도 마라스키노',
        amount: 22.4,
        type: 'liquor',
        measure: 'oz'
      },
      {
        ingredientId: 4,
        name: '라임 주스',
        amount: 21,
        type: 'juice',
        measure: 'cup'
      }
    ],
    reviews: [
      {
        reviewId: 2,
        userId: 1,
        cocktailId: 2,
        url: '수정된 사진 url',
        description: '수정되었습니다',
        rating: 4
      },
      {
        reviewId: 3,
        userId: 2,
        cocktailId: 1,
        url: 'https://team15-image-bucket.s3.ap-northeast-2.amazonaws.com/Alexander.jpg',
        description: '이번 칵테일은 먹을만 하네요',
        rating: 2
      }
    ],
    recipe: `만드는 방법 1 믹싱 글라스에 얼음을 가득 채우고 진과 베르무트를 넣어 넣어주세요. 
    2 30초 정도 잘 저어주세요. 
    3 얼음이 걸러지게 스트레이너를 사용하여 준비된 마티니 잔에 부어주세요.
    4올리브를 그냥 넣거나 칵테일 픽을 사용해 장식해 주세요. 또는 레몬 껍질을 사용할 경우 비틀어 시트러스 향을 뿌려준 후 장식해 주세요.
    Tips 마티니의 레시피는 간단하면서 매우 다양합니다. 
    진과 베르무트를 50:50으로 하면 50/50 마티니(또는 wet 마티니), 
    드라이 베르무트와 스위트 베르무트를 같은 양으로 섞는 퍼펙트 마티니, 진 대신 보드카를 사용하는 보드카 마티니, 올리브 캔의 주스를 추가해 만드는 더티 마티니, 등 수많은 영화에 등장하는 마티니는 가장 사랑받는 칵테일 중 하나입니다.`,
    imageUrl:
      'https://cocktail-society.com/wp-content/uploads/elementor/thumbs/Trinidad-Sour-Cocktail-pck8d94kj1n3tjk0daxtxhl00uroslwilqsyd7blt4.jpg',
    likes: 0,
    totalRating: 0.0
  }
};

export type { CocktailDetailModalProps, ICocktailData };
export { MOCK_COCKTAIL_RESPONSE, MOCK_USER_INGREDIENT_IDS };
