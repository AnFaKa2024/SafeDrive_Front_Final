"use client"

import Image from "next/image";
import LG_SafeDrive from '../imagens/LG_SafeDrive.png'



{/*  CABEÇALHO GERAL DA PÁGINA DE ACESSO */}


export default function CabecalhoAcesso() {
  
  return (
    <header className="bg-indigo-700 p-4 m-1 rounded-lg shadow-md min-h-20 flex items-center justify-between ">
      
      

        <div className="flex-shirink-0">
          <Image src={LG_SafeDrive} alt="logo SD" className="w-20 h-20 mx-0 mb-4" />
        </div>
          
        <h1 className="text-white text-6xl font-sans-optima flex-grow text-center"><b>SafeDrive</b></h1>
        
                  
   
    </header>
  )
}