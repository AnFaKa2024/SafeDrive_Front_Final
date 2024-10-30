"use client"

import RodapeCad from "@/components/RodapeCad";
import DadosCondutor from "./DadosCondutor";
import DadosPessoais from "./DadosPessoais";
import carro from "../../imagens/carro.png"
import Link from "next/link"
import Image from "next/image"
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
   const valorDoSim = true;
  const valorDoNao = false;
  const valorDoCnh = 123456789;
  const valorDoNomeCondutor = "João";
  
    
  return(
    <>
     
      <header className="flex items-center justify-end p-4" >
        <Link href="/" className= "botao-voltar-home -mt-24 text-white text-5xl "><FaHome className="" /></Link>
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
          
          <DadosCondutor
            Sim={valorDoSim}
            Nao={valorDoNao}
            Cnh={valorDoCnh}  
            NomeCondutor={valorDoNomeCondutor}
            DN={valorDaDataNascimento}
            Status={valorDoStatus}
            Doc={valorDoDocumento}
            EndCondutor={valorDoEndereco}/>  
          
        </form>

      <section className="p-4 bg-white hover:bg-indigo-50  shadow-md rounded-lg text-center">
        <h2 className="text-xl font-semibold mb-2">CADASTRO DE VEÍCULO</h2>
        <Link href={'/CadVeiculo'}>
          <Image src={carro} className="mx-auto w-16" alt="Veículo" />
        </Link>
      </section>
      </main>   
      
      <RodapeCad/> 
   
    </>
  )
}