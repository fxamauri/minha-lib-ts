import IConfig from '../interface/IConfig';
import Resource from './Resource';
import { IClientConsultaResponse } from './interface/IClientResponse';

export default class Cliente extends Resource {
  constructor(config: IConfig) {
    super(config);
  }

  public async consulta(): Promise<IClientConsultaResponse> {
    const { data } = await this.httpClient.post({
      params: {
        sNomeProc: '',
        sSenha: '',
        sUser: '',
      },
    });
    const {
      FAT_CLIENTE: { COD_CLIE, DAT_NASC, RZAO_SOCL_CLIE, STATUS, TELEFONE1 },
    } = data;
    return {
      FAT_CLIENTE: {
        COD_CLIE,
        DAT_NASC,
        RZAO_SOCL_CLIE,
        STATUS,
        TELEFONE1,
        ...data,
      },
    };
  }
}
