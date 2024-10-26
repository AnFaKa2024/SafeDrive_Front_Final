export default function(){

  return(
    <div className="container mx-auto px-4 py-8">
      
       <main className="bg-indigo-200 p-6 rounded-lg shadow-md hover:bg-indigo-50">
      
        <h1 className="text-3xl text-center font-bold mb-4 text-indigo-950"><strong>Por que pedimos informações do veículo?</strong></h1>
        
        <p className="text-indigo-950 text-xl text-center mb-2" > Com intuido de prestar o melhor serviço aos nossos clientes, necessitamos
          saber das manuteções realizadas e quando foram feitas, assim como precisamos saber 
          sobre trocas de baterias e quais quer outras manuteções e consertos realizados no veículo.
        </p>
    
      </main>

      <section className="mt-8 bg-indigo-200 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl text-center font-semibold text-indigo-950 mb-4"><b>INFORMAÇÕES DE USO DO VEÍCULO</b></h2>
        <div className="space-y-3">
        
        <div>
          <label htmlFor="idkm" className="block text-lg text-indigo-950 font-medium mb-2"> Qual a km atual? </label>
          <input type="text" name="km" id="idkm"  className="px-4 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:border-indigo-500"/>
        </div>
        
        <div>
          <label htmlFor="idpneu" className="block text-lg text-indigo-950 font-medium mb-2"> Quando foi a ultima calibragem dos pneus? </label>
          <input type="date" name="pneu" id="idpneu" className="px-4 py-2 border border-indigo-400 rounded-lg focus:outline-none focus:border-indigo-500"/>
        </div>

        <div>
          <label htmlFor="idpneuT" className="block text-lg text-indigo-950 font-medium mb-2"> Já trocou os pneus? </label>
          <select name="pneuT" id="idpneuT" className="w-20 px-4 py-2 border border-indigo-400 rounded-lg focus:outline-none focus:border-indigo-500">
            <option value="" disabled> Selecione uma opção </option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select> 
        </div>
        
        <label htmlFor="quais?" className="block text-lg text-indigo-950 font-medium mb-2">Se sim, quantos pneus trocou? </label>
        
        <div className="flex flex-wrap mb-2">

        <div className="flex items-center w-1/2 mb-2">
          <label htmlFor="idDd" className=" text-lg">Dianteiro - direito</label>
          <input type="checkbox" name="Dianteiro - direito" id="idDd" />
        </div>
        
        <div className="flex items-center w-1/2 mb-2">
          <label htmlFor="idTd" className=" text-lg">Traseiro - direito</label>
          <input type="checkbox" name="Traseiro - direito" id="idTd" />
        </div>
          
        <div className="flex items-center w-1/2 mb-2">
          <label htmlFor="idDe" className=" text-lg">Dianteiro - Esquerdo</label>
          <input type="checkbox" name="Dianteiro - Esquerdo" id="idDe" />
        </div>
          
        <div className="flex items-center w-1/2 mb-2">
          <label htmlFor="idTe" className=" text-lg">Traseiro - Esquerdo</label>
          <input type="checkbox" name="Traseiro - Esquerdo" id="idTe" />
        </div>
          
        </div>
          <div>
            <label htmlFor="idql" className="block text-lg text-indigo-950 font-medium mb-2">  Caso tenha trocado, quando foi? </label>
            <input type="date" name="datatroca" id="iddataT" required className="px-4 py-2 border border-indigo-400 rounded-lg focus:outline-none focus:border-indigo-500"/>
          </div>
          
          <button onClick={()=> alert ()} className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none"> Confirmar Informações </button>
        </div>
      </section>
    </div>

  )

  
}