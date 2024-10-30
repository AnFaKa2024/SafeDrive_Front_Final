"use client"
import Link from 'next/link';
import Image from 'next/image';
import perfilEd2 from '../../imagens/perfilEd2.png'



export default function Principal() {
  return (
    <header className=" text-indigo-950 py-6 shadow-md rounded-lg m-1">
      <div className="container mx-auto flex items-center justify-between">
        
        <div className="text-center flex-grow">
          <h1 className="text-5xl font-bold mb-4">Olá, seja bem vindo!</h1>
      
        </div>

        <Link  href="/Perfil" >
          <div className='flex-shirink-0'>
          <Image src={perfilEd2} alt="perfilEditavel"  className='w-28 h-28 mx-0 mb-4'/>
        </div>
        </Link>

      </div>
    </header>
  );
}
