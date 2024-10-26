
import { FiltroProps } from "@/types";

export default function Filtro({FiltroAr, FiltroMotor, FiltroCombustivel}: FiltroProps){

  return(
  
    <section className="bg-gray-100 p-6 rounded-lg shadow-sm">
    
      <h2 className="text-xl font-semibold mb-4"><b>ÚLTIMA TROCA DE FILTRO</b></h2>
    
      <label htmlFor="idAr" className="block mb-2">Filtro do Ar</label> <input type="date" name="FiltroAr" id="idAr" required />
      <label htmlFor="idMotor" className="block mb-2">  Filtro do Motor</label> <input type="date" name="FiltroMotor" id="idMotor" required />
      <label htmlFor="idCombu" className="block mb-2">  Filtro do Combustível</label> <input type="date" name="FiltroCombustivel" id="idCombu" required />
      <br />
      <br />
      <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"  onClick={()=> alert ('Confirmado!')}> Confirmar Informações </button>
    </section>
  
  )
}