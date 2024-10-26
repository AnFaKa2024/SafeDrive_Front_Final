"use client"

import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import { useState } from "react";
import { NovoCondProps } from "../../types";

export default function Historico({}: NovoCondProps) {

  const [km, setKm] = useState('');
  const [pneuData, setPneuData] = useState('');
  const [pneuTrocado, setPneuTrocado] = useState('');
  const [quantidadeTrocada, setQuantidadeTrocada] = useState('');
  const [dataTroca, setDataTroca] = useState('');

  return (
    <>
      
        <div className="container mx-auto p-4 px-4 py-8">
            <main className="bg-indigo-200 p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4 text-indigo-800">
                    Por que pedimos informações do veículo?
                </h1>
                <p className="text-indigo-700 mb-6">
                    Com o intuito de prestar o melhor serviço aos nossos clientes, necessitamos saber das manutenções realizadas e quando foram feitas, assim como precisamos saber sobre trocas de baterias e quaisquer outras manutenções e consertos realizados no veículo.
                </p>
            </main>

            <section className="mt-8">
                <h2 className="text-xl font-semibold text-indigo-800 mb-4">INFORMAÇÕES DE USO DO VEÍCULO</h2>
                <div className="space-y-6">
                    <div>
                        <label htmlFor="idkm" className="block text-indigo-700 font-medium mb-2">Qual a km atual?</label>
                        <input type="text" name="km" id="idkm" value={km} onChange={(e) => setKm(e.target.value)} className="w-full px-4 py-2 border rounded-lg" />
                    </div>

                <div>
                    <label htmlFor="idpneu" className="block text-indigo-700 font-medium mb-2">Quando foi a última calibragem dos pneus?</label>
                    <input type="date" name="pneu" id="idpneu" value={pneuData} onChange={(e) => setPneuData(e.target.value)} className="w-full px-4 py-2 border rounded-lg" />
                </div>

                <div>
                    <label htmlFor="idpneuT" className="block text-indigo-700 font-medium mb-2">Já trocou os pneus?</label>
                    <select name="pneuT" id="idpneuT" value={pneuTrocado} onChange={(e) => setPneuTrocado(e.target.value)} className="w-full px-4 py-2 border rounded-lg">
                        <option value="" disabled>Selecione uma opção</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="quais" className="block text-indigo-700 font-medium mb-2">Se sim, quantos pneus trocou?</label>
                    <input type="text" name="quais" id="quais" value={quantidadeTrocada} onChange={(e) => setQuantidadeTrocada(e.target.value)} className="w-full px-4 py-2 border rounded-lg" />
                </div>

                <div>
                    <label htmlFor="idql" className="block text-indigo-700 font-medium mb-2">Caso tenha trocado, quando foi?</label>
                    <input type="date" name="datatroca" id="iddataT" value={dataTroca} onChange={(e) => setDataTroca(e.target.value)} required className="w-full px-4 py-2 border rounded-lg" />
                </div>

                    <button onClick={() => alert("Informações confirmadas")} className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700"
                    >Confirmar Informações</button>
                </div>
            </section>
        </div>
            
    </>
    
  );
}
