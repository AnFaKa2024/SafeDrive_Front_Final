"use client"


import Link from "next/link";
import { FaHome } from "react-icons/fa";
import Feedback from "./Feedback";

export default function Relatos(){
  return(

    <>
        <header className="flex items-center justify-end p-4" >
          <Link href="/Home" className= "botao-voltar-home -mt-24 text-white text-5xl "><FaHome className="" /></Link>
        </header>

        <Feedback/>
    </>
  )
}