
import { DadosVeiculoProps } from "@/types"
import { FaCheck, FaTrash } from 'react-icons/fa';

export default function CadVeic({Categoria, Placa}:DadosVeiculoProps){

  return(

      <>
      
      <main className="bg-indigo-100 p-2 rounded-lg shadow-sm">
      <h1 className="text-center mt-2 text-3xl  text-indigo-950"><b>DADOS DO VEÍCULO</b></h1>
       
        <div className="flex justify-evenly">
          <div>
            <label htmlFor="idCat" className="block text-indigo-950 text-2xl text-center mb-2"><b>Qual a Categoria?</b></label>
              <select name="categoria" id="idCat" className="w-25 p-2 mb-4 border rounded border-indigo-400">
                <option value=" " disabled selected>Selecione uma Categoria</option>
                <option value='Carro'> Carro</option>
                <option value='Caminhão'> Caminhão</option>
                <option value='Moto'> Moto</option>
                <option value='Onibus'> Ônibus</option>
              </select>
          </div>
            
          <div>
            <label htmlFor="idPlaca" className="block text-indigo-950 text-center text-2xl mb-2"><b>Placa do Veículo</b></label>
            <input type="text" name='Placa' id="idPlaca" className="w-25 p-2 mb-4 hover:bg-indigo-50 border rounded border-indigo-400"/>
          </div>
        </div>
        
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
        
      </main>
      </>

  )
}