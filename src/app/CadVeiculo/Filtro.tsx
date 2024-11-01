import { FiltroProps } from "@/types";
import { FaCheck, FaTrash } from 'react-icons/fa';

export default function Filtro({ FiltroAr, FiltroMotor, FiltroCombustivel, handleInputChange }: FiltroProps & { handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <section className="bg-indigo-100 p-6 ">
      <h2 className="text-2xl text-indigo-950 text-center mb-4"><b>ÚLTIMA TROCA DE FILTRO</b></h2>

      <div className="flex justify-evenly"> 
        <div>
          <label htmlFor="idAr" className="block text-center text-2xl text-indigo-950 mb-2">Filtro do Ar</label>
          <input type="date" className="text-center border rounded border-indigo-400" name="FiltroAr" id="idAr" value={FiltroAr} onChange={handleInputChange} required />
        </div>
        
        <div>
          <label htmlFor="idMotor" className="block text-center text-2xl text-indigo-950 mb-2">Filtro do Motor</label>
          <input type="date" className="text-center border rounded border-indigo-400" name="FiltroMotor" id="idMotor" value={FiltroMotor} onChange={handleInputChange} required />
        </div>
        
        <div>
          <label htmlFor="idCombu" className="block text-center text-2xl text-indigo-950 mb-2">Filtro do Combustível</label>
          <input type="date" className="text-center border rounded border-indigo-400" name="FiltroCombustivel" id="idCombu" value={FiltroCombustivel} onChange={handleInputChange} required />
        </div>
      </div>
    </section>
  );
}
