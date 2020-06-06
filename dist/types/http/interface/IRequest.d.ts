export declare type Method = 'get' | 'GET' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH' | 'link' | 'LINK' | 'unlink' | 'UNLINK';
export default interface IRequest {
    method?: Method;
    url?: string;
    params?: any;
    body?: any;
    headers?: any;
}
