
import { OficinaProps } from "@/types";


export default function CadOficina({NomeFantasia, EndOficina}:OficinaProps){

  return(
    <main className="p-8 bg-gray-100 rounded-lg shadow-md mt-8">
    
      <h2 className="text-xl font-bold text-gray-800 mb-6"><b>CADASTRO DA OFICINA</b></h2> 
     
      <label htmlFor="NomeFantasia" className="block text-sm font-medium text-gray-700 mb-1">Nome da Oficina </label>
      <input type="text" className="w-full p-2 border border-gray-300 rounded mb-4" placeholder="Nome da Oficina" />
      
      <label htmlFor="EndOficina" className="block text-sm font-medium text-gray-700 mb-1">Endereço </label>
      <input type="text" className="w-full p-2 border border-gray-300 rounded mb-4" placeholder="Endereço"/>
      
      <label htmlFor="especialidades" className="block text-sm font-medium text-gray-700 mb-1">Selecione os serviços prestados na ofinica</label>
      
      <section className="space-y-2 mb-4">
        <label htmlFor="autoeletrico" className="flex items-center space-x-2">Auto Eletrico<input type="radio" className="text-blue-600"/></label>
        <label htmlFor="Óleo e Fluídos" className="flex items-center space-x-2">Óleo e Fluídos<input type="radio" className="text-blue-600"/></label>
        <label htmlFor="Funilaria" className="flex items-center space-x-2">Funilaria<input type="radio" className="text-blue-600"/></label>
        <label htmlFor="Mecânica" className="flex items-center space-x-2">Mecânica<input type="radio" className="text-blue-600"/></label>
        <label htmlFor="Pneu e Suspenção" className="flex items-center space-x-2">Pneu e Suspenção<input type="radio" className="text-blue-600"/></label>
        <label htmlFor="Bateria" className="flex items-center space-x-2">Bateria<input type="radio" className="text-blue-600"/></label>
      </section>     
    
      <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"  onClick={()=> alert ('Confirmado!')}> Confirmar Informações </button>
     
    </main>
  )
}