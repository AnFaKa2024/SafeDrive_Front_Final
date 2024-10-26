"use client"
import Cabecalho from '../../components/Cabecalho';
import Rodape from '../../components/Rodape';

import Cliente1 from './Cliente1';
import Cliente2 from './Cliente2';
import Cliente3 from './Cliente3';

export default function Cliente(){
  return (
    
    <>
        <Cabecalho/>
                
          <main className='container mx-auto p-4'>
            <h2>Algumas Histórias de Clientes</h2>

            {/* Container para os componentes */}

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"> 
              <Cliente1 />
              <Cliente2 />
              <Cliente3 />
            </div>
          </main>
      
      
     
    </>
  )
}


// esta editado - falta as rotas