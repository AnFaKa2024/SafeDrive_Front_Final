/*import { RodapeUserProps } from "../../types";*/

import { DivMec } from "../styled"


export default function RodapeCad(/*RodapeUserProps*/){

  return(
    <DivMec>
      
      <button onClick={()=> alert()}> Cadastrar </button> <button onClick={()=> alert()}> Limpar Formulário </button>
      <input type="file" name="documento" id="idDoc" />
      
    </DivMec>
  )
}