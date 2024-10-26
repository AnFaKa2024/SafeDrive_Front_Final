"use client"

export default function Historico(){

  return(
    
    <div className="container mx-auto px-4 py-8">
        <main className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-gray-800"> Por que pedimos informações do veículo?</h1>
        
        <p className="text-gray-700 mb-6"> Com intuido de prestar o melhor serviço aos nossos clientes, necessitamos
          saber das manuteções realizadas e quando foram feitas, assim como precisamos saber 
          sobre trocas de baterias e quais quer outras manuteções e consertos realizados no veículo.
        </p>
        </main>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4"><b>INFORMAÇÕES DE USO DO VEÍCULO</b></h2>
          <div className="space-y-6">
          
          <div>
            <label htmlFor="idkm" className="block text-gray-700 font-medium mb-2"> Qual a km atual? </label>
            <input type="text" name="km" id="idkm" />
          </div>
          
          <div>
            <label htmlFor="idpneu" className="block text-gray-700 font-medium mb-2"> Quando foi a ultima calibragem dos pneus? </label>
            <input type="date" name="pneu" id="idpneu"/>
          </div>

          <div>
            <label htmlFor="idpneuT" className="block text-gray-700 font-medium mb-2"> Já trocou os pneus? </label>
            <select name="pneuT" id="idpneuT" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
              <option value="" disabled> Selecione uma opção </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select> 
          </div>
          
          <div>
            <label htmlFor="quais?" className="block text-gray-700 font-medium mb-2">Se sim, quantos pneus trocou? </label>
            <input type="text" />
          </div>
          
          <div>
            <label htmlFor="idql" className="block text-gray-700 font-medium mb-2">  Caso tenha trocado, quando foi? </label>
            <input type="date" name="datatroca" id="iddataT" required />
          </div>
            
          <button onClick={()=> alert ()} className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none"> Confirmar Informações </button>
        </div>
      </section>
    </div>
    
  )
}