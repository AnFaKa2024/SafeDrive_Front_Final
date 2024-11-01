"use client";
import { useState } from "react";
import { RiSave3Fill } from 'react-icons/ri'
import { FaTrash } from 'react-icons/fa';
import CadMecanica from "./CadMeca";
import CadOficina from "./CadOficina";

interface MecanicoProps {
  id: number;
  Nome: string;
  DN: string;
  Doc: string;
  Login: string;
  Senha: string;
}

interface OficinaProps {
  id: number;
  NomeFantasia: string;
  EndOficina: string;
}

export default function Page() {
  const [novoMecanico, setNovoMecanico] = useState<MecanicoProps>({
    id: 0,
    Nome: "",
    DN: "",
    Doc: "",
    Login: "",
    Senha: "",
  });

  const [novaOficina, setNovaOficina] = useState<OficinaProps>({
    id: 0,
    NomeFantasia: "",
    EndOficina: "",
  });

  const adicionarMecanicoEOficina = () => {
    if (!novaOficina.NomeFantasia || !novaOficina.EndOficina) {
      alert("Você deve preencher todos os campos da oficina.");
      return;
    }
    if (!novoMecanico.Nome || !novoMecanico.DN || !novoMecanico.Doc || !novoMecanico.Login || !novoMecanico.Senha) {
      alert("Você deve preencher todos os campos do mecânico.");
      return;
    }

    console.log("Oficina adicionada:", novaOficina);
    console.log("Mecânico adicionado:", novoMecanico);
    
    setNovoMecanico({ id: 0, Nome: "", DN: "", Doc: "", Login: "", Senha: "" });
    setNovaOficina({ id: 0, NomeFantasia: "", EndOficina: "" });
  };

  return (
    <div>

      {/* Formulário de Mecânico */}
      <section className="mb-6">
        <CadMecanica {...novoMecanico} />
      </section>
      {/* Formulário de Oficina */}
      <section className="mb-6">
        <CadOficina {...novaOficina} />
      </section>
      <div className="flex justify-evenly">
        <button
          onClick={adicionarMecanicoEOficina}
          className="w-56 bg-blue-600 text-white py-2 mt-2 rounded flex items-center justify-center hover:bg-blue-700"
        >
          <RiSave3Fill className="mr-2" /> Salvar
        </button>

      </div>
    </div>
  );
}
