"use client"; 
import { useState } from 'react';
import { FaPlus, FaList } from 'react-icons/fa';

export default function App() {
  const [item, setItem] = useState('');  
  const [items, setItems] = useState<string[]>([]);  
  const [tipoDefeito, setTipoDefeito] = useState('pneu'); 

  const handleAddItem = () => {
    if (item.trim() === '') return; 
    setItems([...items, `${item} (${tipoDefeito})`]); 
    setItem(''); 
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center -mt-5 mb-4"><b>ORÇAMENTO</b></h1>

      <div className="flex mb-4">
        <select 
          value={tipoDefeito} 
          onChange={(e) => setTipoDefeito(e.target.value)} 
          className="border border-indigo-400 hover:bg-indigo-50 p-2 mb-4 rounded mr-2"
        >
          <option value="">Selecione uma opção</option>
          <option value="alinhamento">Alinhamento</option>
          <option value="amortecedor">Amortecedores</option>
          <option value="eletrica">Elétrica</option>
          <option value="fluidos">Flúidos</option>
          <option value="motor">Motor</option>
          <option value="pneu">Pneu</option>
          <option value="freio">Pastilha de Freios</option>
          <option value="suspensao">Suspensão</option>
          <option value="outros">Outros</option>
        </select>

        <input 
          type="text" 
          value={item} 
          onChange={(e) => setItem(e.target.value)} 
          placeholder="Digite o nome do item" 
          className="p-2 mb-4 border rounded border-indigo-400 w-96"
        />
        
        <button 
          onClick={handleAddItem} 
          className="flex items-center bg-green-500 w-32 text-white px-2 py-2 mt-4 rounded ml-2"
        >
          <FaPlus className="mr-2" /> Adicionar
        </button>
      </div>

      <div className="bg-indigo-100 p-3 m-1 mt-2 rounded-lg shadow-sm space-x-4">
        <h2 className="text-indigo-950 text-xl font-semibold flex items-center"><FaList className="mr-2" />Lista de Itens Consultados</h2>
        <ul className="list-disc pl-5">
          {items.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
