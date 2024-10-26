"use client"

import Cabecalho from "@/components/Cabecalho";
import RodapeCad from "@/components/RodapeCad";
import DadosCondutor from "./DadosCondutor";
import DadosPessoais from "./DadosPessoais";
import ObsUser from "./ObsUser";



export default function CadUsuario(){

  const valorDoNome = "João";
  const valorDaDataNascimento = new Date("1990-10-02");
  const valorDoStatus = "Ativo";
  const valorDoDocumento = 123456789;
  const valorDoEndereco = "Rua Exemplo, 123";
  const valorDaSenha = "senhaSegura";
  const valorDoLogin = "joaoLogin";
  const valorDosAnos = 10;
   const valorDoSim = true;
  const valorDoNao = false;
  const valorDoCnh = 123456789;
  const valorDoNomeCondutor = "João";
  
    
  return(
    <>
      <Cabecalho/>
      <head>
        <title>SAFE DRIVE - CADASTRO USUÁRIO</title>
      </head>         
      
      <form action="cadastro cliente" method="get" className="bg-white p-8 shadow-md rounded-lg space-y-6 max-w-lg mx-auto">
        <DadosPessoais
          Nome={valorDoNome}
          DN={valorDaDataNascimento}
          Status={valorDoStatus}
          Doc={valorDoDocumento}
          End={valorDoEndereco}
          Senha={valorDaSenha}
          Login={valorDoLogin}
          Anos={valorDosAnos}/>
        
        <DadosCondutor
          Sim={valorDoSim}
          Nao={valorDoNao}
          Cnh={valorDoCnh}  
          NomeCondutor={valorDoNomeCondutor}
          DN={valorDaDataNascimento}
          Status={valorDoStatus}
          Doc={valorDoDocumento}
          EndCondutor={valorDoEndereco}/>
          
        
        <ObsUser />
      </form>
      <RodapeCad/>
       
   
    </>
  )
}