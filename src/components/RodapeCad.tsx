"use client"


import { FaSave, FaEraser } from "react-icons/fa";

export default function RodapeCad() {
  return (
    <footer className="bg-indigo-100 p-4 m-1 mt-2 flex justify-evenly items-center rounded border border-indigo-100">
      {/* Botão de Cadastrar com ícone */}
      <button 
        onClick={() => alert("Cadastro realizado")} 
        className="flex items-center bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
      >
        <FaSave className="mr-2" />
        Salvar
      </button>

      {/* Botão de Limpar Formulário com ícone */}
      {/* <button 
        onClick={() => alert("Formulário limpo")} 
        className="flex items-center bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition mt-2"
      >
        <FaEraser className="mr-2 " />
        Limpar Formulário
      </button> */}

      {/* Input de arquivo */}
      <input 
        type="file" 
        className="bg-indigo-200 text-indigo-950 border border-indigo-300 p-2 rounded mt-2" 
        name="documento" 
        id="idDoc" 
      />
    </footer>
  )
}
