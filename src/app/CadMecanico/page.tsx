"use client"
import Cabecalho from "@/components/Cabecalho";
import RodapeCad from "@/components/RodapeCad";
import CadOficina from "./CadOficina";
import CadMeca from "./CadMeca";


export default function CadMecanico(){

const valorDoNome = "João";
const valorDaDataNascimento = new Date("1990-10-02");
const valorDoStatus = "Ativo";
const valorDoDocumento = 123456789;
const valorDoEndereco = "Rua Exemplo, 123";
const valorDaSenha = "senhaSegura";
const valorDoLogin = "joaoLogin";
const valorDosAnos = 10;


  return(

  <>
    <Cabecalho/>
    
    <header className="p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-gray-800 mb-6">Seja um de nossos PARCEIROS</h1>
    </header>
    
    <CadMeca  Nome={valorDoNome}
      DN={valorDaDataNascimento}
      Status={valorDoStatus}
      Doc={valorDoDocumento}
      End={valorDoEndereco}
      Senha={valorDaSenha}
      Login={valorDoLogin}
      Anos={valorDosAnos}/>
        
    <CadOficina NomeFantasia={valorDoNome} EndOficina={valorDoEndereco}
      />
    
    <RodapeCad/>
  </>
    
  )
}