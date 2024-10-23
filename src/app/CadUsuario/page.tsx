import Cabecalho from "@/components/Cabecalho";
import RodapeCad from "@/components/RodapeCad";
import DadosCondutor from "./DadosCondutor";
import DadosPessoais from "./DadosPessoais";
import ObsUser from "./ObsUser";



export default function CadUsuario(){

  return(
    <>
      <Cabecalho/>
      <head>
        <title>SAFE DRIVE - CADASTRO USUÁRIO</title>
      </head>   

       
      
      <form action="cadastro cliente" method="get">
        <DadosPessoais/>
        <DadosCondutor/>
        <ObsUser/>
      </form>
      <RodapeCad/>
       
   
    </>
  )
}