import styled from '@emotion/styled';
import type { ReactElement } from 'react';
import { useState } from 'react';
import Button from '@base/Button';
import Text from '@base/Text';
import Modal from '@base/Modal';
import type { ModalProps } from '@base/Modal/types';
import Upload from '@base/Uploader';
import RatingStar from '@domain/RatingStar';

type CocktailReviewModalProps = ModalProps;
interface Review {
  userFile: File | null;
  userRate: number;
  userComment: string;
}

const StyledReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledTextEditor = styled.textarea`
  padding: 10px;
  width: 100%;
  max-width: 100%;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #999;
`;

const CocktailReviewModal = (props: CocktailReviewModalProps): ReactElement => {
  const [review, setReview] = useState<Review>({
    userFile: null,
    userRate: 0,
    userComment: ''
  });

  const [userFile, setUserFile] = useState<File | null>(null);

  const handleChangeFile = (file: File): void => {
    console.log('file changed', file.name);
    setUserFile(file);
    setReview((prev) => ({ ...prev, userFile: file }));
  };

  const [userRate, setUserRate] = useState<number>(0);

  const handleUserRate = (newRate: number): void => {
    setUserRate(newRate);
    setReview((prev) => ({ ...prev, userRate: newRate }));
  };

  const handleComplete = (): void => {
    if (!userFile) {
      alert('업로드한 파일이 없습니다');
    }
    console.log(userFile?.name, userRate, review);
  };

  const handleCancel = (): void => {
    console.log(userFile?.name, userRate, review);
  };

  return (
    <Modal {...props}>
      <StyledReviewForm>
        <Text>{'칵테일 리뷰 모달'}</Text>
        <Upload
          accept='image'
          droppable={true}
          value={null}
          onChangeFile={handleChangeFile}
        />
        <RatingStar mode='edit' onRateChange={handleUserRate} />
        <StyledTextEditor />

        <div>
          <Button type='button' onClick={handleComplete}>
            {'작성완료'}
          </Button>
          <Button type='button' onClick={handleCancel}>
            {'취소'}
          </Button>
        </div>
      </StyledReviewForm>
    </Modal>
  );
};

export default CocktailReviewModal;
