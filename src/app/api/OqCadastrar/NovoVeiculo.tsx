import { DivMec } from "@/styled";
import { NovoCondProps } from "@/types";


export default function NovoVeiculo({}: NovoCondProps){

  return(
    <DivMec>
      <h2>Cadastrar Novo Veículo?</h2>
        <select name="veiculo" id="idveic" className="idveic">
          <option value="" disabled selected></option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
        <br />
        <button className= "BotaoConfirmar"  onClick={()=> alert ('Confirmado!')}> Confirmar</button>
    </DivMec>
  )
}