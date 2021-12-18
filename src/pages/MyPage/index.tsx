import Carousel from '@compound/Carousel';
import type { ReactElement } from 'react';
import { useMemo, useEffect, useReducer } from 'react';
import favoriteImageSrc from '@assets/carouselTheme/big/favorites.png';
import editProfileImageSrc from '@assets/carouselTheme/big/editProfile.png';
import { useNavigate, useSearchParams } from 'react-router-dom';
import UserForm from '@domain/UserForm';
import CocktailList from '@domain/CocktailList';
import SectionDividerWithTitle from '@domain/SectionDividerWithTitle';
import SearchBot from '@domain/SearchBot';
import type { IApiResponse, ICocktailSimple, IUser, IUserForm } from '@models';
import useAxios from '@hooks/useAxios';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';
import { useAuthorization } from '@contexts';
import { Loader } from '@compound';
import { Text } from '@base';
import { getBookmarkReducer, getUserReducer, postUserReducer } from './reducer';

const TEN_RADIX = 10;

const MyPage = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedIndex = useMemo(
    () => parseInt(searchParams.get('index') || '0', TEN_RADIX),
    [searchParams]
  );
  const { user } = useAuthorization();
  const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);
  const [getUserAPIState, dispatchGetUserAPIState] = useReducer(
    getUserReducer,
    { value: null, isLoading: false, error: null }
  );
  const [postUserAPIState, dispatchPostUserAPIState] = useReducer(
    postUserReducer,
    { value: null, isLoading: false, error: null }
  );
  const [getBookmarkAPIState, dispatchGetBookmarkAPIState] = useReducer(
    getBookmarkReducer,
    { value: null, isLoading: false, error: null }
  );
  // api
  const getUserProfile = (userId: number): Promise<IApiResponse<IUser>> =>
    request.get(`/user/${userId}`);
  const postUserProfile = (form: IUserForm): Promise<IApiResponse<string>> => {
    const { nickname, gender, age, mbti } = form;
    return request.put(`/user/info/${user?.id}`, {
      nickname,
      isMan: gender === '남자' ? true : false,
      age,
      mbti
    });
  };
  const getUserBookmarks = (
    userId: number
  ): Promise<IApiResponse<ICocktailSimple[]>> =>
    request.get(`user/bookmark/${userId}`);

  const getUser = async (userId: number): Promise<void> => {
    try {
      dispatchGetUserAPIState({ type: 'API_START' });
      const { data } = await getUserProfile(userId);
      if (data) {
        const { nickname, age, isMan, mbti } = data;
        dispatchGetUserAPIState({
          type: 'API_SUCCESS',
          payload: { nickname, age, gender: isMan ? '남자' : '여자', mbti }
        });
      }
    } catch (e) {
      dispatchGetUserAPIState({ type: 'API_FAILED', payload: e });
    } finally {
      dispatchGetUserAPIState({ type: 'API_END' });
    }
  };
  const postUser = async (userForm: IUserForm): Promise<void> => {
    try {
      dispatchPostUserAPIState({ type: 'API_START' });
      const { data } = await postUserProfile(userForm);
      if (data) {
        dispatchPostUserAPIState({
          type: 'API_SUCCESS',
          payload: '회원정보가 수정되었습니다!'
        });
      }
    } catch (e) {
      dispatchPostUserAPIState({ type: 'API_FAILED', payload: e });
    } finally {
      dispatchPostUserAPIState({ type: 'API_END' });
    }
  };
  const getBookmarkByUserId = async (userId: number): Promise<void> => {
    try {
      dispatchGetBookmarkAPIState({ type: 'API_START' });
      const { data } = await getUserBookmarks(userId);
      if (data) {
        dispatchGetBookmarkAPIState({
          type: 'API_SUCCESS',
          payload: data
        });
      }
    } catch (e) {
      dispatchGetBookmarkAPIState({
        type: 'API_FAILED'
      });
    } finally {
      dispatchGetBookmarkAPIState({
        type: 'API_END'
      });
    }
  };

  const handleEditUserSubmit = (userForm: IUserForm): void => {
    postUser(userForm);
  };

  const handleChangeItem = (index: number): void => {
    setSearchParams({ index: index.toString(TEN_RADIX) });
  };

  useEffect(() => {
    if (user) {
      getUser(user.id);
      getBookmarkByUserId(user.id);
    } else {
      console.error('유저 정보가 없습니다!');
      navigate(-1);
    }
  }, []);

  return (
    <>
      <SectionDividerWithTitle
        dividerOptions={{ size: 1, color: 'LIGHT_GRAY' }}
        showContentsDivider
        withHeader
      >
        <Carousel.Container
          selectedIndex={selectedIndex}
          onChangeItem={handleChangeItem}
        >
          <Carousel.Item
            backgroundColor='LIGHT_PINK'
            imageSrc={favoriteImageSrc}
            title='즐겨찾기 목록'
          />
          <Carousel.Item
            backgroundColor='GREEN'
            imageSrc={editProfileImageSrc}
            title='개인정보 수정'
          />
        </Carousel.Container>
        {selectedIndex === 0 ? (
          getBookmarkAPIState.isLoading ? (
            <Loader />
          ) : getBookmarkAPIState.value ? (
            <CocktailList cocktailList={getBookmarkAPIState.value} />
          ) : (
            <Text color='LIGHT_GRAY' size='sm'>
              Cocktail 정보를 받아올수 없습니다
            </Text>
          )
        ) : getUserAPIState.isLoading ? (
          <Loader />
        ) : getUserAPIState.value ? (
          <UserForm
            initialValues={getUserAPIState.value}
            type='EditProfile'
            onSubmit={handleEditUserSubmit}
          />
        ) : (
          <Text color='LIGHT_GRAY' size='sm'>
            User 정보를 받아올수 없습니다
          </Text>
        )}
        {postUserAPIState.value ? <Text>회원정보가 수정되었습니다!</Text> : ''}
      </SectionDividerWithTitle>
      <SearchBot />
    </>
  );
};

export default MyPage;

/* 필요 컴포넌트
1. Carousel
2. UserForm
3. CockTailList
*/
