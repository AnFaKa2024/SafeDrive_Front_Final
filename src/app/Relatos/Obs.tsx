

export default function Observacao() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <legend className="text-lg font-bold mb-4" id="idObs">
        <b>Gostaria de relatar alguma OBSERVAÇÃO?</b>
      </legend>
      <textarea
        name="Observacao"
        id="idObs"
        className="w-full h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
        placeholder="Digite sua observação aqui..."
      ></textarea>
      
      <button
        className="mt-4 w-full p-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition duration-200"
        onClick={() => alert('Informações ENVIADAS com sucesso')}
      >
        Enviar Informações
      </button>
   
    </div>
  )
}
