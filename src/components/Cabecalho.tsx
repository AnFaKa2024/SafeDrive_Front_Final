import { HeaderCabecalho } from "@/styled";
import Menu from "./Menu";


export default function Cabecalho() {
  
  return (
    <HeaderCabecalho>
      
      {/*  CABEÇALHO GERAL */}
        <h1 >SafeDrive</h1>
        
        <img src= '/LG_SafeDrive.png' className="logo"  alt="Logo SafeDrive" />
        <Menu/>
            
    </HeaderCabecalho>
  );
};