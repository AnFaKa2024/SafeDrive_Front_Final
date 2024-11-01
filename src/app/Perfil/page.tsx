"use client"; 

import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import { FaSave, FaEdit, FaTrash, FaPaperPlane } from "react-icons/fa";

export default function EditarEndereco() {
  const [endereco, setEndereco] = useState({
    tipo: "residencial",
    rua: "",
    numero: "",
    cidade: "",
    estado: "",
    cep: "",
  });

  const [enderecos, setEnderecos] = useState([]);
  const [editIndex, setEditIndex] = useState<number | null>(null); // Índice de edição

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEndereco((prev) => ({ ...prev, [name]: value }));
  };

  const handleSalvarEndereco = () => {
    if (editIndex !== null) {
      const enderecosAtualizados = enderecos.map((end, index) =>
        index === editIndex ? endereco : end
      );
      setEnderecos(enderecosAtualizados);
      setEditIndex(null);
    } else {
      setEnderecos([...enderecos, endereco]);
    }
    setEndereco({ tipo: "residencial", rua: "", numero: "", cidade: "", estado: "", cep: "" });
  };

  const handleEditarEndereco = (index) => {
    setEndereco(enderecos[index]);
    setEditIndex(index);
  };

  const handleExcluirEndereco = (index) => {
    setEnderecos(enderecos.filter((_, i) => i !== index));
  };

  const handleEnviarEndereco = async () => {
  };

  return (
    <>
      <header className="flex items-center justify-end p-4 ">
        <Link href="/Home" className="text-white text-5xl -mt-24 hover:text-indigo-200 transition-colors"><FaHome /></Link>
      </header>

      <div>
        <h1 className="text-3xl text-center -mt-0 mb-4 text-indigo-950">
          <b>EDITAR ENDEREÇO</b>
        </h1>
      </div>

      <main className="bg-indigo-100 p-3 m-1 mt-2 rounded-lg shadow-sm space-x-4">
        <form className="mb-6">
          <div className="mb-4">
            <label className="block text-indigo-950">Tipo de Endereço:</label>
            <select name="tipo" value={endereco.tipo} onChange={handleChange} className="w-96 p-2 border border-indigo-400 rounded-md">
              <option value="">Selecione uma opção</option>
              <option value="residencial">Residencial</option>
              <option value="comercial">Comercial</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="mb-4">
              <label className="block text-indigo-950">Rua</label>
              <input type="text" name="rua" value={endereco.rua} onChange={handleChange} className="w-96 p-2 border border-indigo-300 rounded-md"/>
            </div>

            <div className="mb-4">
              <label className="block text-indigo-950">Número</label>
              <input type="text" name="numero" value={endereco.numero} onChange={handleChange} className="w-32 p-2 border border-indigo-300 rounded-md"/>
            </div>

            <div className="mb-4">
              <label className="block text-indigo-950">Cidade</label>
              <input type="text" name="cidade" value={endereco.cidade} onChange={handleChange} className="w-56 p-2 border border-indigo-300 rounded-md"/>
            </div>

            <div className="mb-4">
              <label className="block text-indigo-950">Estado</label>
              <input type="text" name="estado" value={endereco.estado} onChange={handleChange} className="w-20 p-2 border border-indigo-300 rounded-md"/>
            </div>

            <div className="mb-4">
              <label className="block text-indigo-950">CEP</label>
              <input type="text" name="cep" value={endereco.cep} onChange={handleChange} className="w-44 p-2 border border-indigo-300 rounded-md"/>
            </div>
          </div>

          <div className="flex justify-evenly mt-4">
            <button type="button" onClick={handleSalvarEndereco} className="flex items-center bg-green-500 text-white px-4 py-2 rounded">
              <FaSave className="mr-2" /> {editIndex !== null ? "Atualizar" : "Salvar"}
            </button>

            <button type="button" onClick={handleEnviarEndereco} className="flex items-center bg-blue-500 text-white px-4 py-2 rounded">
              <FaPaperPlane className="mr-2" /> Enviar
            </button>
          </div>
        </form>

        <div className="mt-6">
          <h2 className="text-lg font-bold mb-2 text-indigo-950">Endereços Cadastrados</h2>
          <ul className="list-disc list-inside">
            {enderecos.map((end, index) => (
              <li key={index} className="flex justify-between items-center mb-2">
                <span>
                  {end.tipo}: {end.rua}, {end.numero} {end.cidade} - {end.estado}, CEP: {end.cep}
                </span>
                <div className="flex space-x-2">
                  <button onClick={() => handleEditarEndereco(index)} className="text-yellow-500 hover:text-yellow-700">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleExcluirEndereco(index)} className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
