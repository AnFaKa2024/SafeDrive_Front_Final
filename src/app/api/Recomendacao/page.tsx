import Cabecalho from '@/components/Cabecalho';
import Rodape from '@/components/Rodape';
import { HeaderRecomendacao } from '@/styled';
import Recomendacao1 from './Recomendacao1';
import Recomendacao2 from './Recomendacao2';
import Recomendacao3 from './Recomendacao3';

export default function Recomendacao() {

  return (
    <>
      <Cabecalho/>
      <HeaderRecomendacao>
        
        <h2 >Aqui estão algumas dicas essenciais para manter seu veículo em bom estado:</h2>
          
            <Recomendacao1 />
            <Recomendacao2 />
            <Recomendacao3 />
        
      </HeaderRecomendacao>  
      <Rodape/>

    </>
  )
}