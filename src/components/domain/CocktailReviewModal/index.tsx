import type { ChangeEventHandler, ReactElement } from 'react';
import { useState } from 'react';
import Button from '@base/Button';
import Text from '@base/Text';
import Modal from '@base/Modal';
import Upload from '@base/Uploader';
import RatingStar from '@domain/RatingStar';
import { StyledReviewForm, StyledTextEditor } from './style';
import type { CocktailReviewModalProps, Review } from './types';

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

  const [userComment, setUserComment] = useState<string>('');
  const handleUserComment: ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ): void => {
    setUserComment(e.target.value);
    setReview((prev) => ({ ...prev, userComment: userComment }));
  };

  const handleComplete = (): void => {
    if (!userFile || userComment.length < 9) {
      alert('업로드한 파일이 없습니다');
      return;
    }
    console.log(userFile?.name, userRate, review);
    props.visible = false;
  };

  const handleCancel = (): void => {
    console.log(userFile?.name, userRate, review);
    props.visible = false;
  };

  return (
    <Modal {...props}>
      <StyledReviewForm>
        <Text size='sm'>{'칵테일 리뷰 모달'}</Text>
        <Upload
          accept='image'
          droppable={true}
          value={null}
          onChangeFile={handleChangeFile}
        />
        <RatingStar mode='edit' onRateChange={handleUserRate} />
        <StyledTextEditor
          autoFocus
          maxLength={50}
          placeholder='칵테일에 대한 간단한 코멘트를 적어주세요(최대 50자)'
          onChange={handleUserComment}
        />

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
