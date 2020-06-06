interface IRequisicao {
  CNPJ_CPF_CLIE: string;
}

interface IRetorno {
  codigo: string;
  mensagem: string;
}

interface IFaturaCliente {
  COD_CLIE: number;
  RZAO_SOCL_CLIE: string;
  DAT_NASC: string;
  STATUS: string;
  TELEFONE1: string;
}

export interface IClientConsultaResponse {
  FAT_CLIENTE: IFaturaCliente;
}
