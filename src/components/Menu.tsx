"use client"

import Link from "next/link"

export default function Menu(){

  return(

    <nav className="flex">
      <ul className="flex gap-6 links">
        <li><Link href={'/Home'}>HOME</Link></li>
        <li><Link href={'/CadMecanico'}>Cadastro do Mecanico</Link></li>
        <li><Link href={'/CadUsuario'}>Cadastro do Usuario</Link></li>
        <li><Link href={'/CadVeiculo'}>Cadastro do Veiculo</Link></li>
        <li><Link href={'/Cliente'}>Cliente</Link></li>
        <li><Link href={'/Diagnostico'}>Diagnóstico</Link></li>
        <li><Link href={'/Historico'}>Historico</Link></li>
        <li><Link href={'/Recomendacao'}>Recomendações</Link></li>
        <li><Link href={'/SafeDrive'}>SafeDrive</Link></li>
      </ul>
    </nav>
  )
}



