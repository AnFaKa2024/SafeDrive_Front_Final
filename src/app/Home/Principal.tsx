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
          {/* <nav>
            <ul className="flex justify-center space-x-8 text-3xl">
              <li>
                <Link href={'/SafeDrive'} className="hover:text-gray-300">SafeDrive</Link>
              </li>
              <li>
                <Link href={'/Cliente'} className="hover:text-gray-300">Clientes</Link>
              </li>
              <li>
                <Link href={'/Recomendacao'} className="hover:text-gray-300">Recomendações</Link>
              </li>
            </ul>
        </nav> */}
        </div>

        <div className='flex-shirink-0'>
          <Image src={perfilEd2} alt="perfilEditavel"  className='w-20 h-20 mx-0 mb-4'/>
        </div>

      </div>
    </header>
  );
}
