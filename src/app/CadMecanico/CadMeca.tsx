
import { PessoaisProps} from "@/types"
import { FaCheck, FaTrash } from 'react-icons/fa';


export default function CadMeca({Nome, DN,  Doc, Login, End, Senha, Anos}: PessoaisProps){

  return(

    <main className="bg-indigo-100 p-3 m-1 mt-2 rounded-lg shadow-sm space-x-4">
      <h1 className="text-2xl text-center font-bold text-indigo-950 mb-6">Seja um de nossos PARCEIROS</h1>
      <h2 className="text-xl font-bold text-indigo-950 mb-6"><b>DADOS DO PROPRIETÁRIO DA OFICINA</b></h2>
   
       {/* NOME */}
       <div>
        <label htmlFor="Nome"  className="block text-indico-950 font-semibold text-lg mb-2">Nome </label>
        <input type="text" className="w-full p-2 mb-4 border rounded border-indigo-400 hover:bg-indigo-50" name="name" placeholder="Nome Completo" id={Nome? 'idNome' : undefined} required /><br />
      </div>
      <br />
      
      {/* DATA DE NASCIMENTO */}
      <div className="flex space-x-2">
        <label htmlFor="DN" className="block font-semibold text-indico-950 text-lg mb-2"> Data de Nascimento</label> 
        <input type="date" className="w-32 tetx-center p-2 mb-4 border rounded border-indigo-400 hover:bg-indigo-50" name="data" id={DN? "idDN" : undefined} required /><br />
      </div>
      <br />
      
      {/* CPF / CNPJ */}
      <div className="flex space-x-20">
        <div>
          <label htmlFor="idStatus" className="block font-semibold text-indico-950 text-lg mb-2"> O Cadastro é para uma Pessoa Física <input type="radio" className="w-5 p-2 mb-4 border rounded border-indigo-400" name="PF" id="idPF" /> ou Pessoa Jurídica <input type="radio" className="w-5 border border-indigo-400" name="PJ" id="idPJ" />?</label>  
        </div>
        
        <div className="flex justify-evenly space-x-2">
          <label htmlFor="idDoc" className="block font-semibold text-indico-950 text-lg mb-2"> Digite o número do documento</label> 
          <input type="text" className="w-46 p-2 mb-4 border rounded border-indigo-400 hover:bg-indigo-50" name="doc" placeholder="CFP ou CNPJ" id={Doc? "idDoc": undefined} required />
        </div>
      </div>
      <br />

      {/* LOGIN E SENHA */}
      <p className="text-lg font-bold mb-2"><b>CADASTRO DE LOGIN E SENHA</b></p>
      
      <div className=" flex flex-wrap gap-4 mb-4">
        <label htmlFor="Login" className="block text-indico-950 text-lg mb-2">Login (deve conter apenas 6 caracteres) <input type="text" className="w-32 p-2 mb-4 border rounded border border-indigo-400 hover:bg-indigo-50" name="login" id={Login? "idLogin": undefined}  required/></label><br />
        <label htmlFor="Login" className="block text-indico-950 text-lg mb-2">Confirmar Login (deve conter apenas 6 caracteres) <input type="text" className="w-32 p-2 mb-4 border rounded border border-indigo-400 hover:bg-indigo-50" name="login" id={Login? "idLogin": undefined}  required/></label><br />
        <label htmlFor="idSenha" className="block text-indico-950 text-lg mb-2">Senha (deve conter apenas 6 caracteres) <input type="password" className="w-32 p-2 mb-4 border rounded border border-indigo-400 hover:bg-indigo-50" name="senha" id={ Senha ? "idSenha": undefined}  required/></label> 
        <label htmlFor="idSenha" className="block text-indico-950 text-lg mb-2">Confirmar Senha (deve conter apenas 6 caracteres) <input type="password" className="w-32 p-2 mb-4 border rounded border border-indigo-400 hover:bg-indigo-50" name="senha" id={ Senha ? "idSenha": undefined}  required/></label> 
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
  )
}