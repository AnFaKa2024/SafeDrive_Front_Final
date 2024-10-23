import { DivMec } from "@/styled"
import { NovoCondProps } from "@/types"

export default function CadVeic({}:NovoCondProps){

  return(

    
      <DivMec >
        <h2><b>DADOS DO VEÍCULO</b></h2>
       
        <label htmlFor="idCat">Qual a Categoria?</label>
      
        <select name="categoria" id="idCat">
          <option value=" " disabled selected>Selecione uma Categoria</option>
          <option value='carro'> Carro</option>
          <option value='caminhão'> Caminhão</option>
          <option value='Moto'> Moto</option>
          <option value='onibus'> Ônibus</option>
        </select>
          <br />
          <br />
        <label htmlFor="idPlaca">Placa do Veículo</label>
        <input type="text" name='idPlaca' id="idPlaca"/>
        <br />
        <br />
        <button className= "BotaoConfirmar"  onClick={()=> alert ('Confirmado!')}> Confirmar Informações </button>
        
      </DivMec>
   

  )
}