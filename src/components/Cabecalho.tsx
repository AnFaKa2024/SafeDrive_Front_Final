"use client"

import Image from "next/image";
import LG_SafeDrive from '../imagens/LG_SafeDrive.png'
import Link from "next/link";

//import { HomeIcon } from '@heroicons/react/solid';


const handleHomeClick = () => {
  window.location.href = '/'; // Redireciona para a home
};

export default function Cabecalho() {
  
  return (
    <header className="bg-indigo-700 p-4 m-1 rounded-lg shadow-md min-h-20 flex items-center justify-between ">
      
      {/*  CABEÇALHO GERAL */}

        <div className="flex-shirink-0">
          <Image src={LG_SafeDrive} alt="logo SD" className="w-20 h-20 mx-0 mb-4" />
        </div>
          
        <h1 className="text-white text-6xl font-sans-optima flex-grow text-center"><b>SafeDrive</b></h1>
        
                   {/* Ícone de home */}
      {/* <button onClick={handleHomeClick} className="text-white hover:text-gray-300">
        <HomeIcon className="w-8 h-8" />
      </button>  */}
   
    </header>
  )
}