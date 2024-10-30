"use client"

import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { useEffect, useState } from 'react';

// COLOCAR ESSA PARTE EM PAYHON - OU ALGO SEMENLHANTE

// # api.py
// from fastapi import FastAPI

// app = FastAPI()

// # Dados de exemplo
// defeitos = [
//     {"id": 1, "descricao": "Falha no motor", "data": "2024-01-10"},
//     {"id": 2, "descricao": "Vazamento de óleo", "data": "2024-02-15"},
//     # Adicione mais registros conforme necessário
// ]

// @app.get("/api/defeitos")
// async def listar_defeitos():
//     return defeitos



export default function Historico(){
  const [defeitos, setDefeitos] = useState([]);

  useEffect(() => {
    async function fetchDefeitos() {
      try {
        const response = await fetch('http://localhost:8000/api/defeitos'); // URL da API Python
        const data = await response.json();
        setDefeitos(data);
      } catch (error) {
        console.error('Erro ao buscar registros:', error);
      }
    }

    fetchDefeitos();
  }, []);


  return(
    
    <>
      <header className="flex items-center justify-end p-4" >
        <Link href="/Home" className= "botao-voltar-home -mt-24 text-white text-5xl "><FaHome className="" /></Link>
      </header>

      <div className="p-6">
        <h1 className="text-3xl text-center font-bold mt-2 mb-2"><b>HISTÓRICO DE DEFEITOS DO VEÍCULO</b></h1>
        <ul className="space-y-4">
          {defeitos.map((defeito) => (
            <li key={defeito.id} className="p-4 border border-indigo-200 rounded-lg shadow">
              <p><strong>Data:</strong> {defeito.data}</p>
              <p><strong>Descrição:</strong> {defeito.descricao}</p>
            </li>))}
        </ul>
      </div>
    
    
    </>
    
    
  )
}