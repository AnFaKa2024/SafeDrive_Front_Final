import { useState, useEffect } from 'react';
import { FaPaperPlane, FaTrash } from 'react-icons/fa';

interface Comentario {
  id: number;
  texto: string;
}

export default function Comentarios() {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [novoComentario, setNovoComentario] = useState("");

  // Função para obter comentários existentes
  useEffect(() => {
    fetch('/api/comentarios')
      .then(res => res.json())
      .then(data => setComentarios(data))
      .catch(error => console.error('Erro ao buscar comentários:', error));
  }, []);

  // Função para enviar novo comentário
  const handleEnviar = async () => {
    if (novoComentario.trim()) {
      try {
        const response = await fetch('/api/comentarios', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ texto: novoComentario }),
        });
        
        const novoComentarioSalvo = await response.json();
        setComentarios([...comentarios, novoComentarioSalvo]);
        setNovoComentario("");
      } catch (error) {
        console.error('Erro ao enviar comentário:', error);
      }
    }
  };

  // Função para deletar um comentário
  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/comentarios/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setComentarios(comentarios.filter(comentario => comentario.id !== id));
      } else {
        throw new Error('Erro ao deletar comentário');
      }
    } catch (error) {
      console.error('Erro ao deletar comentário:', error);
    }
  };

  return (

    <main className="text-center">
      <h2 className="text-2xl font-bold mb-4">DEIXE SEU COMENTÁRIO OU SUGESTÕES DE NOVOS SERVIÇOS NA CAIXINHA ABAIXO</h2>
      <div className="max-w-lg mx-auto p-4">
        <textarea className="w-full p-2 text-center border rounded mb-4" rows={3} placeholder="DEIXE SEU COMENTÁRIO OU SUGESTÕES"
          value={novoComentario} onChange={(e) => setNovoComentario(e.target.value)}/>
        <div className="flex justify-end space-x-2 mb-4">
          <button
            className="bg-green-500 text-white p-2 rounded flex items-center space-x-1"
            onClick={handleEnviar}
          >
            <FaPaperPlane /> <span>Enviar</span>
          </button>
        </div>
        <ul>
          {comentarios.map((comentario) => (
            <li key={comentario.id} className="border-b py-2 flex justify-between items-center">
              <span>{comentario.texto}</span>
              <button
                className="bg-red-500 text-white p-2 rounded"
                onClick={() => handleDelete(comentario.id)}
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}



