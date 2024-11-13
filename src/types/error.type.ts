import axios, { AxiosError } from 'axios';

export type CustomError = AxiosError<{
  isSuccess: boolean;
  code: string;
  message: string;
}>;

export const isAxiosError = (error: unknown): error is CustomError => {
  return axios.isAxiosError(error);
};
