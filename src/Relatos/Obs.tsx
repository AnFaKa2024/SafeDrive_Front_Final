import { DivMec } from "@/styled";
import { ObsUserProps } from "@/types";


export default function Observacao({}:ObsUserProps){
  return(
   
    <DivMec>
      <legend id="idObs"><b>Gostaria de relatar alguma OBSERVAÇÃO?</b></legend>
      <textarea name="obs" id="idObs" /*cols= "30" rows="10"*/></textarea>
      <button className="BotaoEnviar" onClick={()=> alert (' Informações ENVIADAS com sucesso ')}> Enviar Informações </button>
    </DivMec>
  
  )
}