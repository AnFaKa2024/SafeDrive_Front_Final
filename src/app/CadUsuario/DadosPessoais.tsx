
import { PessoaisProps } from "@/types";
import { FaCheck, FaTrash } from 'react-icons/fa';




export default function DadosPessoais({Nome, DN, Doc, Login, End, Senha}: PessoaisProps){

  

  return(
      <>
      
      <div>
      </div>

      <main className="bg-indigo-200 p-3 m-1 rounded-lg shadow-md text-indigo-950  text-center mt-3 font-bold">
        <h1 className="text-center mt-2 text-3xl  text-indigo-950"><b>CADASTRO USUÁRIO</b></h1>
        
        <h2 className="text-xl mt-2 text-center text-indigo-950 mb-4"><b>DADOS PESSOAIS</b></h2>
        
        {/* NOME */}
        <div>
          <label htmlFor="Nome"  className="block text-justify text-indigo-950 font-semibold text-lg mb-2">Nome </label>
          <input type="text" className="w-full p-2 mb-4 border rounded border-indigo-400 hover:bg-indigo-50" name="name" placeholder="Nome Completo" id={Nome? 'idNome' : undefined} required /><br />
        </div>
        <br />
        
        {/* DATA DE NASCIMENTO */}
        <div className="flex space-x-2 items-center">
          <label htmlFor="DN" className="block font-semibold text-indigo-950 text-lg mb-2"> Data de Nascimento</label> 
          <input type="date" className="w-32 tetx-center p-2 mb-4 border rounded border-indigo-400 hover:bg-indigo-50" name="data" id={DN? "idDN" : undefined} required /><br />
        </div>
        <br />
        
        {/* CPF / CNPJ */}
        <div className="flex space-x-20">
          <div>
            <label htmlFor="idStatus" className="block font-semibold text-indigo-950 text-lg mb-2"> O Cadastro é para uma Pessoa Física <input type="radio" className="w-5 p-2 mb-4 border rounded border-indigo-400" name="PF" id="idPF" /> ou Pessoa Jurídica <input type="radio" className="w-5 border border-indigo-400" name="PJ" id="idPJ" />?</label>  
          </div>
          
          <div className="flex justify-evenly space-x-2 items-center">
            <label htmlFor="idDoc" className="block font-semibold text-indigo-950 text-lg mb-2"> Digite o número do documento</label> 
            <input type="text" className="w-46 p-2 mb-4 border rounded border-indigo-400 hover:bg-indigo-50" name="doc" placeholder="CFP ou CNPJ" id={Doc? "idDoc": undefined} required />
          </div>
        </div>

        {/* CNH */}
        <div className="flex space-x-20">
          
          <div className="flex justify-evenly space-x-2 items-center">
            <label htmlFor="idDoc" className="block font-semibold text-indigo-950 text-lg mb-2"> Digite o número do documento</label> 
            <input type="text" className="w-46 p-2 mb-4 border rounded border-indigo-400 hover:bg-indigo-50" name="Cnh" placeholder="CNH" id={Doc? "idCNH": undefined} required />
          </div>
        </div>
        <br />
        
        {/* ENDEREÇO */}
          <div className="flex items-center space-x-4 mb-6"><span className="text-lg text-indigo-950 font-semibold">Qual Endereço Deseja Cadastrar:</span>
            <label className="flex items-center space-x-2">
            <input type="radio" className="border-indigo-400 text-xl" name="tipoEndereco" id="idResid" value="residencial" />
            <span className="text-indigo-950">Residencial</span></label>
            <label className="flex items-center space-x-2"><input type="radio" className="border-indigo-400 hover:bg-indigo-50 text-xl" name="tipoEndereco" id="idCom" value="comercial" />
            <span className="text-indigo-950">Comercial</span></label>
          </div>
          
        <div className=" flex flex-wrap gap-4 mb-4">
          {/* Campo Rua */}
          <div className="flex1">
            <label htmlFor="idRua" className="block font-semibold text-lg text-indigo-950  mb-1">Rua</label>
            <input type="text" id="idRua" placeholder="Nome da rua" className="w-80 p-2 border border-indigo-400 hover:bg-indigo-50 rounded" required />
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
        <br />
        {/* LOGIN E SENHA */}
        <p className="text-2xl text-indigo-950 mb-2"><b>CADASTRO DE LOGIN E SENHA</b></p>
        
        <div className=" flex flex-col2 gap-4 mb-4">
          <label htmlFor="Login" className="block text-indigo-950 text-lg mb-2">Login (E-mail ex. safedrive@safedrive.com) <input type="text" className="w-32 p-2 mb-4 rounded border border-indigo-400 hover:bg-indigo-50" name="login" id={Login? "idLogin": undefined}  required/></label><br />
          <label htmlFor="Login" className="block text-indigo-950 text-lg mb-2">Confirmar Login (E-mail ex. safedrive@safedrive.com) <input type="text" className="w-32 p-2 mb-4 rounded border border-indigo-400 hover:bg-indigo-50" name="login" id={Login? "idLogin": undefined}  required/></label><br />
          <label htmlFor="idSenha" className="block text-indigo-950 text-lg mb-2">Senha (deve conter apenas 6 caracteres) <input type="password" className="w-32 p-2 mb-4 rounded border border-indigo-400 hover:bg-indigo-50" name="senha" id={ Senha ? "idSenha": undefined}  required/></label> 
          <label htmlFor="idSenha" className="block text-indigo-950 text-lg mb-2">Confirmar Senha (deve conter apenas 6 caracteres) <input type="password" className="w-32 p-2 mb-4 rounded border border-indigo-400 hover:bg-indigo-50" name="senha" id={ Senha ? "idSenha": undefined}  required/></label> 
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