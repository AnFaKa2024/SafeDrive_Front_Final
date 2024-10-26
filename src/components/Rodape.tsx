"use client"

import Image from "next/image"
import assist_virtual from "../imagens/assitent_virtual.png"


export default function Rodape() {
   
  // RODAPE GERAL
      
    return (
      <footer className="mt-3 bg-indigo-950 rounded-lg shadow-md text-white flex justify-center items-center m-1">
                  
        <h2 className="text-center text-lg font-semibold mb-2">FALE CONOSCO ATRAVÉS DO NOSSO ASSISTENTE VIRTUAL</h2>
        <Image src={assist_virtual} alt="assistente virtual" className=""/>
        <p className='text-xl mb-2'>Contato</p>
        <p className=" text-m"> e-mail: safedrive@atendimentosafedrive.com.br  |  +55 11 3456-6782 </p>
       
      </footer>  
    )
}
