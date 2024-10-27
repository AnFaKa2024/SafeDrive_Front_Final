

import { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaList } from 'react-icons/fa';

export default function Orcamento() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [tipoDefeito, setTipoDefeito] = useState('pneu'); // Estado para o tipo de defeito

  // Função para adicionar item
  const handleAddItem = () => {
    if (item.trim() === '') return;
    if (editingIndex !== null) {
      // const updatedItems = items.map((i, index) => (index === editingIndex ? item : i));
      // setItems(updatedItems);
      // setEditingIndex(null);
    } else {
      // setItems([...items, `${item} (${tipoDefeito})`]); // Adiciona o tipo de defeito
    }
    setItem('');
  };

  // Função para editar um item
  // const handleEditItem = (index) => {
  //   setItem(items[index].split(' (')[0]); // Remove o tipo do item ao editar
  //   setEditingIndex(index);
  // };

  // Função para excluir um item
  // const handleDeleteItem = (index) => {
  //   const updatedItems = items.filter((_, idx) => idx !== index);
  //   setItems(updatedItems);
  // };

  // Função para listar itens
  const handleListItems = () => {
    alert('Itens consultados: ' + items.join(', '));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center -mt-10 mb-4"><b>ORÇAMENTO</b></h1>

      <div className="flex mb-4">
        <select value={tipoDefeito} onChange={(e) => setTipoDefeito(e.target.value)} className="border border-indigo-400 hover:bg-indigo-50 p-2 mb-4 rounded mr-2">
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

        <input type="text" value={item} onChange={(e) => setItem(e.target.value)} placeholder="Digite o nome do item" className="p-2 mb-4 border rounded border-indigo-400  w-96"/>
        
        <button onClick={handleAddItem} className="flex items-center bg-green-500 w-32 text-white px-2 py-2 mt-4 rounded ml-2">
          <FaPlus className="mr-2" /> Adicionar
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Itens Consultados</h2>
        <ul className="list-disc pl-5">
          {items.map((i, index) => (
            <li key={index} className="flex justify-between items-center">
              {i}
              <div>
                <button onClick={() => handleEditItem(index)} className="text-indigo-500 mr-2">
                  <FaEdit />
                </button>
                <button onClick={() => handleDeleteItem(index)} className="text-red-500">
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleListItems}
        className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 flex items-center"
      >
        <FaList className="mr-2" /> Listar Itens
      </button>
    </div>
  );
}