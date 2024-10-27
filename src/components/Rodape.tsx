"use client"

import Image from "next/image"
import atendente from "../imagens/atendente.png"


export default function Rodape() {
   
  // RODAPE GERAL
      
  return (
    <footer className="mt-1 bg-indigo-700 rounded-lg shadow-md text-white flex flex-col items-center p-1 m-1 ">
      <div className="flex items-center w-full justify-center">
        <div className="flex-shrink-0 mr-4">
          <Image src={atendente} alt="assistente virtual" className="w-20 h-22 " />
        </div>
        <h2 className="text-center text-lg font-semibold">
          FALE CONOSCO ATRAVÉS DA NOSSA ASSISTENTE VIRTUAL
        </h2>
      </div>
  
      <div className="text-center">
        <p className="text-xl mb-2">Contato</p>
        <p className="text-m">
          e-mail: safedrive@atendimentosafedrive.com.br | +55 11 3456-6782
        </p>
      </div>
    </footer>
  )
}  