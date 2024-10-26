
import { DadosVeiculoProps } from "@/types"

export default function CadVeic({Categoria, Placa}:DadosVeiculoProps){

  return(

    
      <main className="bg-indigo-100 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4"><b>DADOS DO VEÍCULO</b></h2>
       
        <label htmlFor="idCat" className="block mb-2">Qual a Categoria?</label>
      
        <select name="categoria" id="idCat" className="w-full p-2 mb-4 border rounded">
          <option value=" " disabled selected>Selecione uma Categoria</option>
          <option value='Carro'> Carro</option>
          <option value='Caminhão'> Caminhão</option>
          <option value='Moto'> Moto</option>
          <option value='Onibus'> Ônibus</option>
        </select>
          <br />
          <br />
        <label htmlFor="idPlaca" className="block mb-2">Placa do Veículo</label>
        <input type="text" name='Placa' id="idPlaca" className="w-full p-2 mb-4 border rounded"/>
        <br />
        <br />
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"   onClick={()=> alert ('Confirmado!')}> Confirmar Informações </button>
        
      </main>
   

  )
}