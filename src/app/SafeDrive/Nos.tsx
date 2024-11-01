
import Image from "next/image"
import Fernanda from "../../imagens/Fernanda.png"
import Karen from "../../imagens/Karen.png"
import Giovanna from "../../imagens/giovanna.png"



export default function Nos(){

  return(

    <main className="flex flex-col mt-6 items-center min-h-20 p-1">
        <h1 className="text-2xl font-bold text-indigo-950 mr-8">DESENVOLVEDORAS</h1>

      <section className="flex flex-row  justify-evenly gap-8 w-full bg-indigo-100 rounded-lg shadow-md p-4">
        {/* Grupo de cada desenvolvedora com turma, foto, nome e RM */}
        <div className="flex flex-col gap-2 items-center ">
          <p className="text-lg font-semibold text-indigo-950"><b>Turma: 1TDSPI</b></p>
          <Image src={Fernanda} alt="Fernanda" className="rounded-full"/>
          <h2 className="text-xl font-semibold text-indigo-950">Fernanda Seda</h2>
          <h3 className="text-indigo-950">RM 558274</h3>
        </div>

        <div className="flex flex-col gap-2  items-center ">
          <p className="text-lg font-semibold text-indigo-950"><b>Turma: 1TDSPI</b></p>
          <Image src={Karen} alt="Karen" className="rounded-full"/>
          <h2 className="text-xl font-semibold text-indigo-950">Karen Marques</h2>
          <h3 className="text-indigo-950">RM 554556</h3>
        </div>

        <div className="flex flex-col gap-2 items-center ">
          <p className="text-lg font-semibold text-indigo-950"><b>Turma: 1TDSA</b></p>
          <Image src={Giovanna} alt="Giovanna" className="rounded-full"/>
          <h2 className="text-xl font-semibold text-indigo-950">Giovanna Laturague Bueno</h2>
          <h3 className="text-indigo-950">RM 556242</h3>
        </div>
      </section>
    </main>

        
  )
}