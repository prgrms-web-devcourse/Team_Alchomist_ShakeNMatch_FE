import type { ReactElement } from 'react';
import { useState } from 'react';
import { Modal, Text } from '@base';
import TextButton from '@compound/TextButton';
import MenuTab from '@compound/MenuTab';
import type { IngredientSelectModalProps } from './types';
import { StyledTabContentContainer } from './styled';

const IngredientSelectModal = ({
  visible,
  initialUserIngredient,
  onClose,
  onSelectDone
}: IngredientSelectModalProps): ReactElement => {
  const [selectedItems, setSelectedItems] = useState(initialUserIngredient);
  const handleClose = (): void => {
    console.log('닫힘');
    onClose();
    onSelectDone(selectedItems);
  };
  console.log(setSelectedItems);
  return (
    <Modal
      backgroundColor='DARK_GRAY'
      color='IVORY'
      size='md'
      visible={visible}
      onClose={handleClose}
    >
      {visible && (
        <StyledTabContentContainer>
          <Text
            style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            재료를 추가해보세요
          </Text>
          <MenuTab initialOnChild='0' tabText={['Alcohol', 'Others']}>
            <div>1 page</div>
            <div>2 page</div>
          </MenuTab>
          <TextButton block buttonType='LONG_WHITE'>
            수정완료
          </TextButton>
        </StyledTabContentContainer>
      )}
    </Modal>
  );
};

export default IngredientSelectModal;

// children,
// size = 'md',
// color = 'BASIC_WHITE',
// backgroundColor = 'DARK_GRAY',
// visible = false,
// onClose
