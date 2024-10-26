
import { CondutorProps } from "@/types"


export default function DadosCondutor({ Sim, Nao, Cnh, NomeCondutor, DN, Status, Doc, EndCondutor }: CondutorProps) {
  return (
    <main className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800">DADOS DO CONDUTOR</h2>

      <h3 className="text-lg font-semibold text-gray-700 mb-2">São os mesmos dados cadastrados do usuário?</h3>

      <div className="flex items-center mb-4">
        <input
          type="radio"
          name="NomeCondutor"
          id={NomeCondutor ? 'idSim' : undefined}
          value="sim"
          className="mr-2"
        />
        <label htmlFor="idSim" className="text-gray-600">Sim, informe o número da CNH</label>
      </div>

      <div className="mb-4">
        <label htmlFor="Cnh" className="block text-gray-600">Número CNH</label>
        <input
          type="number"
          placeholder="Número CNH"
          id={Cnh ? 'idCnh' : undefined}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <h4 className="text-center text-gray-500 mb-4">Ou</h4>

      <div className="flex items-center mb-4">
        <input
          type="radio"
          name="condutor"
          id={Nao ? 'idNao' : undefined}
          value="não"
          className="mr-2"
        />
        <label htmlFor="idNao" className="text-gray-600">Não! Por gentileza, insira os dados necessários.</label>
      </div>

      <button
        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        onClick={() => alert('Confirmado!')}
      >
        Confirmar Informações
      </button>
    </main>
  );
}

