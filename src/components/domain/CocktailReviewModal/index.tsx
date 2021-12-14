import type { ChangeEventHandler, FormEventHandler, ReactElement } from 'react';
import { useState } from 'react';
import Button from '@base/Button';
import Text from '@base/Text';
import Modal from '@base/Modal';
import Upload from '@base/Uploader';
import RatingStar from '@domain/RatingStar';
import { StyledReviewForm, StyledTextEditor } from './style';
import type { CocktailReviewModalProps } from './types';

const CocktailReviewModal = (props: CocktailReviewModalProps): ReactElement => {
  console.log('CocktailReveiwModal');
  const [userFile, setUserFile] = useState<File | null>(null);
  const handleChangeFile = (file: File): void => {
    console.log('file changed', file.name);
    setUserFile(file);
  };

  const [userRate, setUserRate] = useState<number>(0);
  const handleUserRate = (newRate: number): void => {
    setUserRate(newRate);
  };

  const [userComment, setUserComment] = useState<string>('');
  const handleUserComment: ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ): void => {
    setUserComment(e.target.value);
  };

  const onSubmit: FormEventHandler = (): void => {
    if (!userFile || userComment.length < 2) {
      alert(
        '파일이 선택되지 않았거나, 코멘트 길이가 부족합니다. 성의를 보여주세요'
      );
      return;
    }
    //API 로직이 들어올 곳 FormData로 묶어서 보내야 한다.
    props.handleSubmit({
      userFile: userFile,
      userRate: userRate,
      userComment: userComment
    });
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
          <Button type='button' onClick={onSubmit}>
            {'작성완료'}
          </Button>
          <Button type='button' onClick={props.onCancel}>
            {'취소'}
          </Button>
        </div>
      </StyledReviewForm>
    </Modal>
  );
};

export default CocktailReviewModal;
