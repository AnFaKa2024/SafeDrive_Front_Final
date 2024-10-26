"use client"


import Rodape from "@/components/Rodape"
import Carrossel from "@/components/Carrossel"
import Login from "./OqCadastrar/Login"

export default function PrimeiroAcesso(){
  return(

    <main className="grow flex flex-col gap-10 justify-center items-center">
   
      <Login/>
      <Carrossel/>
     
    </main>
  )
}
