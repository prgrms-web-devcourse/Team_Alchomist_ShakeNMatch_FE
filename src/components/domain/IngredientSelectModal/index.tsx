import type { ReactElement } from 'react';
import { useState, useEffect, useCallback, Children } from 'react';
import { Modal, Text } from '@base';
import { MenuTab } from '@compound';
import { IngredientToggleList } from '@domain';
import type { IngredientSelectModalProps } from './types';
import {
  StyledTitleSectionContainer,
  StyledTextButton,
  StyledTabContentContainer,
  StyledTextContainer
} from './styled';
import type { IIngredient } from '@models/types';
import { useJangoContext } from '@contexts/Jango';

const IngredientSelectModal = ({
  visible,
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

  const { totalIngredientsList } = useJangoContext();

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
    <Modal
      backgroundColor='DARK_GRAY'
      color='IVORY'
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
                  ingredients={ingredientList.filter(
                    ({ id, name, alcohol }) => alcohol && { id, name }
                  )}
                  initialSelectedIngredients={initialMainIngredient}
                  onItemSelected={handleSelectMainItem}
                />
              </StyledTitleSectionContainer>
              <StyledTitleSectionContainer
                titleSize='sm'
                titleText='선택한 재료'
              >
                <StyledTextContainer>
                  {Children.toArray(
                    selectedItems.main.map((id) => (
                      <Text size='xs'>{totalIngredientsList[id].name}</Text>
                    ))
                  )}
                </StyledTextContainer>
              </StyledTitleSectionContainer>
            </section>
            <section>
              <StyledTitleSectionContainer titleText='재료를 추가해보세요!'>
                <IngredientToggleList
                  ingredients={ingredientList.filter(
                    ({ id, name, alcohol }) => !alcohol && { id, name }
                  )}
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
                    selectedItems.sub.map((id) => (
                      <Text size='xs'>{totalIngredientsList[id].name}</Text>
                    ))
                  )}
                </StyledTextContainer>
              </StyledTitleSectionContainer>
            </section>
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
    </Modal>
  );
};

export default IngredientSelectModal;
