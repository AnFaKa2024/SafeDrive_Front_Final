
import { PessoaisProps} from "@/types"


export default function CadMeca({Nome, DN,  Doc, Login, End, Senha, Anos}: PessoaisProps){

  return(

    <main className="p-8 bg-gray-100 rounded-lg shadow-md">
     <h2 className="text-xl font-bold text-gray-800 mb-6"><b>DADOS DO PROPRIETÁRIO DA OFICINA</b></h2>
   
      <label htmlFor="idNome"  className="block text-sm font-medium text-gray-700 mb-1">Nome </label>
      <input type="text" className="w-full p-2 border border-gray-300 rounded mb-4" name="name" placeholder="Nome Completo" id={Nome? 'idNome' : undefined} required /><br />
      <br />
      <label htmlFor="anos">Quantos anos autando na área de mecanica? <input type="text" className="w-full p-2 border border-gray-300 rounded mb-4" name="texto" id={Anos? 'idAnos': undefined} required /></label>
      <br />
      <br />
      <label htmlFor="idDN" className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento</label>  
      <input type="date" name="data" id={DN? "idDN" : undefined} required /><br />
      <br />
      <label htmlFor="idStatus" className="block text-sm font-medium text-gray-700 mb-1">O cadastro é para uma Pessoa Física <input type="radio" className="w-full p-2 border border-gray-300 rounded mb-4" name="PF" id="idPF" /> ou Pessoa Jurídica <input type="radio" name="PJ" id="idPJ" />?</label>  
      <label htmlFor="idDoc">Digite o número do documento <input type="text" className="w-full p-2 border border-gray-300 rounded mb-4" name="doc" placeholder="CFP ou CNPJ" id={Doc? "idDoc": undefined} required /></label> 
      <br />
      <br />
      <label htmlFor="idResid" className="block text-sm font-medium text-gray-700 mb-1">Endereço Residencial <input type="text" placeholder="Endereço" id={End ? "idEnd": undefined} required/></label>
      <br />
      <br />
      <p><b>CADASTRO DE LOGIN E SENHA</b></p>
      <label htmlFor="idLogin" className="block text-sm font-medium text-gray-700 mb-1">Login <input type="text" className="w-full p-2 border border-gray-300 rounded mb-4" name="login" id={Login? "idLogin": undefined}  required/></label><br />
      <label htmlFor="idSenha" className="block text-sm font-medium text-gray-700 mb-1">Senha (deve conter apenas 6 caracteres)<input type="password" className="w-full p-2 border border-gray-300 rounded mb-4" name="senha" id={ Senha ? "idSenha": undefined} /*maxlength="6"*/  required/></label> 
      <br />
      <br />
      
      <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"  onClick={()=> alert ('Confirmado!')}> Confirmar Informações </button>
      
 
    </main>
  )
}