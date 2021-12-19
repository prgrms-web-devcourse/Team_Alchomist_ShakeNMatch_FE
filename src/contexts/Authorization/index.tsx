import useSessionStorage from '@hooks/useSessionStorage';
import type { ReactElement, ReactNode } from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import type { IAuthContext, IAuthState } from './types';
import type { ICocktailSimple, IBookmark } from '@models/types';
import useAxios from '@hooks/useAxios';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';

// const MOCK_INGREDIENTS = [
//   {
//     id: 4,
//     name: '생크림',
//     type: 'cream',
//     measure: 'ml',
//     cocktails: [],
//     alcohol: false
//   },
//   {
//     id: 11,
//     name: '샐러리 소금',
//     type: 'herb',
//     measure: '취향껏',
//     cocktails: [],
//     alcohol: false
//   },
//   {
//     id: 16,
//     name: '레몬 주스',
//     type: 'juice',
//     measure: 'ml',
//     cocktails: [],
//     alcohol: false
//   },
//   {
//     id: 52,
//     name: '깔루아',
//     type: 'liquor',
//     measure: 'ml',
//     cocktails: [],
//     alcohol: true
//   },
//   {
//     id: 75,
//     name: '화이트 럼',
//     type: 'liquor',
//     measure: 'ml',
//     cocktails: [],
//     alcohol: true
//   }
// ];

const AuthorizationContext = createContext<IAuthContext | null>(null);

const useAuthorization = (): IAuthContext => {
  const state = useContext(AuthorizationContext);
  if (!state) throw new Error('there is no context!');

  return state;
};

const AuthorizationProvider = ({
  children
}: {
  children: ReactNode;
}): ReactElement => {
  const [state, setState, clearState] = useSessionStorage<IAuthState>('auth', {
    oauthToken: null,
    user: null,
    isAuthorized: false
  });
  const [bookmarkList, setBookmarkList] = useState<ICocktailSimple[]>([]);

  // 칵테일상세모달에서 즐겨찾기를 토글하면, 서버로 해당 내용을 반영한다.
  // 서버에 반영된 내용은 Authorization 컨텍스트의 User 객체가 업데이트 되거나
  // 별도로 즐겨찾기 목록을 조회하지 않는 이상 클라이언트단에 업데이트 되지 않는다
  // 따라서 낙관적으로 서버에 반영한 내용을 Authorization 컨텍스트의 bookmarkList 상태를 만들어서 저장한다.
  // 그런데 페이지 새로고침이 되면 bookmarkList 상태는 초기화된다.
  // 로그아웃 후 재로그인을 하지 않았던 유저이기에, 낙관적으로 반영됐던 것들이 다 날아가버리고
  // 최초 로그인 했던 시점의 즐겨찾기 목록으로 회귀한다.....ㅅㅂ
  // => 컨텍스트가 새로고침 될 때마다 사용자 bookmark를 받아오는 api 호출한다.

  const request = useAxios(AXIOS_REQUEST_TYPE.AUTH);
  const fetchBookmarks = (userId: number): Promise<IBookmark[]> => {
    return request.get(`/user/bookmark/${userId}`);
  };

  const login = ({
    oauthToken,
    user
  }: Omit<IAuthState, 'isAuthorized'>): void => {
    setState({ oauthToken, user, isAuthorized: true });
  };

  const logout = (): void => {
    clearState();
  };

  const setOAuthToken = (oauthToken: string): void => {
    setState({ ...state, oauthToken });
  };

  const updateContextBookmark = (toggledCocktail: ICocktailSimple): void => {
    setBookmarkList((prevList): ICocktailSimple[] =>
      prevList?.some((prevCocktail) => prevCocktail.id === toggledCocktail.id)
        ? prevList.filter(
            (prevCocktail) => prevCocktail.id !== toggledCocktail.id
          )
        : [...prevList, toggledCocktail]
    );
  };

  useEffect(() => {
    if (!state.isAuthorized && state.oauthToken) {
      logout();
    }
  }, []);

  useEffect(() => {
    const initializeBookmarkList = async (): Promise<void> => {
      if (state.user) {
        const userBookmarks = await fetchBookmarks(state.user?.id);
        setBookmarkList(userBookmarks);
      }
    };

    initializeBookmarkList();
  }, []);

  return (
    <AuthorizationContext.Provider
      value={{
        ...state,
        bookmarkList,
        login,
        logout,
        setOAuthToken,
        updateContextBookmark
      }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};

export default AuthorizationProvider;
export { useAuthorization };
