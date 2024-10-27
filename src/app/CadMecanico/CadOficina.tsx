
import { OficinaProps } from "@/types";
import { FaCheck, FaTrash } from 'react-icons/fa';


export default function CadOficina({NomeFantasia, EndOficina}:OficinaProps){

  return(
    <main className="p-3 mt-2 bg-indigo-100 rounded-lg shadow-md">
    
      <h2 className="text-xl text-indigo-950 mb-6"><b>CADASTRO DA OFICINA</b></h2> 
     
      <label htmlFor="NomeFantasia" className="block text-lg font-medium text-indigo-950 mb-1">Nome da Oficina </label>
      <input type="text" className="w-full p-2 border border-indigo-400 hover:bg-indigo-50 rounded mb-4" placeholder="Nome da Oficina" />
      
      {/* ENDEREÇO */}       
      <div className=" flex flex-wrap gap-4 mb-4">
        {/* Campo Rua */}
        <div className="flex1">
          <label htmlFor="idRua" className="block font-semibold text-lg text-indigo-950  mb-1">Rua</label>
          <input type="text" id="idRua" placeholder="ome da rua" className="w-80 p-2 border border-indigo-400 hover:bg-indigo-50 rounded" required />
        </div>

        {/* Campo Número */}
        <div className="w-20">
          <label htmlFor="idNumero" className="block font-semibold text-lg text-indigo-950  mb-1">Número</label>
          <input type="text" id="idNumero" placeholder="Número" className="w-20 p-2 border border-indigo-400 hover:bg-indigo-50 rounded" required />
        </div>

        {/* Campo Bairro */}
        <div className="w-44">
          <label htmlFor="idBairro" className="block font-semibold text-lg text-indigo-950 mb-1">Bairro</label>
          <input type="text" id="idBairro" placeholder="Bairro" className="w-44 p-2 border border-indigo-400 hover:bg-indigo-50 rounded" required />
        </div>

        {/* Campo CEP */}
        <div className="w-44">
          <label htmlFor="idCEP" className="block font-semibold text-lg text-indigo-950 mb-1">CEP</label>
          <input type="text" id="idCEP" placeholder="CEP" className="w-44 p-2 border border-indigo-400 hover:bg-indigo-50 rounded" required />
        </div>

        {/* Campo Cidade */}
        <div className="w-56">
          <label htmlFor="idCidade" className="block font-semibold text-lg text-indigo-950 mb-1">Cidade</label>
          <input type="text" id="idCidade" placeholder="Cidade" className="w-56 p-2 border border-indigo-400 hover:bg-indigo-50 rounded" required />
        </div>

        {/* Campo Estado */}
        <div className="w-20">
          <label htmlFor="idEstado" className="block font-semibold text-lg text-indigo-950 mb-1">Estado</label>
          <input type="text" id="idEstado" placeholder="Estado" className="w-20 p-2 border border-indigo-400 hover:bg-indigo-50 rounded" required />
        </div>
      </div>
      <br />
      <label htmlFor="especialidades" className="block text-xl text-center text-indigo-950 mb-1"><strong>Selecione os serviços prestados na ofinica</strong></label>
      <br />
      <section className="flex flex-wrap justify-around gap-x-8 gap-y-4 mb-4">
        <label htmlFor="autoeletrico" className="flex items-center space-x-4 text-xl">Auto Eletrico<input type="radio" className="text-indigo-950"/></label>
        <label htmlFor="Óleo e Fluídos" className="flex items-center space-x-4 text-xl">Óleo e Fluídos<input type="radio" className="text-indigo-950"/></label>
        <label htmlFor="Funilaria" className="flex items-center space-x-4 text-xl">Funilaria<input type="radio" className="text-indigo-950"/></label>
        <label htmlFor="Mecânica" className="flex items-center space-x-4 text-xl">Mecânica<input type="radio" className="text-indigo-950"/></label>
        <label htmlFor="Pneu e Suspenção" className="flex items-center space-x-4 text-xl">Pneu e Suspenção<input type="radio" className="text-indigo-950"/></label>
        <label htmlFor="Bateria" className="flex items-center text-xl">Bateria<input type="radio" className="text-indigo-950"/></label>
      </section>     
    
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
  )
}