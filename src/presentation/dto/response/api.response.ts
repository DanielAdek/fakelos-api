import { ResponseStatus } from '../../../domain/enum/api-response.enum';
import {
  IApiResponse,
  IApiResponseBuilder,
} from '../../controller/interface/api-response.interface';

export class ApiResponse implements IApiResponseBuilder {
  private readonly map: Map<any, any>;

  constructor() {
    this.map = new Map();
  }

  private reset(): ApiResponse {
    this.map.clear();
    return this;
  }

  public data(value: object): ApiResponse {
    this.map.set('data', value);
    return this;
  }

  public message(value: string): ApiResponse {
    this.map.set('message', value);
    return this;
  }

  public error(value: boolean): ApiResponse {
    this.map.set('error', value);
    return this;
  }

  public status(value: number): ApiResponse {
    this.map.set('status', value);
    return this;
  }

  public meta(value: object): ApiResponse {
    this.map.set('meta', value);
    return this;
  }

  public success(): ApiResponse {
    this.reset().message(ResponseStatus.SUCCESS).error(false).status(200);
    return this;
  }

  public exception(e: string, code: number = 500): ApiResponse {
    this.reset().message(e || ResponseStatus.FAILED).error(true).status(code);
    return this;
  }

  public build(): IApiResponse<any> {
    return Object.fromEntries(this.map) as IApiResponse<any>;
  }
}

export const ApiResponseBuilder = new ApiResponse();
