import Cliente from './resources/Cliente';
import IConfig from './interface/IConfig';

export default class MinhaLibTs {
  private readonly config: IConfig;
  private readonly baseURI =
    'https://subdominiominhaurl.minhaurl.com.br/SimetraRestFitTelecom';

  constructor(config: IConfig) {
    config = {};
    this.config = {
      ...config,
      baseURI: config.baseURI ?? this.baseURI,
    };
  }

  get Cliente(): Cliente {
    return new Cliente(this.config);
  }
}

(async () => {
  const simetraLib = new MinhaLibTs({});
  console.log(simetraLib)
})();
