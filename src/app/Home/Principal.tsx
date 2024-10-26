"use client"
import Link from 'next/link';
import Image from 'next/image';
import LG_SafeDrive from '../../imagens/LG_SafeDrive.png'

export default function Principal() {
  return (
    <header className="bg-gray-900 text-white py-6 shadow-md rounded-lg m-1">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Olá, seja bem vindo ao SafeDrive</h1>
        <Image src={LG_SafeDrive} className="mx-0 mb-4 min-h-10 w-24" alt="Logo SafeDrive" />
        <nav>
          <ul className="flex justify-center space-x-8 text-3xl">
            <li>
              <Link href='/home/safedrive' className="hover:text-gray-300">SafeDrive</Link>
            </li>
            <li>
              <Link href='/home/cliente' className="hover:text-gray-300">Clientes</Link>
            </li>
            <li>
              <Link href='/home/recomendacao' className="hover:text-gray-300">Recomendações</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
