import { useState } from 'react';
import { FaCheck, FaTrash,  FaSave, FaPaperPlane } from 'react-icons/fa';


  // CÓDIGO PARA INTERFACE EM PYTHON 

  // from fastapi import FastAPI, File, UploadFile, Form
  // from typing import Optional

  // app = FastAPI()

  // @app.post("/api/defeitos")
  // async def criar_defeito(
  //     descricao: str = Form(...),
  //     imagem: Optional[UploadFile] = File(None),
  //     video: Optional[UploadFile] = File(None),
  //     audio: Optional[UploadFile] = File(None)
  // ):
  //     # Processamento dos dados (salvar em banco de dados ou diretórios)

  //     return {"message": "Defeito registrado com sucesso"}



export default function InserirDefeito() {

  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null);
  const [video, setVideo] = useState(null);
  const [audio, setAudio] = useState(null);

   // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
    e.preventDefault();
    await sendDataToAPI('http://localhost:8000/api/defeitos'); // Envia para o endpoint de envio final
    };

   
   // // Função para salvar como rascunho
  // const handleSave = async () => {
  //   await sendDataToAPI('http://localhost:8000/api/defeitos/rascunho'); // Envia para o endpoint de rascunho
  //   alert("Defeito salvo como rascunho!");
  // };

  // // Função para enviar os dados para a API Python
  //   const sendDataToAPI = async (url) => {
  //   const formData = new FormData();
  //   formData.append('descricao', descricao);
  //   if (imagem) formData.append('imagem', imagem);
  //   if (video) formData.append('video', video);
  //   if (audio) formData.append('audio', audio);

  //   try {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     if (!response.ok) {
  //       alert('Erro ao enviar o defeito.');
  //     }
  //   } catch (error) {
  //     console.error('Erro na requisição:', error);
  //     alert('Erro ao enviar o defeito.');
  //   }
  // };

    // Função para limpar arquivos selecionados
    const handleClearFiles = () => {
      setImagem(null);
      setVideo(null);
      setAudio(null);
    };


  return (
    <>

      <div className="p-6">
        <h1 className="text-3xl text-center -mt-10 font-bold mb-4"><b>RELATAR O DEFEITO APRESENTADO PELO VEÍCULO</b></h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            {/* <label className="block font-semibold">Imagem:</label>
            <input type="file" accept="image/*" onChange={(e) => setImagem(e.target.files[0])} />
          </div>
          <div>
            <label className="block font-semibold">Vídeo:</label>
            <input type="file" accept="video/*" onChange={(e) => setVideo(e.target.files[0])} />
          </div>
          <div>
            <label className="block font-semibold">Áudio:</label>
            <input type="file" accept="audio/*" onChange={(e) => setAudio(e.target.files[0])} /> */}
          </div>
          <button type="submit" className="bg-indigo-600 text-white mt-2 py-2 w-56 flex items-center justify-center rounded hover:bg-indigo-700">
          <FaPaperPlane className="mr-2" />
            Enviar Arquivos e Texto
          </button>
        </form>
      </div>
      <div className="flex justify-evenly">
          <button
            className="w-56 bg-green-600 text-white py-2 mt-2 rounded flex items-center justify-center hover:bg-green-700"
            onClick={() => alert('Confirmado!')}
          >
            <FaCheck className="mr-2" /> Confirmar Informações
          </button>
          
          <button
            className="w-56 bg-red-600 text-white py-2 mt-2 rounded flex items-center justify-center hover:bg-red-700"
            onClick={() => alert('Informações Limpas!')}
          >
            <FaTrash className="mr-2" /> Limpar Informações
          </button>

           {/* Botão para limpar arquivos */}
          <button
            type="button"
            onClick={handleClearFiles}
            className="w-52 flex justify-center items-center bg-red-600 text-white py-2 mt-2 rounded hover:bg-red-700"
          >
            <FaTrash className="mr-2" /> Limpar Arquivos
          </button>

        </div>
    </>
  )
}
