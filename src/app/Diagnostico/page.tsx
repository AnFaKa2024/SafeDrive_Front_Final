"use client"; 

import Link from "next/link";
import { useState } from 'react';
import { FaPlus, FaTrash, FaCheck, FaEdit, FaHome } from 'react-icons/fa';

export default function App() {
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null);
  const [video, setVideo] = useState(null);
  const [audio, setAudio] = useState(null);
  const [diagnosticos, setDiagnosticos] = useState([]);
  const [editandoId, setEditandoId] = useState(null); // Armazena o ID do diagnóstico que está sendo editado

  // Função para adicionar ou atualizar um diagnóstico
  const handleAddOrUpdateDefeito = () => {
    if (!descricao.trim()) {
      alert("Preencha a descrição do defeito");
      return;
    }

    const novoDiagnostico = { 
      id: editandoId ? editandoId : diagnosticos.length + 1,
      descricao, 
      imagem, 
      video, 
      audio 
    };

    if (editandoId) {
      // Atualiza diagnóstico existente
      setDiagnosticos(diagnosticos.map(diag => diag.id === editandoId ? novoDiagnostico : diag));
      setEditandoId(null); // Sai do modo de edição
    } else {
      // Adiciona novo diagnóstico
      setDiagnosticos([...diagnosticos, novoDiagnostico]);
    }

    // Limpa o formulário
    setDescricao('');
    setImagem(null);
    setVideo(null);
    setAudio(null);
    alert(editandoId ? "Defeito atualizado com sucesso!" : "Defeito adicionado com sucesso!");
  };

  // Função para editar um diagnóstico
  const handleEdit = (id) => {
    const diagnostico = diagnosticos.find(diag => diag.id === id);
    setDescricao(diagnostico.descricao);
    setImagem(diagnostico.imagem);
    setVideo(diagnostico.video);
    setAudio(diagnostico.audio);
    setEditandoId(id); // Define o modo de edição
  };

  // Função para excluir um diagnóstico
  const handleDelete = (id) => {
    const confirmar = confirm("Deseja realmente excluir este diagnóstico?");
    if (confirmar) {
      setDiagnosticos(diagnosticos.filter(diag => diag.id !== id));
      alert("Diagnóstico excluído com sucesso!");
    }
  };

  // Função para limpar arquivos selecionados
  const handleClearFiles = () => {
    setImagem(null);
    setVideo(null);
    setAudio(null);
  };

  return (

    <>
        <header className="flex items-center justify-end p-4" >
        <Link href="/Home" className= "botao-voltar-home -mt-24 text-white text-5xl "><FaHome className="" /></Link>
      </header>
    
    <div className="p-6">
      <h1 className="text-3xl text-center font-bold mb-4"><b>INFORME O DEFEITO APRESENTADO PELO VEÍCULO</b></h1>
      
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-xl"><strong>Descrição do defeito</strong></label>
          <textarea
            className="w-full p-2 border border-indigo-700 rounded"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Imagem:</label>
          <input type="file" accept="image/*" onChange={(e) => setImagem(e.target.files[0])} />
        </div>
        <div>
          <label className="block font-semibold">Vídeo:</label>
          <input type="file" accept="video/*" onChange={(e) => setVideo(e.target.files[0])} />
        </div>
        <div>
          <label className="block font-semibold">Áudio:</label>
          <input type="file" accept="audio/*" onChange={(e) => setAudio(e.target.files[0])} />
        </div>
      </div>

      <div className="flex justify-between">
        <button 
          onClick={handleAddOrUpdateDefeito} 
          className="bg-green-500 w-48 text-white px-4 py-2 rounded flex items-center justify-center hover:bg-green-600"
        >
          <FaPlus className="mr-2" /> {editandoId ? "Atualizar Defeito" : "Adicionar Defeito"}
        </button>

        <button
          type="button"
          onClick={handleClearFiles}
          className="bg-red-500 w-48 text-white px-4 py-2 rounded flex items-center justify-center hover:bg-red-600"
        >
          <FaTrash className="mr-2" /> Limpar Arquivos
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Lista de Diagnósticos</h2>
        {diagnosticos.length === 0 ? (
          <p className="text-gray-600">Nenhum diagnóstico adicionado.</p>
        ) : (
          <ul className="text-indigo-950 text-xl flex items-center mt-2 space-x-4 space-y-0">
            {diagnosticos.map((diag) => (
              <li key={diag.id} className="bg-indigo-100 p-3 border rounded shadow">
                <p><strong>Descrição:</strong> {diag.descricao}</p>
                {diag.imagem && <p><strong>Imagem:</strong> {diag.imagem.name}</p>}
                {diag.video && <p><strong>Vídeo:</strong> {diag.video.name}</p>}
                {diag.audio && <p><strong>Áudio:</strong> {diag.audio.name}</p>}

                <div className="justify-center flex space-x-2 mt-0 ">
                  <button 
                    onClick={() => handleEdit(diag.id)} 
                    className="w-32 bg-blue-600 text-white py-2 mt-6 rounded flex items-center justify-center hover:bg-blue-700"
                  >
                    <FaEdit className="mr-2" /> Editar
                  </button>
                  <button 
                    onClick={() => handleDelete(diag.id)} 
                    className="w-32 bg-red-600 text-white py-2 mt-6 rounded flex items-center justify-center hover:bg-red-700"
                  >
                    <FaTrash className="mr-2" /> Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </>
  )
}
