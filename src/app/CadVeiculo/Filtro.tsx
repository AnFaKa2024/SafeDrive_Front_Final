
import { FiltroProps } from "@/types";
import { FaCheck, FaTrash } from 'react-icons/fa';

export default function Filtro({FiltroAr, FiltroMotor, FiltroCombustivel}: FiltroProps){

  return(
  
    <section className="bg-indigo-100 p-6 rounded-lg shadow-sm">
    
      <h2 className="text-xl text-indigo-950 text-center font-semibold mb-4"><b>ÚLTIMA TROCA DE FILTRO</b></h2>

      <div className="flex justify-evenly"> 
        <div>
          <label htmlFor="idAr" className="block text-center text-indigo-950 mb-2">Filtro do Ar</label> <input type="date" className="text-center border rounded border-indigo-400" name="FiltroAr" id="idAr" required />
        </div>
        
        <div>
          <label htmlFor="idMotor" className="block text-center text-indigo-950 mb-2">  Filtro do Motor</label> <input type="date" className="text-center border rounded border-indigo-400" name="FiltroMotor" id="idMotor" required />
        </div>
        
        <div>
          <label htmlFor="idCombu" className="block text-center text-indigo-950 mb-2">  Filtro do Combustível</label> <input type="date" className="text-center border rounded border-indigo-400" name="FiltroCombustivel" id="idCombu" required />
        </div>
      </div>
      <br />
      
      <div className="flex justify-evenly">
        <button
          className="w-56 bg-green-600 text-white py-2 mt-2 rounded flex items-center justify-center hover:bg-green-700"
          onClick={() => alert('Confirmado!')}
        >
          <FaCheck className="mr-2" /> Confirmar Informações
        </button>
        
        <button
          className="w-56 bg-red-600 text-white py-2 mt-2 rounded flex items-center justify-center hover:bg-red-700"
          onClick={() => alert('Informações Limpas!')}
        >
          <FaTrash className="mr-2" /> Limpar Informações
        </button>
      </div>


    </section>
  
  )
}