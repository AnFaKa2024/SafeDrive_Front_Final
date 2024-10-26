
import { NovoCondProps } from "@/types";

export default function NovoCondutor({ name, value }: NovoCondProps) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6">Cadastrar Novo Condutor?</h2>
      <select
        name={name}
        id="idcond"
        className="w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
      >
        <option value={value} disabled selected>
          Selecione uma opção
        </option>
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </select>
      <button
        className="w-32 p-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
        onClick={() => alert('Confirmado!')}
      >
        Confirmar
      </button>
    </main>
  );
}