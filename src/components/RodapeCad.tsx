"use client"

import { useState } from "react"
import { FaSave } from "react-icons/fa";

export default function RodapeCad() {
  const [isSaved, setIsSaved] = useState(false);
  
  
  const handleSave = () => {
    // Ações de salvar, por exemplo, enviar dados para o servidor
    alert("Cadastro realizado");
    setIsSaved(true); // Atualiza o estado para habilitar o botão de redirecionamento
  }

  const handleGoHome = () => {
    if (isSaved) {
      window.location.href ="/Home" // Redireciona para a página inicial
    }
  }

  return (
    <footer className="bg-indigo-100 p-4 m-1 mt-2 flex justify-evenly items-center rounded border border-indigo-100">
      {/* Botão de Cadastrar com ícone */}
      <button 
        onClick={handleSave} 
        className="flex items-center bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
      >
        <FaSave className="mr-2" />
        Salvar
      </button>

      {/* Botão de redirecionamento para a Home */}
      <button 
        onClick={handleGoHome} 
        className={`flex items-center py-2 px-4 rounded transition ${
          isSaved ? "bg-purple-600 text-white hover:bg-purple-700" : "bg-gray-400 text-gray-700 cursor-not-allowed"
        }`} 
        disabled={!isSaved}
      >
        Ir para Home
      </button>

      {/* Input de arquivo */}
      <input 
        type="file" 
        className="bg-indigo-200 text-indigo-950 border border-indigo-300 p-2 rounded mt-2" 
        name="documento" 
        id="idDoc" 
      />
    </footer>
  );
}









// import { FaSave } from "react-icons/fa";

// export default function RodapeCad() {
//   return (
//     <footer className="bg-indigo-100 p-4 m-1 mt-2 flex justify-evenly items-center rounded border border-indigo-100">
//       {/* Botão de Cadastrar com ícone */}
//       <button 
//         onClick={() => alert("Cadastro realizado")} 
//         className="flex items-center bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
//       >
//         <FaSave className="mr-2" />
//         Salvar
//       </button>
     
//       {/* Input de arquivo */}
//       <input 
//         type="file" 
//         className="bg-indigo-200 text-indigo-950 border border-indigo-300 p-2 rounded mt-2" 
//         name="documento" 
//         id="idDoc" 
//       />
//     </footer>
//   )
// }
