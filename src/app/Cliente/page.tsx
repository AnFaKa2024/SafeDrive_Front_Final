"use client"

import Link from "next/link";
import { FaHome } from "react-icons/fa";

import Cliente1 from './Cliente1';
import Cliente2 from './Cliente2';
import Cliente3 from './Cliente3';

export default function Cliente(){
  return (
    
    <>
        <header className="flex items-center justify-end p-4" >
          <Link href="/" className= "botao-voltar-home -mt-24 text-white text-5xl "><FaHome className="" /></Link>
        </header>
                
          <main className='p-3 m-1'>
            <h2 className='text-center text-3xl font-semibold text-indigo-950'>Algumas Histórias de Clientes</h2>

            {/* Container para os componentes */}

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-2"> 
              <Cliente1 />
              <Cliente2 />
              <Cliente3 />
            </div>
          </main>
      
      
     
    </>
  )
}


// esta editado - falta as rotas