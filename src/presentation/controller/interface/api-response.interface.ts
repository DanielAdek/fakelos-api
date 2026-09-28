import { ApiResponse } from '../../dto/response/api.response';

export interface IApiResponseBuilder {
  data?(data: object): ApiResponse;
  message?(value: string): ApiResponse;
  meta?(value: object): ApiResponse;
  error?(value: boolean): ApiResponse;
  status?(value?: number): ApiResponse;
  default?(): ApiResponse;
}

export interface IApiResponse<T> {
  message?: string;
  error?: boolean;
  status?: number;
  data?: T;
  meta?: object;
}
