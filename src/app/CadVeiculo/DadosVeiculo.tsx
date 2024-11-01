import { DadosVeiculoProps } from "@/types";

export default function CadVeic({ Categoria, Placa, handleInputChange }: DadosVeiculoProps & { handleInputChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void }) {
  return (
    <main className="bg-indigo-100 p-2 rounded-lg shadow-sm">
      <h1 className="text-center mt-2 text-3xl  text-indigo-950"><b>DADOS DO VEÍCULO</b></h1>
       
      <div className="flex justify-evenly">
        <div>
          <label htmlFor="idCat" className="block text-indigo-950 text-2xl text-center mb-2">Qual a Categoria?</label>
          <select name="Categoria" id="idCat" className="w-25 p-2 mb-4 border rounded border-indigo-400" value={Categoria} onChange={handleInputChange}>
            <option value="" disabled selected>Selecione uma Categoria</option>
            <option value='Carro'>Carro</option>
            <option value='Caminhão'>Caminhão</option>
            <option value='Moto'>Moto</option>
            <option value='Onibus'>Ônibus</option>
          </select>
        </div>
            
        <div>
          <label htmlFor="idPlaca" className="block text-indigo-950 text-center text-2xl mb-2">Placa do Veículo</label>
          <input 
            type="text" 
            name='Placa' 
            id="idPlaca" 
            className="w-25 p-2 mb-4 hover:bg-indigo-50 border rounded border-indigo-400"
            value={Placa} 
            onChange={handleInputChange}
          />
        </div>
      </div>
    </main>
  );
}
