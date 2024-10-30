
import { FluidoProps } from "@/types";
import { FaCheck, FaTrash } from 'react-icons/fa';

export default function Fluido({OleoMotor, OleoFreio, AguaRadiador}: FluidoProps){

  return(
    <section className="bg-indigo-100 p-6 rounded-lg shadow-sm">
    
      <h2 className="text-2xl text-center text-bold text-indigo-950 mb-4"><b>ÚLTIMA TROCA DE FLÚIDOS</b></h2>
    
      <div className= "flex justify-evenly">
      
        <div>
          <label htmlFor="idmotor" className="block text-center text-2xl mb-2 text-indigo-950"> Óleo do Motor</label>  
          <input type="date" className="text-center text-indigo-950 border rounded border-indigo-400" id="idmotor" required />
        </div>
        
        <div>
          <label htmlFor="idmotor" className="block text-center text-2xl mb-2 text-indigo-950"> Óleo do Freio</label> 
          <input type="date" className="text-center text-indigo-950 border rounded border-indigo-400" id="idmotor" required />
        </div>
        
        <div>
          <label htmlFor="idmotor" className="block text-center text-2xl mb-2 text-indigo-950"> Água do Radiador</label>  
          <input type="date" className="text-center text-indigo-950 border rounded border-indigo-400"  id="idmotor" required />
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