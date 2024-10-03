import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import { DivHistHome, MainHistorico } from "../../styled";
import { NovoCondProps } from "../../types";

export default function Historico({}: NovoCondProps){

  return(
    
    <>
      <Cabecalho/>
      <DivHistHome>
        <MainHistorico>
          <h1> Por que pedimos informações do veículo?</h1>
        
        <p> Com intuido de prestar o melhor serviço aos nossos clientes, necessitamos
          saber das manuteções realizadas e quando foram feitas, assim como precisamos saber 
          sobre trocas de baterias e quais quer outras manuteções e consertos realizados no veículo.
        </p>
        </MainHistorico>
       
          <h2><b>INFORMAÇÕES DE USO DO VEÍCULO</b></h2>
          <br />
          <label htmlFor="idkm"> Qual a km atual? </label>
          <input type="text" name="km" id="idkm" />
          <br />
          <br />
          <label htmlFor="idpneu"> Quando foi a ultima calibragem dos pneus? </label>
          <input type="date" name="pneu" id="idpneu"/>
          <br />
          <br />
          <label htmlFor="idpneuT"> Já trocou os pneus? </label>
          
          <select name="pneuT" id="idpneuT" className="idpneuT">
            <option value="" disabled selected></option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select> 
          <br/>
          <br/>
          <label htmlFor="quais?">Se sim, quantos pneus trocou? <input type="text" /></label>
          <br />
          <br />
          <label htmlFor="idql">  Caso tenha trocado, quando foi? </label>
          <input type="date" name="datatroca" id="iddataT" required />
            <br />
            <br />
          <button onClick={()=> alert ()}> Confirmar Informações </button>
      </DivHistHome>
      <Rodape/>
    </>
    
  )
}