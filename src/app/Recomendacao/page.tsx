"use client"

import InfoVeiculo from '../Historico/InfoVeiculo';
import Historico from '../Historico/page';
import Login from '../OqCadastrar/Login';
import NovoCadastro from '../OqCadastrar/NovoCadastro';

import Recomendacao1 from './Recomendacao1';
import Recomendacao2 from './Recomendacao2';
import Recomendacao3 from './Recomendacao3';

export default function Recomendacao() {

  return (
    <>
      
      <main className='grow flex flex-col'>
        
        <h2 className='text-2xl text-center mb-4  '><b>Aqui estão algumas dicas essenciais para manter seu veículo em bom estado:</b></h2>
          
          <div className='flex space-x-3 w-full'>
           <div className='flex-1'>  <Recomendacao1 /></div>
           <div className='flex-1'> <Recomendacao2 /></div>
           <div className='flex-1'> <Recomendacao3 /></div>
          </div>
        
      </main>  


      <Login/>
      
      <InfoVeiculo/>
      <NovoCadastro/>
      

    </>
  )
}