import { DivMec } from "@/styled";
import { NovoCondProps } from "@/types";

export default function NovoCondutor({name, value}: NovoCondProps){

  return(
    <DivMec>
    <h2>Cadastrar Novo Condutor?</h2>
    <select name={name} id="idcond" className="idcond">
      <option value={value} disabled selected></option>
      <option value={value}>Sim</option>
      <option value={value}>Não</option>
    </select>
    <br />
    <button className= "BotaoConfirmar"  onClick={()=> alert ('Confirmado!')}> Confirmar</button>
    </DivMec>      
  )
}