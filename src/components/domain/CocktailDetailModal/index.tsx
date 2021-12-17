import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import type { Review } from '@domain/CocktailReviewModal/types';
import type { CocktailDetailModalProps } from './types';
import { Image, SectionDivider, Modal, Text } from '@base';
import IngredientItem from './IngredientItem';
import UserReviewItem from './UserReviewItem';
import { TextButton, MenuTab } from '@compound';
import { TitleSectionContainer, CocktailReviewModal } from '@domain';
import {
  StyledIngredientListWrapper,
  StyledReviewListWrapper,
  StyledImageContainer
} from './style';
import { MOCK_USER_INGREDIENT_IDS } from './types';
import useAxios from '@hooks/useAxios';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';
import type { IApiResponse, ICocktail } from '@models';

const CocktailDetailModal = ({
  size,
  backgroundColor,
  color,
  visible,
  clickedCocktailId = 1,
  onClose
}: CocktailDetailModalProps): ReactElement => {
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false); //칵테일 리뷰 모달을 컨트롤
  // const [userReview, setUserReview] = useState<Review | null>(null); //리뷰 모달에서 리턴받은 값
  const [cocktailId, setCocktailId] = useState<number | null>(null);
  const [cocktailData, setCocktailData] = useState<ICocktail | null>(null);
  const [cocktailReviews, setCocktailReviews] = useState<string[] | undefined>(
    []
  );
  const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);

  const getCocktailDetailInfoById = (
    cocktailId: string
  ): Promise<IApiResponse<ICocktail>> => {
    return request.get(`/cocktail/id?id=${cocktailId}`);
  };

  useEffect(() => {
    if (visible) {
      setCocktailId(clickedCocktailId);
      const getCocktailInfo = async (): Promise<void> => {
        if (cocktailId) {
          const searchResult = await getCocktailDetailInfoById(
            clickedCocktailId.toString()
          );
          setCocktailData(searchResult.data);
        }
      };
      getCocktailInfo();
      // setCocktailReviews(MOCK_COCKTAIL_RESPONSE.data.reviews);
      return;
    }
    setCocktailId(null);
    setCocktailData(null);
  }, [visible]); //visible 을 기준으로 할 지, cocktailId 로 할 지

  const handleComplete = (reviewInfo: Review): void => {
    cocktailReviews?.push(reviewInfo.userComment);
    setCocktailReviews(() => cocktailReviews);
    setIsReviewModalVisible(false);
  };

  const handleClose = (): void => {
    if (!isReviewModalVisible) {
      onClose?.();
    }
  };

  return (
    <Modal
      backgroundColor={backgroundColor}
      color={color}
      size={size}
      visible={visible}
      onClose={handleClose}
    >
      {visible && (
        <>
          <MenuTab
            initialOnChild='0'
            tabText={['Ingredients & Method', 'Reviews']}
          >
            <SectionDivider>
              <StyledImageContainer>
                <Image
                  alt='Image'
                  height='100%'
                  mode='cover'
                  src={cocktailData?.type}
                  width='100%'
                />
              </StyledImageContainer>
              <TitleSectionContainer
                dividerVisible
                titleText={cocktailData?.name}
              >
                <StyledIngredientListWrapper>
                  <Text size='md'>{'- 재료 -'}</Text>
                  {cocktailData?.volumes?.map((ingredient) => {
                    let isExists = false;
                    //현재 유저의 재료는 목데이터로 들어가 있는 상태입니다
                    if (MOCK_USER_INGREDIENT_IDS.includes(ingredient.id)) {
                      isExists = true;
                    }
                    return (
                      <IngredientItem
                        amount={3}
                        ingredientId={ingredient.id}
                        isUserHas={isExists}
                        measure={ingredient.measure}
                        name={ingredient.name}
                        type={ingredient.type}
                      />
                    );
                  })}
                  <Text size='md'>{'- 조제법- '}</Text>
                  <br />
                  <Text size='sm'>{cocktailData?.recipe}</Text>
                </StyledIngredientListWrapper>
              </TitleSectionContainer>
            </SectionDivider>
            <SectionDivider>
              <StyledImageContainer>
                <Image
                  alt='Image'
                  height='100%'
                  mode='cover'
                  src={cocktailData?.type}
                  width='100%'
                />
              </StyledImageContainer>
              <TitleSectionContainer
                dividerVisible
                titleText={cocktailData?.name}
              >
                <>
                  <StyledReviewListWrapper>
                    <Text size='md'>{'- 사용자 리뷰- '}</Text>
                    {cocktailReviews?.map((userReview) => (
                      <UserReviewItem
                        userComment={userReview}
                        userImageUrl=''
                        userRating={5}
                      />
                    ))}
                  </StyledReviewListWrapper>
                  <TextButton
                    buttonType='LONG_WHITE'
                    dropShadow
                    type='button'
                    onClick={(): void => {
                      setIsReviewModalVisible(true);
                    }}
                  >
                    {'리뷰작성'}
                  </TextButton>
                </>
              </TitleSectionContainer>
            </SectionDivider>
          </MenuTab>
          <CocktailReviewModal
            color={'BASIC_WHITE'}
            handleSubmit={handleComplete}
            size={'sm'}
            visible={isReviewModalVisible}
            onCancel={(): void => {
              setIsReviewModalVisible(false);
            }}
          />
        </>
      )}
    </Modal>
  );
};

export default CocktailDetailModal;
