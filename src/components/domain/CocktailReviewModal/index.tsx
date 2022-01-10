import type { ChangeEventHandler, FormEventHandler, ReactElement } from 'react';
import { useState } from 'react';
import { Text, Modal, Button } from '@base';
import { Uploader } from '@compound';
import { RatingStar } from '@domain';
import {
  StyledReviewForm,
  StyledTextEditor,
  StyledWrapper,
  StyledButtonWrapper
} from './style';
import type { CocktailReviewModalProps } from './types';
import useAxios from '@hooks/useAxios';
import { AXIOS_REQUEST_TYPE, COLOR, TEXT_SIZE, MODAL_SIZE } from '@constants';
import type { IReviewPostResponse } from '@models';

const CocktailReviewModal = ({
  nickname,
  cocktailId,
  loginedUserId,
  size = MODAL_SIZE.SM,
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
    <Modal backgroundColor={COLOR.TRANSPARENT} size={size} {...props}>
      <StyledReviewForm>
        <Text
          color={COLOR.BRIGHT_BROWN}
          size={TEXT_SIZE.sm}
          style={{ textDecoration: 'underline' }}
        >
          {'소중한 리뷰를 남겨주세요'}
        </Text>
        <Uploader
          accept='image'
          droppable={true}
          value={null}
          onChangeFile={handleChangeFile}
        />
        <StyledWrapper>
          <RatingStar mode='edit' onRateChange={handleUserRate} />
          <StyledTextEditor
            autoFocus
            maxLength={30}
            placeholder='칵테일 한 줄 평을 적어주세요. (최대 50자)'
            onChange={handleUserComment}
          />
        </StyledWrapper>
        <StyledButtonWrapper>
          <Button type='button' onClick={onSubmit}>
            {'작성완료'}
          </Button>
          <Button type='button' onClick={onCancel}>
            {'취소'}
          </Button>
        </StyledButtonWrapper>
      </StyledReviewForm>
    </Modal>
  );
};

export default CocktailReviewModal;
