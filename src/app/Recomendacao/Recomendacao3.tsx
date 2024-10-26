import Image from "next/image"
import rec3 from "../../imagens/rec3.jpg"

export default function Recomendacao3(){
   
  
    return (
      <section className="max-w-2xl m-2 bg-indigo-200 rounded-lg shadow-md p-6">
        <Image src={rec3} alt="rec3"  className="w-100 h-100 h-auto rounded mb-4"/>
        
          <p className="text-lg mb-4 text-justify"><b>7. Mantenha uma rotina de limpeza:</b> Uma limpeza regular do interior e exterior do carro é essencial.</p>
          
          <p className="text-lg mb-4 text-justify"><b>8. Cuide para evitar danos na lataria:</b> Procure evitar pancadas graves e, se necessário, recorra a serviços de lanternagem para reparos.</p>
         
           
          <p className="text-lg mb-4 text-justify"><b>9. Observe e corrija ruídos:</b> Ruídos estranhos podem indicar problemas mecânicos que precisam ser corrigidos rapidamente.</p>
        
      </section>
    )
  }
  