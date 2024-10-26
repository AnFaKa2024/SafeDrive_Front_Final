"use client";

import RodapeCad from "@/components/RodapeCad";
import DadosVeiculo from "./DadosVeiculo";
import Filtro from "./Filtro";
import Fluido from "./Fluido";


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
      
      <header className=" bg-indigo-200 p-3 m-1 rounded-lg shadow-md text-indigo-950  text-center mt-3 font-bold">
        
        <h1 className="text-3xl">CADASTRE O VEÍCULO</h1>
        
        <p className="text-xl">Preencha os campos com os dados do veículo</p>

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
               
      </form>

      <RodapeCad/>
      
    </>
  );
}
