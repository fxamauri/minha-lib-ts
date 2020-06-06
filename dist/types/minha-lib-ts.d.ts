import Cliente from './resources/Cliente';
import IConfig from './interface/IConfig';
export default class MinhaLibTs {
    private readonly config;
    private readonly baseURI;
    constructor(config: IConfig);
    get Cliente(): Cliente;
}
