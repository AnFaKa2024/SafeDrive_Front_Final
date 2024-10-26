import Image from "next/image"
import rec1 from "../../imagens/rec1.jpg"

export default function Recomendacao1() {
     
    return (
      <section className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        
        <Image src={rec1} alt="rec3" className="w-full h-auto rounded mb-4"/>
      
        <p className="text-lg mb-4"><b>1. Evite deixar o carro parado por longos períodos:</b> Mesmo que não utilize o veículo diariamente, é importante ligá-lo 
        por alguns minutos a cada dois dias para preservar a bateria e o sistema elétrico.</p>
        <br />
        <br />
        <p className="text-lg mb-4"><b>2. Lembre-se da troca de fluidos e filtros:</b> Substituir os fluidos regularmente é fundamental para evitar danos ao motor 
        e garantir sua longevidade.</p>
        <br />
        <br />
        <p className="text-lg mb-4"><b>3. Acompanhe a vida útil do óleo:</b> O óleo do motor desempenha um papel crucial no funcionamento adequado do veículo. Certifique-se
            de usar óleo de qualidade recomendado pelo fabricante e respeitar os intervalos de troca.</p>
        
      </section>
    )
  }
  