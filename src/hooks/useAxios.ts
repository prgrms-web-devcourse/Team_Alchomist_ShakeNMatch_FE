import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { useAuthorization } from '@contexts';

const { REACT_APP_BASE_URL } = process.env;

const REQUEST_TYPE = {
  DEFAULT: 'default',
  AUTH: 'auth',
  FILE: 'file'
} as const;
type RequestTypeKeys = keyof typeof REQUEST_TYPE;
type IRequestType = typeof REQUEST_TYPE[RequestTypeKeys];

const useAxios = (requestType: IRequestType): AxiosInstance => {
  const instance = axios.create({ baseURL: REACT_APP_BASE_URL });
  const { oauthToken } = useAuthorization();

  switch (requestType) {
    case REQUEST_TYPE.DEFAULT:
      instance.interceptors.request.use(
        (config) => {
          config.headers = {
            'Content-Type': 'application/json'
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
    case REQUEST_TYPE.AUTH:
      instance.interceptors.request.use(
        (config) => {
          config.headers = {
            'Content-Type': 'application/json',
            Authorization: `bearer ${oauthToken}`
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
    case REQUEST_TYPE.FILE:
      instance.interceptors.request.use(
        (config) => {
          config.headers = {
            'Content-Type': 'multipart/form-data',
            Authorization: `bearer ${oauthToken}`
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
