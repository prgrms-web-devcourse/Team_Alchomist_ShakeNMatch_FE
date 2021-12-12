import axios from 'axios';
import type { AxiosInstance } from 'axios';

// 환경 변수 적용 필요
const BASE_URL = '';

const REQUEST_TYPE = {
  DEFAULT: 'default',
  AUTH: 'auth',
  FILE: 'file'
} as const;
type RequestTypeKeys = keyof typeof REQUEST_TYPE;
type IRequestType = typeof REQUEST_TYPE[RequestTypeKeys];

const setInterceptors = (
  instance: AxiosInstance,
  type: IRequestType
): AxiosInstance => {
  switch (type) {
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
        (error) => Promise.reject(error)
      );

      break;
    case REQUEST_TYPE.AUTH:
      instance.interceptors.request.use(
        (config) => {
          // Token 가져오기
          const TOKEN = '';
          config.headers = {
            'Content-Type': 'application/json',
            Authorization: `bearer ${TOKEN}`
          };
          return config;
        },
        (error) => Promise.reject(error.response)
      );

      instance.interceptors.response.use(
        (response) => response.data,
        (error) => Promise.reject(error)
      );

      break;
    case REQUEST_TYPE.FILE:
      instance.interceptors.request.use(
        (config) => {
          // Token 가져오기
          const TOKEN = '';
          config.headers = {
            'Content-Type': 'multipart/form-data',
            Authorization: `bearer ${TOKEN}`
          };
          return config;
        },
        (error) => Promise.reject(error.response)
      );

      instance.interceptors.response.use(
        (response) => response.data,
        (error) => Promise.reject(error)
      );

      break;
  }
  return instance;
};

const request = (): AxiosInstance =>
  setInterceptors(axios.create({ baseURL: BASE_URL }), REQUEST_TYPE.DEFAULT);

const authRequest = (): AxiosInstance =>
  setInterceptors(axios.create({ baseURL: BASE_URL }), REQUEST_TYPE.AUTH);

const fileRequest = (): AxiosInstance =>
  setInterceptors(axios.create({ baseURL: BASE_URL }), REQUEST_TYPE.FILE);

export { request, authRequest, fileRequest };
