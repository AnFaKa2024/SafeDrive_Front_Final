import { DivMec, DivOficina } from "@/styled";
import { PessoaisProps } from "@/types";


export default function CadOficina({}:PessoaisProps){

  return(
    <DivMec>
    
      <h2><b>CADASTRO DA OFICINA</b></h2> 
     
      <label htmlFor="idNome">Nome da Oficina </label>
      <input type="text" placeholder="Nome da Oficina" />
      <br />
      <br />
      <label htmlFor="idEnd">Endereço </label>
      <input type="text" placeholder="Endereço"/>
      <br />
      <br />
      <label htmlFor="especialidades">Selecione os serviços prestados na ofinica</label>
      
      <DivOficina>
        <li><label htmlFor="autoeletrico">Auto Eletrico<input type="radio" /></label></li>
        <li><label htmlFor="Óleo e Fluídos">Óleo e Fluídos<input type="radio" /></label></li>
        <li><label htmlFor="Funilaria">Funilaria<input type="radio" /></label></li>
        <li><label htmlFor="Mecânica">Mecânica<input type="radio" /></label></li>
        <li><label htmlFor="Pneu e Suspenção">Pneu e Suspenção<input type="radio" /></label></li>
        <li><label htmlFor="Bateria">Bateria<input type="radio" /></label></li>
      </DivOficina>
      
      <br />
      
      <button className= "BotaoConfirmar"  onClick={()=> alert ('Confirmado!')}> Confirmar Informações </button>
      
    
    

    </DivMec>
  )
}