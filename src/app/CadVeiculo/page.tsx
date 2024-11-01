"use client"; 
import { FaCheck, FaTrash} from 'react-icons/fa';
import { useState } from "react";
import DadosVeiculo from "./DadosVeiculo";
import Filtro from "./Filtro";
import Fluido from "./Fluido";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { DadosVeiculoProps, FiltroProps, FluidoProps } from "@/types";
import RodapeCad from '@/components/RodapeCad';

export default function App() {
  const [dadosVeiculo, setDadosVeiculo] = useState<DadosVeiculoProps>({
    Categoria: '',
    Placa: '',
  });

  const [filtros, setFiltros] = useState<FiltroProps>({
    FiltroAr: new Date(),
    FiltroMotor: new Date(),
    FiltroCombustivel: new Date(),
  });

  const [fluidos, setFluidos] = useState<FluidoProps>({
    OleoMotor: new Date(),
    OleoFreio: new Date(),
    AguaRadiador: new Date(),
  });

  const handleVeiculoChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    setDadosVeiculo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFiltroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFiltros((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFluidoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFluidos((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert(`Veículo Adicionado`);

    setDadosVeiculo({ Categoria: '', Placa: '' });
    setFiltros({ FiltroAr: new Date(), FiltroMotor: new Date(), FiltroCombustivel: new Date() });
    setFluidos({ OleoMotor: new Date(), OleoFreio: new Date(), AguaRadiador: new Date() });
  };

  return (

    <>
      <header className="flex items-center justify-end p-4" >
        <Link href="/Home" className= "botao-voltar-home -mt-24 text-white text-5xl "><FaHome className="" /></Link>
      </header>
     
    <div className="p-4">
      <DadosVeiculo 
        Categoria={dadosVeiculo.Categoria} 
        Placa={dadosVeiculo.Placa}
        handleInputChange={handleVeiculoChange}
      />
      <Filtro 
        FiltroAr={filtros.FiltroAr} 
        FiltroMotor={filtros.FiltroMotor} 
        FiltroCombustivel={filtros.FiltroCombustivel} 
        handleInputChange={handleFiltroChange}
      />
      <Fluido 
        OleoMotor={fluidos.OleoMotor} 
        OleoFreio={fluidos.OleoFreio} 
        AguaRadiador={fluidos.AguaRadiador} 
        handleInputChange={handleFluidoChange}
      />
      <div className="flex justify-evenly">
        <button 
          className="w-56 bg-green-600 text-white py-2 mt-4 rounded flex items-center justify-center hover:bg-green-700"
          onClick={handleSubmit}
        >
          <FaCheck className="mr-2" />Confirmar Todos os Dados
        </button>

        <button
          className="w-56 bg-red-600 text-white py-2 mt-4 rounded flex items-center justify-center hover:bg-red-700"
          onClick={() => alert('Informações Limpas!')}><FaTrash className="mr-2" /> Limpar Informações
        </button>

      </div>
    </div>

    <RodapeCad/>
    </>
  )
}
