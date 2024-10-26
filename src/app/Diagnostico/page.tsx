"use client"
import Cabecalho from "@/components/Cabecalho";


export default function Diagnostico() {
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
      <Cabecalho />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Relatório de Diagnóstico</h2>
        
        {/* <div className="mb-4">
          <p className="text-lg text-gray-700"><strong>Status:</strong> {diagnosticoData.status}</p>
          <p className="text-gray-600"><strong>Descrição:</strong> {diagnosticoData.descricao}</p>
        </div> */}

        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-200 px-4 py-2 text-left text-gray-700">Item</th>
              <th className="border-b-2 border-gray-200 px-4 py-2 text-left text-gray-700">Resultado</th>
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
    </>
  );
}
