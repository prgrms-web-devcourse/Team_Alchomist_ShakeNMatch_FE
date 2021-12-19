import type { ChangeEventHandler, FormEventHandler, ReactElement } from 'react';
import { useState } from 'react';
import Button from '@base/Button';
import { Text, Modal } from '@base';
import Upload from '@base/Uploader';
import RatingStar from '@domain/RatingStar';
import { StyledReviewForm, StyledTextEditor } from './style';
import type { CocktailReviewModalProps } from './types';
import useAxios from '@hooks/useAxios';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';
import type { IReviewPostResponse } from '@models';

const CocktailReviewModal = ({
  nickname,
  cocktailId,
  loginedUserId,
  handleOnSubmitted,
  onCancel,
  ...props
}: Omit<CocktailReviewModalProps, 'backgroundColor'>): ReactElement => {
  const [userFile, setUserFile] = useState<File | null>(null);
  const handleChangeFile = (file: File): void => {
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

  const postRequest = useAxios(AXIOS_REQUEST_TYPE.FILE);

  const onSubmit: FormEventHandler = async (): Promise<void> => {
    if (!userFile || userComment.length < 2) {
      alert(
        '파일이 선택되지 않았거나, 코멘트 길이가 부족합니다. 성의를 보여주세요'
      );
      return;
    }

    const formData = new FormData();

    const requestData = new Blob(
      [
        JSON.stringify({
          userId: loginedUserId,
          url: userFile.name,
          nickname: nickname,
          cocktailId: cocktailId,
          description: userComment,
          rating: userRate
        })
      ],
      { type: 'application/json' }
    );

    formData.set('file', userFile);
    formData.set('request', requestData);
    const result = await postRequest.post<IReviewPostResponse>(
      `/review`,
      formData
    );
    if (result.data) {
      console.log(result.data);
      handleOnSubmitted({
        id: result.data.reviewId,
        rating: result.data.rating,
        description: result.data.description,
        url: result.data.url,
        userId: result.data.userId,
        nickname: result.data.nickname,
        cocktailId: result.data.cocktailId,
        cocktailName: result.data.cocktailName
      });
      return;
    }
    alert('리뷰 업로드에 실패하였습니다');
  };

  return (
    <Modal backgroundColor='TRANSPARENT' {...props}>
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
          <Button type='button' onClick={onCancel}>
            {'취소'}
          </Button>
        </div>
      </StyledReviewForm>
    </Modal>
  );
};

export default CocktailReviewModal;
