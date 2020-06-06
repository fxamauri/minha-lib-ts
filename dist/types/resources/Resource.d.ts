import Client from '../http/Client';
import IConfig from '../interface/IConfig';
export default class Resource {
    protected _httpClient: Client;
    constructor(config: IConfig);
    protected get httpClient(): Client;
}
