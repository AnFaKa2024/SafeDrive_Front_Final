import Image from "next/image"
import rec2 from "../../imagens/rec2.jpg"

export default function Recomendacao2() {
   
  
    return (
      <section className="max-w-2xl m-2 bg-indigo-200 rounded-lg shadow-md p-6">
       
          <p className="text-lg mb-4 text-justify"><b>4. Dirija com cuidado:</b> Uma condução suave ajuda a preservar componentes importantes do carro, como molas e amortecedores.
           Evite solavancos.</p>
          
          <p className="text-lg mb-4 text-justify"><b>5. Verifique os pneus regularmente:</b> Manter os pneus em boas condições é essencial para garantir a segurança e o desempenho
           do veículo.</p>
          
           <p className="text-lg mb-4 text-justify"><b>6. Proteja a pintura:</b> Manter a pintura do carro protegida contra elementos externos, como poeira, dejetos de pássaros e raios solares, 
            ajuda a evitar danos e manter o aspecto novo do veículo.</p>
        <Image src={rec2} alt="rec2" className="w-full h-auto rounded mb-4"/>
        
      </section>
    );
  }
  