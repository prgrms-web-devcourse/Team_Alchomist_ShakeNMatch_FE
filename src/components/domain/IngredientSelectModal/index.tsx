import type { ReactElement } from 'react';
import { useState, useEffect, useCallback, Children } from 'react';
import { Text } from '@base';
import { MenuTab } from '@compound';
import { IngredientToggleList, TitleSectionContainer } from '@domain';
import type { IngredientSelectModalProps } from './types';
import {
  StyledTextButton,
  StyledTabContentContainer,
  StyledTextContainer,
  StyledModal,
  StyledSection
} from './styled';
import type { IIngredient } from '@models/types';
import { COLOR, MODAL_SIZE } from '@constants';

const IngredientSelectModal = ({
  visible,
  totalIngredientsList,
  initialMainIngredient,
  initialSubIngredient,
  onClose,
  onSelectDone
}: IngredientSelectModalProps): ReactElement => {
  const [ingredientList, setIngredientList] = useState<IIngredient[]>([]);
  const [selectedItems, setSelectedItems] = useState<{
    main: number[];
    sub: number[];
  }>({ main: [], sub: [] });

  useEffect(() => {
    const ingredientsList = Object.values(totalIngredientsList);
    setIngredientList(ingredientsList);
  }, [totalIngredientsList]);

  const handleClose = useCallback((): void => {
    onClose();
  }, []);

  const handleSelectMainItem = useCallback(
    (nextSelectedItems: number[]): void => {
      setSelectedItems((prevSelectedItems) => ({
        main: nextSelectedItems,
        sub: [...prevSelectedItems.sub]
      }));
    },
    []
  );
  const handleSelectSubItem = useCallback(
    (nextSelectedItems: number[]): void => {
      setSelectedItems((prevSelectedItems) => ({
        main: [...prevSelectedItems.main],
        sub: nextSelectedItems
      }));
    },
    []
  );

  return (
    <StyledModal
      backgroundColor={COLOR.BASIC_WHITE_OPACITY}
      color={COLOR.BRIGHT_IVORY}
      size={MODAL_SIZE.LG}
      visible={visible}
      onClose={handleClose}
    >
      {visible && Object.keys(totalIngredientsList).length && (
        <StyledTabContentContainer>
          <MenuTab initialOnChild='0' tabText={['Alcohol', 'Others']}>
            <StyledSection>
              <TitleSectionContainer titleText='재료를 추가해보세요!'>
                <IngredientToggleList
                  ingredients={ingredientList.filter(
                    ({ id, name, alcohol }) => alcohol && { id, name }
                  )}
                  initialSelectedIngredients={initialMainIngredient}
                  onItemSelected={handleSelectMainItem}
                />
              </TitleSectionContainer>
              <TitleSectionContainer titleSize='sm' titleText='선택한 재료'>
                <StyledTextContainer>
                  {Children.toArray(
                    selectedItems.main.map((id) => (
                      <Text size='xs'>
                        {totalIngredientsList[String(id)].name}
                      </Text>
                    ))
                  )}
                </StyledTextContainer>
              </TitleSectionContainer>
            </StyledSection>
            <StyledSection>
              <TitleSectionContainer titleText='재료를 추가해보세요!'>
                <IngredientToggleList
                  ingredients={ingredientList.filter(
                    ({ id, name, alcohol }) => !alcohol && { id, name }
                  )}
                  initialSelectedIngredients={initialSubIngredient}
                  onItemSelected={handleSelectSubItem}
                />
              </TitleSectionContainer>
              <TitleSectionContainer titleSize='sm' titleText='선택한 재료'>
                <StyledTextContainer>
                  {Children.toArray(
                    selectedItems.sub.map((id) => (
                      <Text size='xs'>
                        {totalIngredientsList[String(id)].name}
                      </Text>
                    ))
                  )}
                </StyledTextContainer>
              </TitleSectionContainer>
            </StyledSection>
          </MenuTab>
          <StyledTextButton
            block
            buttonType='LONG_WHITE'
            onClick={(): void => {
              onSelectDone([...selectedItems.main, ...selectedItems.sub]);
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
