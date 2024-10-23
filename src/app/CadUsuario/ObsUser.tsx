import { DivMec } from "@/styled";
import { ObsUserProps } from "@/types";

export default function ObsUser({idObs}: ObsUserProps){

  return(
    <DivMec>
    
        <h2><b>OBSERVAÇÕES</b></h2>
        <textarea name="obs" id={idObs? "idObs":undefined} /*cols="30" rows="10"*/></textarea>
        <br />
        <button className="BotaoEnviar" onClick={()=> alert (' Informações ENVIADAS com sucesso ')}> Enviar Informações </button>
    
    </DivMec>
  )
}