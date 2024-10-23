
export type CondutorProps ={
  idSim: boolean;
  idNao: boolean;
  idCnh: string | number; 
}

export type PessoaisProps ={
  idNome: string;
  idDN: Date;
  idStatus: string;
  idDoc: number;
  idEnd: string;
  idSenha: string;
  idLogin: string;
  idAnos: number;
}

export type NovoCondProps ={
  name: string;
  value: string | ' ';
  email: string;
 

}

export type ObsUserProps ={
  idObs: string; 
}

export type RodapeUserProps ={

}

export type FiltroProps ={
  name: string;
  data: Date;
}

export type BotoesProps ={
  BotaoSalvar: Function;
  BotaoLimpar: Function;
  BotaoConfirmar: Function;
  BotaoEnviar: Function; 
}






