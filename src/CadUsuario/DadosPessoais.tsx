import { DivMec } from "@/styled";
import { PessoaisProps } from "@/types";


export default function DadosPessoais({idNome, idDN,  idDoc, idLogin, idEnd, idSenha}: PessoaisProps){

  return(
    <DivMec>
      <h2><b>DADOS PESSOAIS</b></h2>
      <br />
      {/* NOME */}
      <label htmlFor="idNome" >Nome </label>
      <input type="text" name="name" placeholder="Nome Completo" id={idNome? 'idNome' : undefined} required /><br />
      <br />
      {/* DATA DE NASCIMENTO */}
      <label htmlFor="idDN"> Data de Nascimento</label> <input type="date" name="data" id={idDN? "idDN" : undefined} required /><br />
      <br />
      {/* CPF / CNPJ */}
      <label htmlFor="idStatus"> O Cadastro é para uma Pessoa Física <input type="radio" name="PF" id="idPF" /> ou Pessoa Jurídica <input type="radio" name="PJ" id="idPJ" />?</label>  
      <label htmlFor="idDoc"> Digite o número do documento</label> <input type="text" name="doc" placeholder="CFP ou CNPJ" id={idDoc? "idDoc": undefined} required /><br />
      <br />
      {/* ENDEREÇO */}
      <label htmlFor="idResid">Cadastre o Endereço da sua Preferência: Endereço Residencial <input type="radio" name="resideal" id="idResid"value="residencial"/> ou Endereço Comercial <input type="radio" name="comercial" id="idCom" value="comercial"/></label>
      <label htmlFor="idEnd" className="idEnd"> Informe o Endereço <input type="text" placeholder="Endereço Selecionado" id={idEnd ? "idEnd": undefined} required/></label>
      <br />
      <br />
      {/* LOGIN E SENHA */}
      <p><b>CADASTRO DE LOGIN E SENHA</b></p>
      <label htmlFor="idLogin">Login <input type="text" name="login" id={idLogin? "idLogin": undefined}  required/></label><br />
      <label htmlFor="idSenha">Senha (deve conter apenas 6 caracteres) <input type="password" name="senha" id={ idSenha ? "idSenha": undefined} /*maxlength="6"*/  required/></label> 
      <br />
      <br />
      <button className= "BotaoConfirmar"  onClick={()=> alert ('Confirmado!')}> Confirmar Informações </button>
      
      {/* Aqui esses dois botões têm que ir para outras paginas
      <button className= "BotaoNovoCondutor"  onClick={()=> alert ('NovoCondutor')}> Cadastrar Novo Condutor </button>  
      <button className= "BotaoCadastrarVeículo"  onClick={()=> alert ('CadastrarVeículo')}> Cadastrar Veiculo </button>
       */}
                                                                                                                                
    </DivMec>
    
  )
}