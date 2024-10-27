"use client"

import RodapeCad from "@/components/RodapeCad";
import CadOficina from "./CadOficina";
import CadMeca from "./CadMeca";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

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
     
      <header className="flex items-center justify-end p-4" >
        <Link href="/" className= "botao-voltar-home -mt-24 text-white text-5xl "><FaHome className="" /></Link>
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