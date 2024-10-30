"use client"

import CadCondutor from "./CadCondutor";
import RodapeCad from "@/components/RodapeCad";


export default function Condutor(){

  const NomeCondutor = "João";
  const dataNascimento = new Date("1990-10-02").toISOString().split('T')[0];
  const cnh = 123456789;
 

  return(


    <>

      <CadCondutor
        NomeCondutor={NomeCondutor}
        DN={dataNascimento}
        Cnh={cnh}/>
      
      <RodapeCad/>

    </>
  )
}