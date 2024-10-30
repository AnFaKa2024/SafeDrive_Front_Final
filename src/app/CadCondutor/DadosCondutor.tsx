
import { CondutorProps } from "@/types"
import { FaCheck, FaTrash } from 'react-icons/fa';


export default function DadosCondutor({ Sim, Nao, Cnh, NomeCondutor, DN, Status, EndCondutor }: CondutorProps) {
  return (
    <main className="p-3 m-1 bg-indigo-200 rounded-lg shadow-lg ">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800">DADOS DO CONDUTOR</h2>

      <h3 className="text-lg font-semibold text-indigo-950 mb-2">São os mesmos dados cadastrados do usuário?</h3>

      <div className=" flex flex-wrap items-center gap-4 mb-4">

        <div className="flex items-center">
          <input type="radio" name="NomeCondutor" id={NomeCondutor ? 'idSim' : undefined} value="sim" className="mr-2"/>
          <label htmlFor="idSim" className="text-indigo-950 text-lg">Sim, informe o número da CNH</label>
        </div>

        <div className="flex flex-col ">
          
          <input type="text" placeholder="Número CNH" id={Cnh ? 'idCnh' : undefined} required className="w-44 px-3 py-2 border border-indigo-300 rounded-md hover:bg-indigo-50"/>
        </div>

        <h3 className="text-center text-indigo-950 mb-4 text-lg">Ou</h3>

        <div className="flex items-center">
          <input type="radio" name="condutor" id={Nao ? 'idNao' : undefined} value="não" className="mr-2"/>
          <label htmlFor="idNao" className="text-indigo-950 text-lg">Não! Por gentileza, insira os dados necessários.</label>
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
  );
}

