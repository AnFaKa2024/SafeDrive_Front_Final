import { DivMec } from "@/styled"
import { PessoaisProps} from "@/types"



export default function CadMeca({idNome, idDN,  idDoc, idLogin, idEnd, idSenha, idAnos}: PessoaisProps){

  return(

    <DivMec>
     <h2><b>DADOS DO PROPRIETÁRIO DA OFICINA</b></h2>
   
      <label htmlFor="idNome" >Nome </label>
      <input type="text" name="name" placeholder="Nome Completo" id={idNome? 'idNome' : undefined} required /><br />
      <br />
      <label htmlFor="anos">Quantos anos autando na área de mecanica? <input type="text" name="texto" id={idAnos? 'idAnos': undefined} required /></label>
      <br />
      <br />
      <label htmlFor="idDN">Data de Nascimento</label>  
      <input type="date" name="data" id={idDN? "idDN" : undefined} required /><br />
      <br />
      <label htmlFor="idStatus">O cadastro é para uma Pessoa Física <input type="radio" name="PF" id="idPF" /> ou Pessoa Jurídica <input type="radio" name="PJ" id="idPJ" />?</label>  
      <label htmlFor="idDoc">Digite o número do documento <input type="text" name="doc" placeholder="CFP ou CNPJ" id={idDoc? "idDoc": undefined} required /></label> 
      <br />
      <br />
      <label htmlFor="idResid">Endereço Residencial <input type="text" placeholder="Endereço" id={idEnd ? "idEnd": undefined} required/></label>
      <br />
      <br />
      <p><b>CADASTRO DE LOGIN E SENHA</b></p>
      <label htmlFor="idLogin">Login <input type="text" name="login" id={idLogin? "idLogin": undefined}  required/></label><br />
      <label htmlFor="idSenha">Senha (deve conter apenas 6 caracteres)<input type="password" name="senha" id={ idSenha ? "idSenha": undefined} /*maxlength="6"*/  required/></label> 
      <br />
      <br />
      
      <button className= "BotaoConfirmar"  onClick={()=> alert ('Confirmado!')}> Confirmar Informações </button>
      
 
    </DivMec>
  )
}