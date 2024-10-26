"use client";

import RodapeCad from "@/components/RodapeCad";
import DadosVeiculo from "./DadosVeiculo";
import Filtro from "./Filtro";
import Fluido from "./Fluido";
import Historico from "../Historico/page";
import Observacao from "../Relatos/Obs";
import Cabecalho from "@/components/Cabecalho";



export default function CadVeiculo() {

  const valorDaCategoria = "Carro";
  const valorDaPlaca = "ABC123";      
  const valorDoFiltroAr = new Date("2024-01-01");
  const valorDoFiltroMotor = new Date("2024-01-01");
  const valorDoFiltroCombustivel = new Date("2024-01-01");
  const valorDoOleoMotor = new Date("2024-01-01");
  const valorDoOleoFreio = new Date("2024-01-01");
  const valorDaAguaRadiador = new Date("2024-01-01");
 



  return (
    <>
      <Cabecalho />
    
      <header className="bg-indigo-200   text-indigo-950 p-6 text-center mt-3">
        
        <h1 className="text-3xl font-bold">CADASTRE O VEÍCULO</h1>
        
        <p className="mt-2 font-bold text-xl rounded-lg shadow-md">Preencha os campos com os dados do veículo</p>

      </header>

      <form className="bg-white p-8 shadow-md rounded-lg space-y-6">
        <DadosVeiculo 
          Categoria={valorDaCategoria}
          Placa={valorDaPlaca}/>

        <Filtro 
          FiltroAr={valorDoFiltroAr}
          FiltroMotor={valorDoFiltroMotor}
          FiltroCombustivel={valorDoFiltroCombustivel}
        />

        <Fluido 
          OleoMotor={valorDoOleoMotor}
          OleoFreio={valorDoOleoFreio}
          AguaRadiador={valorDaAguaRadiador}
        />

        <Historico/>

        <Observacao />
         

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Confirmar</button>
      </form>
      <RodapeCad />
    </>
  );
}
