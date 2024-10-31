"use client"

import RodapeCad from "@/components/RodapeCad";
import DadosPessoais from "./DadosPessoais";
import Link from "next/link"
import { FaHome } from "react-icons/fa";



export default function CadUsuario(){

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
     
      <header className="flex items-center justify-end p-4" >
        <Link href="/Home" className= "botao-voltar-home -mt-24 text-white text-5xl "><FaHome className="" /></Link>
      </header>


      <main>
        
        <form action="cadastro cliente" method="get">
          <DadosPessoais
            Nome={valorDoNome}
            DN={valorDaDataNascimento}
            Status={valorDoStatus}
            Doc={valorDoDocumento}
            End={valorDoEndereco}
            Senha={valorDaSenha}
            Login={valorDoLogin}
            Anos={valorDosAnos}/>

          
        </form>

     
      </main>   
      
      <RodapeCad/> 
   
    </>
  )
}