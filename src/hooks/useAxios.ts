import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { useAuthorization } from '@contexts';
import type { IRequestType } from '@models/types';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';

const { REACT_APP_BASE_URL } = process.env;

const useAxios = (requestType: IRequestType): AxiosInstance => {
  const instance = axios.create({ baseURL: REACT_APP_BASE_URL });
  const { oauthToken } = useAuthorization();

  switch (requestType) {
    case AXIOS_REQUEST_TYPE.DEFAULT:
      instance.interceptors.request.use(
        (config) => {
          config.headers = {
            'Content-Type': 'application/json',
            ...config.headers
          };
          return config;
        },
        (error) => Promise.reject(error.response)
      );

      instance.interceptors.response.use(
        (response) => response.data,
        (error) => Promise.reject(error.response)
      );

      break;
    case AXIOS_REQUEST_TYPE.AUTH:
      instance.interceptors.request.use(
        (config) => {
          config.headers = {
            'Content-Type': 'application/json',
            // token 필드에서 oauthToken을 담도록 되어있어 수정
            token: `${oauthToken}`,
            ...config.headers
          };
          return config;
        },
        (error) => Promise.reject(error.response)
      );

      instance.interceptors.response.use(
        (response) => response.data,
        (error) => Promise.reject(error.response)
      );

      break;
    case AXIOS_REQUEST_TYPE.FILE:
      instance.interceptors.request.use(
        (config) => {
          config.headers = {
            'Content-Type': 'multipart/form-data',
            token: `${oauthToken}`,
            ...config.headers
          };
          return config;
        },
        (error) => Promise.reject(error.response)
      );

      instance.interceptors.response.use(
        (response) => response.data,
        (error) => Promise.reject(error.response)
      );

      break;
  }
  return instance;
};

export default useAxios;
