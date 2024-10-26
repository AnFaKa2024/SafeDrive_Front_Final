
export type CondutorProps ={
  Sim: boolean;
  Nao: boolean;
  Cnh: string | number;  
  NomeCondutor: string;
  DN: Date;
  Status: string;
  Doc: number;
  EndCondutor: string;
}

export type PessoaisProps ={
  Nome: string;
  DN: Date;
  Status: string;
  Doc: number;
  End: string;
  Senha: string;
  Login: string;
  Anos: number;
}

export type OficinaProps ={
  NomeFantasia: string;
  EndOficina: string;
}

export type DadosVeiculoProps ={
  Categoria: string;
  Placa: string;
 
  }

export type FiltroProps ={
  FiltroAr: Date;
  FiltroMotor: Date;
  FiltroCombustivel: Date;
 
}

export type FluidoProps ={
  OleoMotor: Date;
  OleoFreio: Date;
  AguaRadiador: Date;

}

export type NovoCondProps ={
  name: string;
  value: string | ' ';
  email: string;
}

export type RodapeUserProps ={
}


export type BotoesProps ={
  BotaoSalvar: Function;
  BotaoLimpar: Function;
  BotaoConfirmar: Function;
  BotaoEnviar: Function; 
}






