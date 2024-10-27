"use client"

import Link from "next/link";
import { FaHome } from "react-icons/fa";
import Orcamento from "./Orcamento";





export default function ConsultaOrcamento(){

  return(

    <>

      <header className="flex items-center justify-end p-4" >
        <Link href="/" className= "botao-voltar-home -mt-24 text-white text-5xl "><FaHome className="" /></Link>
      </header>

      <Orcamento/>

      </>
    
   
  )
}