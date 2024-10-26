


export default function ObsUser(){

  return(
    <section className="bg-gray-100 p-6 rounded-lg shadow-sm">
    
        <h2 className="text-xl font-semibold mb-4"><b>OBSERVAÇÕES</b></h2>
        <textarea name="obs" id="idObs" className="w-full p-2 border rounded resize-none" placeholder="Insira observações..." rows= {5}></textarea>
        
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" onClick={()=> alert (' Informações ENVIADAS com sucesso ')}> Enviar Informações </button>
    
    </section>
  )
}