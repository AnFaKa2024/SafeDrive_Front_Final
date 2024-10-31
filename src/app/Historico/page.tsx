"use client"

import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { useEffect, useState } from 'react';

// Definição da interface Defeito
interface Defeito {
  id: number;
  descricao: string;
  data: string;
  }

export default function Historico() {
  const [defeitos, setDefeitos] = useState<Defeito[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDefeitos() {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:8000/api/defeitos');
        
        if (!response.ok) {
          throw new Error('Falha ao carregar os dados');
        }
        
        const data = await response.json();
        setDefeitos(data);
      } catch (error) {
        console.error('Erro ao buscar registros:', error);
        setError('Não foi possível carregar o histórico de defeitos');
      } finally {
        setIsLoading(false);
      }
    }

    fetchDefeitos();
  }, []);

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-BR');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-end p-4 bg-indigo-600">
        <Link 
          href="/Home" 
          className="text-white text-3xl hover:text-indigo-200 transition-colors"
          aria-label="Voltar para página inicial"
        >
          <FaHome />
        </Link>
      </header>

      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-900 mb-6">
          Histórico de Defeitos do Veículo
        </h1>

        {isLoading && (
          <div className="text-center py-4">
            <p>Carregando histórico...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-4 text-red-600">
            <p>{error}</p>
          </div>
        )}

        {!isLoading && !error && defeitos.length === 0 && (
          <div className="text-center py-4 text-gray-600">
            <p>Nenhum registro encontrado.</p>
          </div>
        )}

        {!isLoading && !error && defeitos.length > 0 && (
          <ul className="space-y-4">
            {defeitos.map((defeito) => (
              <li 
                key={defeito.id} 
                className="p-4 bg-white border border-indigo-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-gray-600 mb-2">
                  <strong>Data:</strong> {formatarData(defeito.data)}
                </p>
                <p className="text-gray-800">
                  <strong>Descrição:</strong> {defeito.descricao}
                </p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}