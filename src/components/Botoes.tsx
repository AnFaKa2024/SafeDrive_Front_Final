



export default function Botoes(){


  return(

    <>
        
      <button className= "BotaoConfirmar"  onClick={()=> alert ('Confirmado!')}> Confirmar Informações </button>
      
      <button className="BotaoLimpar" onClick={()=> alert ('Formulário Limpo')}> Limpar Informações </button>
      
      <button className="BotaoCadastrar" onClick={()=> alert (' DADOS CADASTRADOS NO SISTEMA SafeDrive, COM SUCESSO !! ')}> Limpar Informações </button>
      
      <button className="BotaoEnviar" onClick={()=> alert (' Informações ENVIADAS com sucesso ')}> Enviar Informações </button>
      
      
    
    </>
  
  )
}