import IConfig from '../interface/IConfig';
import Resource from './Resource';
import { IClientConsultaResponse } from './interface/IClientResponse';
export default class Cliente extends Resource {
    constructor(config: IConfig);
    consulta(): Promise<IClientConsultaResponse>;
}
