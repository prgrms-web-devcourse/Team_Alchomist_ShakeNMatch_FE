import type { IUserMbti } from '@models';

interface IRegisterRequestBody {
  nickname: string;
  isMan: boolean;
  age: number;
  mbti: IUserMbti;
}

export type { IRegisterRequestBody };
