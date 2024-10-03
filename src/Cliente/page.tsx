
import Cabecalho from '../../components/Cabecalho';
import Rodape from '../../components/Rodape';
import { DivCliente } from '../../styled';
import Cliente1 from './Cliente1';
import Cliente2 from './Cliente2';
import Cliente3 from './Cliente3';

export default function Cliente(){
  return (
    
    <>
        <Cabecalho/>
        <br />
        <DivCliente>
          <main>
            <h2>Algumas Histórias de Clientes</h2>

            {/* Container para os componentes */}
          
              <Cliente1 />
              <Cliente2 />
              <Cliente3 />
          
          </main>
        </DivCliente>
        <br />
      <Rodape/>
    </>
  )
}


// esta editado - falta as rotas