"use client"

import Link from "next/link";
import { FaHome } from "react-icons/fa";
import Nos from "./Nos";
import Texto from "./Texto";

export default function SafeDrive(){

  return(

    <>
       <header className="flex items-center justify-end p-4" >
          <Link href="/Home" className= "botao-voltar-home -mt-24 text-white text-5xl "><FaHome className="" /></Link>
        </header>
      <Texto/>
      <Nos/>


    </>
  )
}