
import Image from "next/image"
import Fernanda from "../../imagens/Fernanda.png"
import Karen from "../../imagens/Karen.png"



export default function Nos(){

  return(

      <main className="flex flex-row gap-4 items-center min-h-20 p-3">
        
        <section className="justify-between flex min-h-5 w-full bg-indigo-100 rounded-lg shadow-md p-4">
          <h1 className="text-2xl font-bold text-center text-indigo-950 mb-4">DESENVOLVEDORAS</h1>
          
            <p className="text-lg font-semibold text-indigo-950 mb-2"><b>Turma: 1TDSPI</b></p>  
            
            <Image src={Fernanda} alt="Fernanda"/>
            <h2 className="text-xl font-semibold text-indigo-950"><b>Fernanda Seda</b></h2>
            <h3 className="text-indigo-950">RM 558274</h3>
          
            <Image src={Karen} alt="Karen"/>
            <h2 className="text-xl font-semibold text-indigo-950"><b>Karen Marques</b></h2>
            <h3 className="text-indigo-950">RM 554556</h3>


            <p className="text-lg font-semibold text-indigo-950 mb-2"><b>Turma: 1TDSA</b></p>

            <h2 className="text-xl font-semibold text-indigo-950"><b>Giovanna Laturague Bueno</b></h2>
            <h3 className="text-indigo-950">RM 556242</h3>
        </section>
            
        
      </main>
       
  )
}