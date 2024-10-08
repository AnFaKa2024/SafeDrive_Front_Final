import { DivMec } from "@/styled";
import { FiltroProps } from "@/types";

export default function Fluido({name}: FiltroProps){

  return(
    
    <DivMec>
      <h2><b>ÚLTIMA TROCA DE FLÚIDOS</b></h2>
     
      <label htmlFor="idmotor"> Óleo do Motor</label>  <input type="date" name={name} id="idmotor" required />
      <label htmlFor="idmotor"> Óleo do Freio</label>  <input type="date" name={name} id="idmotor" required />
      <label htmlFor="idmotor"> Água do Radiador</label>  <input type="date" name={name} id="idmotor" required />
      <br />
      <br />
      <button className= "BotaoConfirmar"  onClick={()=> alert ('Confirmado!')}> Confirmar Informações </button>
    
    </DivMec>
          
  )
}