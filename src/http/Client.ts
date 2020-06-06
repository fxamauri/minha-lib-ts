import IConfig from '../interface/IConfig';
import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'Axios';
import IApiResponse from './interface/IApiResponse';
import SimetraApiError from './SimetraApiError';
import IRequest from './interface/IRequest';

class Client {
  protected _httpClient: AxiosInstance;
  constructor(config: IConfig) {
    this._httpClient = Axios.create({
      baseURL: config.baseURI,
      timeout: 30000,
    });
  }

  protected successResponse(
    data: Pick<AxiosResponse, 'data'>,
    statusCode: number
  ): IApiResponse {
    return {
      data,
      statusCode,
    };
  }

  protected errorResponse(
    data: Pick<IApiResponse, 'data'>,
    statusCode: number
  ): SimetraApiError {
    return new SimetraApiError('Error', data, statusCode);
  }

  public async request({
    method,
    url = '',
    params = {},
    body = {},
    headers = {},
  }: IRequest): Promise<IApiResponse | any> {
    try {
      const axiosConfig: AxiosRequestConfig = {
        data: body,
        url,
        params,
        method,
        headers,
      };

      const { data, status } = await this._httpClient(axiosConfig);
      return this.successResponse(data, status);
    } catch (error) {
      const {
        response: { data, status },
      } = error;
      return this.errorResponse(data, status);
    }
  }

  public get({
    url = '',
    params = {},
    body = {},
    headers = {},
  }: Omit<IRequest, 'method'>): Promise<IApiResponse | any> {
    return this.request({ method: 'get', body, headers, params, url });
  }

  public post({
    url = '',
    params = {},
    body = {},
    headers = {},
  }: Omit<IRequest, 'method'>): Promise<IApiResponse | any> {
    return this.request({ method: 'post', body, headers, params, url });
  }

  public delete({
    url = '',
    params = {},
    body = {},
    headers = {},
  }: Omit<IRequest, 'method'>): Promise<IApiResponse | any> {
    return this.request({ method: 'delete', body, headers, params, url });
  }

  public put({
    url = '',
    params = {},
    body = {},
    headers = {},
  }: Omit<IRequest, 'method'>): Promise<IApiResponse | any> {
    return this.request({ method: 'put', body, headers, params, url });
  }
}

export default Client;
