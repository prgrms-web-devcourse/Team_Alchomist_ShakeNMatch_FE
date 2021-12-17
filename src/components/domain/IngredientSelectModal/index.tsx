import type { ReactElement } from 'react';
import { useState, useEffect, useCallback, Children } from 'react';
import { Modal, Text } from '@base';
import { MenuTab } from '@compound';
import IngredientToggleList from '@domain/IngredientToggleList';
import type { IngredientSelectModalProps } from './types';
import {
  StyledTitleSectionContainer,
  StyledTextButton,
  StyledTabContentContainer,
  StyledTextContainer,
  StyledModal
} from './styled';
import type { IIngredient } from '@models/types';

// 임시 컨텍스트 재료
const DUMMY = [
  {
    id: 1,
    name: '보드카',
    type: 'liquor',
    alcohol: true,
    measure: 'ml',
    cocktails: []
  },
  {
    id: 2,
    name: '위스키',
    type: 'whiskey',
    alcohol: true,
    measure: 'ml',
    cocktails: []
  },
  {
    id: 3,
    name: '극상 설탕',
    type: 'sugar',
    alcohol: false,
    measure: 'ml',
    cocktails: []
  },
  {
    id: 4,
    name: '우스터 소스',
    type: 'syrup',
    alcohol: false,
    measure: 'ml',
    cocktails: []
  }
];

const IngredientSelectModal = ({
  visible,
  initialMainIngredient,
  initialSubIngredient,
  onClose,
  onSelectDone
}: IngredientSelectModalProps): ReactElement => {
  const [ingredientList, setIngredientList] = useState<IIngredient[]>([]);
  const [selectedMainItems, setSelectedMainItems] = useState(
    initialMainIngredient
  );
  const [selectedSubItems, setSelectedSubItems] =
    useState(initialSubIngredient);

  useEffect(() => {
    // 전체 재료 목록 api를 받아와서 컨텍스트에 저장한다.
    // 거기서 재료 목록 해쉬맵을 만든다.
    // 만약 기존에 받아온 목록이 있다면 그걸 사용한다.

    // 임시로 DUMMY
    setIngredientList(DUMMY);
  }, []);

  const handleClose = useCallback((): void => {
    onClose();
  }, []);

  // 컨텍스트에 데이터 해쉬맵 만들게 되면, 아래 두 함수를 하나로 통합할 수 있을 듯
  const handleSelectMainItem = useCallback(
    (nextSelectedItems: number[]): void => {
      setSelectedMainItems(nextSelectedItems);
    },
    []
  );
  const handleSelectSubItem = useCallback(
    (nextSelectedItems: number[]): void => {
      setSelectedSubItems(nextSelectedItems);
    },
    []
  );

  return (
    <StyledModal
      backgroundColor='BASIC_WHITE_OPACITY'
      color='BRIGHT_IVORY'
      size='lg'
      visible={visible}
      onClose={handleClose}
    >
      {visible && (
        <StyledTabContentContainer>
          <MenuTab initialOnChild='0' tabText={['Alcohol', 'Others']}>
            <section>
              <StyledTitleSectionContainer titleText='재료를 추가해보세요!'>
                <IngredientToggleList
                  // 모든 재료 배열 (술)
                  ingredients={ingredientList.filter(
                    ({ id, name, alcohol }) => alcohol && { id, name }
                  )}
                  // 유저가 보유 중인 최초 재료 배열 (술)
                  // 컨텍스트 User.myIngredients 에서 isAlcohol이 true인 것들의 배열
                  initialSelectedIngredients={initialMainIngredient}
                  onItemSelected={handleSelectMainItem}
                />
              </StyledTitleSectionContainer>
              <StyledTitleSectionContainer
                titleSize='sm'
                titleText='선택한 재료'
              >
                <StyledTextContainer>
                  {/* 여기 해쉬맵 생기면, id에 맞는 이름을 매칭해서 넣어줄 것 */}
                  {Children.toArray(
                    selectedMainItems.map((id) => <Text size='xs'>{id}</Text>)
                  )}
                </StyledTextContainer>
              </StyledTitleSectionContainer>
            </section>
            <section>
              <StyledTitleSectionContainer titleText='재료를 추가해보세요!'>
                <IngredientToggleList
                  // 모든 재료 배열 (술 이외)
                  ingredients={ingredientList.filter(
                    ({ id, name, alcohol }) => !alcohol && { id, name }
                  )}
                  // 유저가 보유 중인 최초 재료 배열 (술 이외)
                  // 컨텍스트 User.myIngredients 에서 isAlcohol이 false 것들의 배열
                  initialSelectedIngredients={initialSubIngredient}
                  onItemSelected={handleSelectSubItem}
                />
              </StyledTitleSectionContainer>
              <StyledTitleSectionContainer
                titleSize='sm'
                titleText='선택한 재료'
              >
                <StyledTextContainer>
                  {Children.toArray(
                    selectedSubItems.map((id) => <Text size='xs'>{id}</Text>)
                  )}
                </StyledTextContainer>
              </StyledTitleSectionContainer>
            </section>
          </MenuTab>
          <StyledTextButton
            block
            buttonType='LONG_WHITE'
            onClick={(): void => {
              onSelectDone([...selectedMainItems, ...selectedSubItems]);
            }}
          >
            수정완료
          </StyledTextButton>
        </StyledTabContentContainer>
      )}
    </StyledModal>
  );
};

export default IngredientSelectModal;
