import { DivMec } from "@/styled"
import { CondutorProps } from "@/types"



export default function DadosCondutor({idSim, idNao, idCnh}:CondutorProps){


  return(

    <DivMec>
        <h2><b>DADOS DO CONDUTOR</b></h2>
       
        <h3><b>São os mesmos dados cadastrados do usuário?</b></h3>

        <input type="radio" name="condutor" id={idSim? 'idSim' : undefined} value="sim"/>
        <label htmlFor="idSim">Sim, informe o número da CNH</label>
      
        <label htmlFor="idCnh"></label>
        <input type="number" placeholder="Número CNH" id={idCnh? 'idCnh' : undefined} required /><br />

            <h4>Ou</h4>

        <input type="radio" name="condutor" id={idNao? 'idNao' : undefined} value="não" />
        <label htmlFor="idNão">Não! Por gentileza, insira os dados necessário.</label>
        <br />
        <br />
        <button className= "BotaoConfirmar"  onClick={()=> alert ('Confirmado!')}> Confirmar Informações </button>
      
    </DivMec>
  )
}