import { FaCheck, FaTrash } from 'react-icons/fa';
import { CondutorProps } from '@/types';

export default function CadCondutor({NomeCondutor, DN, Cnh}: CondutorProps){

  return(

    <>
      <main>

        <h1 className="text-center mt-2 text-3xl  text-indigo-950"><b>CADASTRO CONDUTOR</b></h1>
                
        <h2 className="text-xl mt-2 text-center text-indigo-950 mb-4"><b>INFORMAÇÕES PESSOAIS</b></h2>
        
        {/* NOME */}
        <div>
          <label htmlFor="NomeCondutor"  className="block text-justify text-indigo-950 font-semibold text-lg mb-2">Nome do Condutor </label>
          <input type="text" className="w-full p-2 mb-4 border rounded border-indigo-400 hover:bg-indigo-50" name="name" placeholder="Nome Completo do Condutor" id={NomeCondutor? 'idNomeCondutor' : undefined} required /><br />
        </div>
        <br />
          
        {/* DATA DE NASCIMENTO */}
        <div className="flex space-x-2 items-center">
          <label htmlFor="DN" className="block font-semibold text-indigo-950 text-lg mb-2"> Data de Nascimento</label> 
          <input type="date" className="w-32 tetx-center p-2 mb-4 border rounded border-indigo-400 hover:bg-indigo-50" name="data" id={DN? "idDN" : undefined} required /><br />
        </div>
        <br />
          
        {/* CNH */}
        <div className="flex space-x-20">
          <div className="flex justify-evenly space-x-2 items-center">
            <label htmlFor="idCnh" className="block font-semibold text-indigo-950 text-lg mb-2"> Digite o número da CNH</label> 
            <input type="text" className="w-46 p-2 mb-4 border rounded border-indigo-400 hover:bg-indigo-50" name="doc" placeholder="CNH" id={Cnh? "idCnh": undefined} required />
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

    </>
  )
}