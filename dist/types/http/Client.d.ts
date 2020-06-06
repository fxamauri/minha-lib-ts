import IConfig from '../interface/IConfig';
import { AxiosInstance, AxiosResponse } from 'Axios';
import IApiResponse from './interface/IApiResponse';
import SimetraApiError from './SimetraApiError';
import IRequest from './interface/IRequest';
declare class Client {
    protected _httpClient: AxiosInstance;
    constructor(config: IConfig);
    protected successResponse(data: Pick<AxiosResponse, 'data'>, statusCode: number): IApiResponse;
    protected errorResponse(data: Pick<IApiResponse, 'data'>, statusCode: number): SimetraApiError;
    request({ method, url, params, body, headers, }: IRequest): Promise<IApiResponse | any>;
    get({ url, params, body, headers, }: Omit<IRequest, 'method'>): Promise<IApiResponse | any>;
    post({ url, params, body, headers, }: Omit<IRequest, 'method'>): Promise<IApiResponse | any>;
    delete({ url, params, body, headers, }: Omit<IRequest, 'method'>): Promise<IApiResponse | any>;
    put({ url, params, body, headers, }: Omit<IRequest, 'method'>): Promise<IApiResponse | any>;
}
export default Client;
