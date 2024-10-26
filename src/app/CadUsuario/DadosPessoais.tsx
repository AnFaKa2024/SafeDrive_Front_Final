
import { PessoaisProps } from "@/types";


export default function DadosPessoais({Nome, DN, Doc, Login, End, Senha}: PessoaisProps){

  return(
    <main className="bg-gray-100 p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4"><b>DADOS PESSOAIS</b></h2>
      
      {/* NOME */}
      <label htmlFor="Nome"  className="block mb-2">Nome </label>
      <input type="text" className="w-full p-2 mb-4 border rounded" name="name" placeholder="Nome Completo" id={Nome? 'idNome' : undefined} required /><br />
      <br />
      {/* DATA DE NASCIMENTO */}
      <label htmlFor="DN" className="block mb-2"> Data de Nascimento</label> <input type="date" className="w-full p-2 mb-4 border rounded" name="data" id={DN? "idDN" : undefined} required /><br />
      <br />
      {/* CPF / CNPJ */}
      <label htmlFor="idStatus" className="block mb-2"> O Cadastro é para uma Pessoa Física <input type="radio" className="w-full p-2 mb-4 border rounded" name="PF" id="idPF" /> ou Pessoa Jurídica <input type="radio" name="PJ" id="idPJ" />?</label>  
      <label htmlFor="idDoc" className="block mb-2"> Digite o número do documento</label> <input type="text" className="w-full p-2 mb-4 border rounded" name="doc" placeholder="CFP ou CNPJ" id={Doc? "idDoc": undefined} required /><br />
      <br />
      {/* ENDEREÇO */}
      <label htmlFor="idResid" className="block mb-2">Cadastre o Endereço da sua Preferência: Endereço Residencial <input type="radio" className="w-full p-2 mb-4 border rounded" name="resideal" id="idResid"value="residencial"/> ou Endereço Comercial <input type="radio" name="comercial" id="idCom" value="comercial"/></label>
      <label htmlFor="idEnd"  className="block mb-2"> Informe o Endereço <input type="text" placeholder="Endereço Selecionado" id={End ? "idEnd": undefined} required/></label>
      <br />
      <br />
      {/* LOGIN E SENHA */}
      <p className="text-lg font-bold mb-2"><b>CADASTRO DE LOGIN E SENHA</b></p>
      <label htmlFor="Login" className="block mb-2">Login <input type="text" className="w-full p-2 mb-4 border rounded" name="login" id={Login? "idLogin": undefined}  required/></label><br />
      <label htmlFor="idSenha" className="block mb-2">Senha (deve conter apenas 6 caracteres) <input type="password" className="w-full p-2 mb-4 border rounded" name="senha" id={ Senha ? "idSenha": undefined}  required/></label> 
      <br />
      <br />
      <button className= "BotaoConfirmar"  onClick={()=> alert ('Confirmado!')}> Confirmar Informações </button>
      
      {/* Aqui esses dois botões têm que ir para outras paginas
      <button className= "BotaoNovoCondutor"  onClick={()=> alert ('NovoCondutor')}> Cadastrar Novo Condutor </button>  
      <button className= "BotaoCadastrarVeículo"  onClick={()=> alert ('CadastrarVeículo')}> Cadastrar Veiculo </button>
       */}
                                                                                                                                
    </main>
    
  )
}