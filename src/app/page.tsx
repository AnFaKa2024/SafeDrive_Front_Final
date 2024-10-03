import { DivMec } from "@/styled";
import { NovoCondProps } from "@/types";


export default function PrimeiroAcesso({name, value}: NovoCondProps) {
  return (
    


    <DivMec>
      <h2>Primeiro Acesso</h2>
        <select name={name} id="idacesso" className="idacesso">
          <option value={value} disabled selected></option>
          <option value={value}>Sim</option>
          <option value={value}>Não</option>
        </select>
        <br />
        <button className= "BotaoConfirmar"  onClick={()=> alert ('Confirmado!')}> Confirmar</button>
    </DivMec>

 

    
    
  )
}
