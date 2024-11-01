import { FluidoProps } from "@/types";


export default function Fluido({ OleoMotor, OleoFreio, AguaRadiador, handleInputChange }: FluidoProps & { handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <section className="bg-indigo-100 p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl text-center text-bold text-indigo-950 mb-4"><b>ÚLTIMA TROCA DE FLÚIDOS</b></h2>
    
      <div className="flex justify-evenly">
        <div>
          <label htmlFor="idOleoMotor" className="block text-center text-2xl mb-2 text-indigo-950">Óleo do Motor</label>  
          <input type="date" className="text-center text-indigo-950 border rounded border-indigo-400" name="OleoMotor" id="idOleoMotor" value={OleoMotor} onChange={handleInputChange} required />
        </div>
        
        <div>
          <label htmlFor="idOleoFreio" className="block text-center text-2xl mb-2 text-indigo-950">Óleo do Freio</label> 
          <input type="date" className="text-center text-indigo-950 border rounded border-indigo-400" name="OleoFreio" id="idOleoFreio" value={OleoFreio} onChange={handleInputChange} required />
        </div>
        
        <div>
          <label htmlFor="idAguaRadiador" className="block text-center text-2xl mb-2 text-indigo-950">Água do Radiador</label>  
          <input type="date" className="text-center text-indigo-950 border rounded border-indigo-400" name="AguaRadiador" id="idAguaRadiador" value={AguaRadiador} onChange={handleInputChange} required />
        </div>
      </div>
    </section>        
  );
}
