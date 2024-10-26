
import { PessoaisProps } from "@/types";
import { FaCheck, FaTrash } from 'react-icons/fa';
import { useRouter } from "next/router";



export default function DadosPessoais({Nome, DN, Doc, Login, End, Senha}: PessoaisProps){

  // const router = useRouter();

  // const irParaCadastroVeiculo = () => {
  //   router.push('/cadastro-veiculo');
  // }

  return(
    <main className="bg-indigo-100 p-3 m-1 mt-2 rounded-lg shadow-sm space-x-4">
      <h1 className="text-center text-3xl font-semibold text-indigo-950"><b>CADASTRO USUÁRIO</b></h1>
      
      <h2 className="text-xl  mb-4"><b>DADOS PESSOAIS</b></h2>
      
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
      
      {/* ENDEREÇO */}
        <div className="flex items-center space-x-4 mb-6"><span className="text-lg font-semibold">Qual Endereço Deseja Cadastrar:</span>
          <label className="flex items-center space-x-2">
          <input type="radio" className="border-indigo-400 text-xl" name="tipoEndereco" id="idResid" value="residencial" />
          <span>Residencial</span></label>
          <label className="flex items-center space-x-2"><input type="radio" className="border-indigo-400 hover:bg-indigo-50 text-xl" name="tipoEndereco" id="idCom" value="comercial" />
          <span>Comercial</span></label>
        </div>
        
      <div className=" flex flex-wrap gap-4 mb-4">
        {/* Campo Rua */}
        <div className="flex1">
          <label htmlFor="idRua" className="block font-semibold text-lg text-indigo-950  mb-1">Rua:</label>
          <input type="text" id="idRua" placeholder="ome da rua" className="w-80 p-2 border border-indigo-400 hover:bg-indigo-50 rounded" required />
        </div>

        {/* Campo Número */}
        <div className="w-20">
          <label htmlFor="idNumero" className="block font-semibold text-lg text-indigo-950  mb-1">Número:</label>
          <input type="text" id="idNumero" placeholder="Número" className="w-20 p-2 border border-indigo-400 hover:bg-indigo-50 rounded" required />
        </div>

        {/* Campo Bairro */}
        <div className="w-44">
          <label htmlFor="idBairro" className="block font-semibold text-lg text-indigo-950 mb-1">Bairro:</label>
          <input type="text" id="idBairro" placeholder="Bairro" className="w-44 p-2 border border-indigo-400 hover:bg-indigo-50 rounded" required />
        </div>

        {/* Campo CEP */}
        <div className="w-44">
          <label htmlFor="idCEP" className="block font-semibold text-lg text-indigo-950 mb-1">CEP:</label>
          <input type="text" id="idCEP" placeholder="CEP" className="w-44 p-2 border border-indigo-400 hover:bg-indigo-50 rounded" required />
        </div>

        {/* Campo Cidade */}
        <div className="w-56">
          <label htmlFor="idCidade" className="block font-semibold text-lg text-indigo-950 mb-1">Cidade:</label>
          <input type="text" id="idCidade" placeholder="Cidade" className="w-56 p-2 border border-indigo-400 hover:bg-indigo-50 rounded" required />
        </div>

        {/* Campo Estado */}
        <div className="w-20">
          <label htmlFor="idEstado" className="block font-semibold text-lg text-indigo-950 mb-1">Estado:</label>
          <input type="text" id="idEstado" placeholder="Estado" className="w-20 p-2 border border-indigo-400 hover:bg-indigo-50 rounded" required />
        </div>
      </div>
      
      <br />
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
      
      
        {/* Botão para redirecionar */}
        {/* <button
          onClick={irParaCadastroVeiculo}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Ir para Cadastro de Veículo
        </button> */}
        
    
                                                                                                                                
    </main>

  
  )
}