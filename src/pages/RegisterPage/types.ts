import type { IUserMbti } from '@models';

interface IRegisterRequestBody {
  email: string;
  nickname: string;
  isMan: boolean;
  age: number;
  mbti: IUserMbti;
}

export type { IRegisterRequestBody };
