

export default function Acesso() {
  return (

    <>
      
      <header className="mt-15 p-4 m-1 rounded-lg shadow-md bg-indigo-950">
        
        <h1 className="text-3xl text-center mb-4 font-bold text-white">Acessar a Plataforma</h1>
        
        <select defaultValue="" id="idacesso" className="block w-full p-2 mb-4 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
        
          <option value="" disabled className="text-center text-indigo-950">Selecione uma opção</option>
          <option value="sim" className="text-center" >Desaja fazer um cadastros?</option>
          <option value="nao" className="text-center" >Acessar com Login e Senha</option>
        
        </select>

        <button
          className="w-full p-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition duration-200"
          onClick={() => alert('Confirmado!')}>Confirmar</button>

      </header>
    </>
  );
}