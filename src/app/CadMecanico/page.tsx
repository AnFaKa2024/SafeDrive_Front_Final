
import Cabecalho from "@/components/Cabecalho";

import RodapeCad from "@/components/RodapeCad";
import { HeaderVec } from "@/styled";
import CadMeca from "./CadMeca";
import CadOficina from "./CadOficina";



export default function CadMecanico(){

  return(

    <>
      <Cabecalho/>
      <br></br>
      <HeaderVec>
        <h1>Seja um de nossos PARCEIROS</h1>
      </HeaderVec>
      
        <CadMeca/>
        
        <CadOficina/>
     
      
      <RodapeCad/>
    </>
    
    )
}