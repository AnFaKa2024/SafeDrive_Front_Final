"use client"

import Link from "next/link"
import Image from "next/image"
import icone_cliente_preto from "../../imagens/icone_cliente_preto.png"
import condutorFundo from '../../imagens/condutorFundo.png'
import oficina from "../../imagens/oficina.png"
import carro from "../../imagens/carro.png"


export default function NovoCadastro(){

  return(

    <main className="bg-indigo-100 p-3 mt-2 shadow-md rounded-lg m-1">

      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 min-h-[200px]">

      <section className="p-4 bg-white hover:bg-indigo-50 shadow-md rounded-lg text-center">
        <h2 className="text-xl font-semibold mb-2">CADASTRO DE USUÁRIO</h2>
        <Link href={'/CadUsuario'}>
          <Image src={icone_cliente_preto} className="mx-auto w-16" alt="Cliente" />
        </Link>
      </section>

      <section className="p-4 bg-white hover:bg-indigo-50 shadow-md rounded-lg text-center">
        <h2 className="text-xl font-semibold mb-2">CADASTRO DE CONDUTOR</h2>
        <Link href={'/CadaUsuario'}>
          <Image src={condutorFundo} className="mx-auto w-20" alt="Cliente" />
        </Link>
      </section>

      <section className="p-4 bg-white  hover:bg-indigo-50 shadow-md rounded-lg text-center">
        <h2 className="text-xl font-semibold mb-2">CADASTRO DA OFICINA MECÂNICA</h2>
        <Link href={'/CadMecanico'}>
          <Image src={oficina} className="mx-auto w-16" alt="Mecânica" />
        </Link>
      </section>

      <section className="p-4 bg-white hover:bg-indigo-50  shadow-md rounded-lg text-center">
        <h2 className="text-xl font-semibold mb-2">CADASTRO DE VEÍCULO</h2>
        <Link href={'/CadVeiculo'}>
          <Image src={carro} className="mx-auto w-16" alt="Veículo" />
        </Link>
      </section>
      </div>

    </main>
  )
}