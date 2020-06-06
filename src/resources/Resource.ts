import Client from '../http/Client';
import IConfig from '../interface/IConfig';

export default class Resource {
  protected _httpClient: Client;

  constructor(config: IConfig) {
    this._httpClient = new Client(config);
  }

  protected get httpClient(): Client {
    return this._httpClient;
  }
}
