"use client";

import { useState } from 'react';

export default function Perfil() {
  // dados do usuário
  const [usuario, setUsuario] = useState({
    nome: 'João Silva',
    email: 'joao.silva@email.com',
    observacoes: '',
  });

  // armazenar a lista de observações
  const [listaObservacoes, setListaObservacoes] = useState([]);

  // atualizar os dados do usuário
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Verifica se o evento é um input válido
    if (name && (name === 'nome' || name === 'email' || name === 'observacoes')) {
      setUsuario((prev) => ({ ...prev, [name]: value }));
    }
  };

  // adicionar observação
  const handleAddObservacao = (e) => {
    e.preventDefault();
    if (usuario.observacoes.trim() !== "") { // Verifica se há texto antes de adicionar
      setListaObservacoes((prevLista) => [...prevLista, usuario.observacoes.trim()]);
      setUsuario((prev) => ({ ...prev, observacoes: '' })); // Usar função de callback
    }
  };

  // excluir observação
  const handleDeleteObservacao = (index) => {
    if (typeof index === 'number' && index >= 0 && index < listaObservacoes.length) {
      setListaObservacoes((prevLista) => prevLista.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-4">Perfil do Usuário</h1>
      <form className="mb-6">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="nome">Nome:</label>
          <input
            id="nome"
            type="text"
            name="nome"
            value={usuario.nome}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={usuario.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          />
        </div>
      </form>
      <form onSubmit={handleAddObservacao}>
        <textarea
          name="observacoes"
          value={usuario.observacoes}
          onChange={handleChange}
          className="w-full h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          placeholder="Digite uma observação..."
        ></textarea>
        <button
          type="submit"
          disabled={!usuario.observacoes.trim()} // Desabilita o botão se não houver observação
          className={`mt-4 w-full p-2 ${usuario.observacoes.trim() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'} text-white font-semibold rounded transition duration-200`}
        >
          Adicionar Observação
        </button>
      </form>
      <div className="mt-6">
        <h2 className="text-lg font-bold mb-2">Observações:</h2>
        <ul className="list-disc list-inside">
          {listaObservacoes.map((obs, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{obs}</span>
              <button
                className="ml-2 text-red-600 hover:text-red-800"
                onClick={() => handleDeleteObservacao(index)}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
