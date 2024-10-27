"use client"

import InserirDefeito from "./InserirDefeito"
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Relatos(){
  return(

    <>
        <header className="flex items-center justify-end p-4" >
          <Link href="/" className= "botao-voltar-home -mt-24 text-white text-5xl "><FaHome className="" /></Link>
        </header>

      <InserirDefeito/>
    </>
  )
}