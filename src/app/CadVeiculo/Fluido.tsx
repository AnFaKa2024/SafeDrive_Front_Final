
import { FluidoProps } from "@/types";

export default function Fluido({OleoMotor, OleoFreio, AguaRadiador}: FluidoProps){

  return(
    <div className="bg-indigo-100 p-6 rounded-lg shadow-sm">
    
      <h2 className="text-xl text-center text-bold text-indigo-950 font-semibold mb-4"><b>ÚLTIMA TROCA DE FLÚIDOS</b></h2>
    
    <section className= "flex justify-around">
     
      <label htmlFor="idmotor" className="block mb-2 text-indigo-950"> Óleo do Motor</label>  
        <input type="date"  id="idmotor" required />
      <label htmlFor="idmotor" className="block mb-2 text-indigo-950"> Óleo do Freio</label> 
        <input type="date" id="idmotor" required />
      <label htmlFor="idmotor" className="block mb-2 text-indigo-950"> Água do Radiador</label>  
        <input type="date"  id="idmotor" required />
          
    </section>
    
      <button className= "w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"  onClick={()=> alert ('Confirmado!')}> Confirmar Informações </button>
    
    </div>        
  )
}