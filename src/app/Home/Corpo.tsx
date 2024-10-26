import Link from 'next/link';
import Image from 'next/image';
import LogoAtu from '../../imagens/LogoAtu.png'
import clientes from '../../imagens/clientes.png'
import recomendacao from '../../imagens/recomendacao.png'
import historico from "../../imagens/histórico.png"
import diagnostico from "../../imagens/diagnóstico.png"
import reclamacao from "../../imagens/reclamação.png"


export default function Corpo() {
  return (
    <main className="bg-indigo-100 py-8 mt-2 shadow-md rounded-lg m-1">
      <div className="container mx-auto grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[200px]">
        
        <section className="p-4 bg-white hover:bg-indigo-50 shadow-md rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">SAFE DRIVE</h2>
          <Link href='/home/cadastrousuario'>
           <Image src={LogoAtu} className="mx-auto w-20" alt="SafeDrive" />
          </Link>
        </section>

        <section className="p-4 bg-white  hover:bg-indigo-50 shadow-md rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">CLIENTES</h2>
          <Link href='/home/cadastromecanico'>
            <Image src={clientes} className="mx-auto w-24" alt="Clientes" />
          </Link>
        </section>

        <section className="p-4 bg-white hover:bg-indigo-50  shadow-md rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">RECOMENDAÇÕES</h2>
          <Link href='/home/cadastroveiculo'>
          <Image src={recomendacao} className="mx-auto w-16" alt="Veículo" /> 
          </Link>
        </section>

        <section className="p-4 bg-white  hover:bg-indigo-50 shadow-md rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">HISTÓRICO DO VEÍCULO</h2>
          <Link href='/home/historico'>
            <Image src={historico} className="mx-auto w-16" alt="Histórico" />
          </Link>
        </section>

        <section className="p-4 bg-white hover:bg-indigo-50  shadow-md rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">DIAGNÓSTICO</h2>
          <Link href='/home/diagnostico'>
            <Image src={diagnostico} className="mx-auto w-16" alt="Diagnóstico" />
          </Link>
        </section>

        <section className="p-4 bg-white hover:bg-indigo-50  shadow-md rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">COMENTÁRIOS DOS CLIENTES</h2>
          <Link href='/home/relatos'>
            <Image src={reclamacao} className="mx-auto w-16" alt="Feedback" />
          </Link>
        </section>

      </div>
    </main>
  );
}
