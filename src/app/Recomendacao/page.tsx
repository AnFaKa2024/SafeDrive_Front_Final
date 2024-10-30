"use client"

import Link from "next/link";
import { FaHome } from "react-icons/fa";

import Recomendacao1 from './Recomendacao1';
import Recomendacao2 from './Recomendacao2';
import Recomendacao3 from './Recomendacao3';

export default function Recomendacao() {

  return (
    <>
      <header className="flex items-center justify-end p-4" >
          <Link href="/Home" className= "botao-voltar-home -mt-24 text-white text-5xl "><FaHome className="" /></Link>
      </header>
      
      <main className='grow flex flex-col'>
        
        <h2 className='text-3xl text-center mb-4  mt-2'><b>Aqui estão algumas dicas essenciais para manter seu veículo em bom estado:</b></h2>
          
          <div className='flex space-x-3 w-full'>
           <div className='flex-1'>  <Recomendacao1 /></div>
           <div className='flex-1'> <Recomendacao2 /></div>
           <div className='flex-1'> <Recomendacao3 /></div>
          </div>
        
      </main>           

    </>
  )
}