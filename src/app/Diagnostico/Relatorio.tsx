import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Relatorio() {
  // // Simulação de dados de diagnóstico
  // const diagnosticoData = {
  //   status: 'Concluído',
  //   descricao: 'A análise identificou áreas de melhoria.',
  //   detalhes: [
  //     { id: 1, item: 'Conexão com banco de dados', resultado: 'Bem-sucedida' },
  //     { id: 2, item: 'Velocidade de resposta', resultado: 'Adequada' },
  //     { id: 3, item: 'Uso de memória', resultado: 'Alto, recomendações disponíveis' },
  //   ],
  // };

  return (
   <> 
      <header className="flex items-center justify-end p-4" >
        <Link href="/" className= "botao-voltar-home -mt-24 text-white text-5xl "><FaHome className="" /></Link>
      </header>

      <main className="p-3 m-1 mt-3 text-center text-indigo-200 shadow-md rounded-lg">
        
        <div className="  mt-8">
          <h2 className="text-3xl text-center text-indigo-950 mb-4"><b>RELATÓRIO DE DIAGNÓSTICO</b></h2>
          
          {/* <div className="mb-4">
            <p className="text-lg text-gray-700"><strong>Status:</strong> {diagnosticoData.status}</p>
            <p className="text-gray-600"><strong>Descrição:</strong> {diagnosticoData.descricao}</p>
          </div> */}

          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-indigo-200 px-4 py-2 text-left text-indigo-700">Item</th>
                <th className="border-b-2 border-indigo-200 px-4 py-2 text-left text-indigo-700">Resultado</th>
              </tr>
            </thead>
            <tbody>
              {/* {diagnosticoData.detalhes.map((detalhe) => (
                <tr key={detalhe.id} className="hover:bg-gray-100">
                  <td className="border-b border-gray-200 px-4 py-2 text-gray-800">{detalhe.item}</td>
                  <td className="border-b border-gray-200 px-4 py-2 text-gray-600">{detalhe.resultado}</td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
