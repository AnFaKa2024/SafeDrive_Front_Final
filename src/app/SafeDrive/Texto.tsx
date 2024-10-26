import Image from "next/image"
import LogoAtu from "../../imagens/LogoAtu.png"


export default function Texto(){

  return(

    
      <main className="flex-col flex min-h-5 items-center w-full mx-auto p-4 bg-indigo-100 rounded-lg shadow-md mt-3">

        <Image src={LogoAtu} alt="Logo Atualizada"
          className="w-32 h-auto mb-4"/>
        
          <h1 className="text-4xl font-bold text-center text-indigo-950950 mb-2"><b>FGK</b> Consultoria em <b>Desenvolvimento de Software</b></h1>   
       
          <p className="text-indigo-950 text-center leading-relaxed text-2xl"><strong className="text-indigo-950">Inovação tecnológica</strong> que transcende o digital! Criamos
            software personalizado e robusto, adaptado às suas necessidades de negócios. A FGK é uma empresa formada por três desenvolvedoras universitárias que estão cursando Análise de
             Desenvolvimento de Sistemas na FIAP: Fernanda, Giovanna e Karen.</p>
                
          <p className="text-indigo-950 text-center leading-relaxed text-2xl">
          Entre os projetos que desenvolvemos, destaca-se o SafeDrive, um software projetado para identificar possíveis problemas em veículos automotivos e auxiliar o usuário.
            Este projeto, ainda em desenvolvimento, incluirá um site para hospedagem e fará uso de um ChatBot para ajudar os clientes. Além disso, estamos planejando oferecer um plano de assinatura
            que disponibilizará uma IA capaz de diagnosticar defeitos no carro utilizando vídeo, imagem e texto.</p>
         
         <p className="text-indigo-950 text-center leading-relaxed text-2xl">Somos uma empresa de consultoria na área de desenvolvimento de software, atuando no
            mercado desde 2024 com o objetivo principal de ouvir e atender o nosso cliente com agilidade e execelência.
         </p>
        
      </main>
    
    
  )
}