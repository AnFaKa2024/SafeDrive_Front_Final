import { DivMec } from "@/styled";
import { FiltroProps } from "@/types";

export default function Filtro({name}: FiltroProps){

  return(

    
    
    <DivMec>
    
      <h2><b>ÚLTIMA TROCA DE FILTRO</b></h2>
    
      <label htmlFor="idar">Filtro do Ar</label> <input type="date" name={name} id="idar" required />
      <label htmlFor="idFmotor">  Filtro do Motor</label> <input type="date" name={name} id="idFmotor" required />
      <label htmlFor="idcombu">  Filtro do Combustível</label> <input type="date" name={name}id="idcombu" required />
      <br />
      <br />
      <button className= "BotaoConfirmar"  onClick={()=> alert ('Confirmado!')}> Confirmar Informações </button>
    </DivMec>
  
  )
}