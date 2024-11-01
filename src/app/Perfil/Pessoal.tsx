

import { useState } from "react";
import { FaSave, FaEdit, FaTrash, FaPaperPlane } from "react-icons/fa"; // Ícones para as ações CRUD

export default function EditarEndereco() {
  // Dados do endereço do usuário
  const [endereco, setEndereco] = useState({
    tipo: "residencial", // Pode ser 'residencial' ou 'comercial'
    rua: "",
    numero:"",
    cidade: "",
    estado: "",
    cep: "",
  });

  // Armazena uma lista de endereços cadastrados
  const [enderecos, setEnderecos] = useState([]);

  // Atualizar os dados do endereço
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEndereco((prev) => ({ ...prev, [name]: value }));
  };

  // Salvar o endereço no banco de dados
  const handleSalvarEndereco = async () => {
    // Conecte-se ao banco e salve o endereço
    const novoEndereco = { ...endereco };
    setEnderecos((prevEnderecos) => [...prevEnderecos, novoEndereco]);
    setEndereco({ tipo: "residencial", rua: "", numero: "", cidade: "", estado: "", cep: "" });
    alert("Endereço salvo com sucesso!");
  };

  // Editar um endereço
  const handleEditarEndereco = (index) => {
    const enderecoParaEditar = enderecos[index];
    setEndereco(enderecoParaEditar);
    setEnderecos((prevEnderecos) =>
      prevEnderecos.filter((_, i) => i !== index)
    );
  };

  // Excluir um endereço
  const handleExcluirEndereco = (index) => {
    setEnderecos((prevEnderecos) =>
      prevEnderecos.filter((_, i) => i !== index)
    );
    alert("Endereço excluído!");
  };

  // Enviar endereço para integração Java
  const handleEnviarEndereco = async () => {
    // Conectar com a interface Java para envio do endereço
    alert("Endereço enviado com sucesso para o servidor!");
  };

  return (
    <>
    
      <div>
        <h1 className="text-3xl text-center -mt-5 mb-4 text-indigo-950"><b>EDITAR ENDEREÇO</b></h1>
      </div>

      <main className="bg-indigo-100 p-3 m-1 mt-2 rounded-lg shadow-sm space-x-4">
        <form className="mb-6">

          <div className="mb-4">
            <label className="block text-indigo-950">Tipo de Endereço:</label>

            <select name="tipo" value={endereco.tipo} onChange={handleChange} className="w-96 p-2 border border-indigo-400 rounded-md">
              <option value="">Selecione uma opção</option>
              <option value="residencial">Residencial</option>
              <option value="comercial">Comercial</option>
            </select>
          </div>

          <div className=" flex flex-wrap gap-4 mb-4">

            <div className="mb-4">
              <label className="block text-indigo-950">Rua</label>
              <input type="text" name="rua" value={endereco.rua} onChange={handleChange} className="w-96 p-2 border border-indigo-300 rounded-md"/>
            </div>

            <div className="mb-4">
              <label className="block text-indigo-950">Número</label>
              <input type="text" name="rua" value={endereco.numero} onChange={handleChange} className="w-32 p-2 border border-indigo-300 rounded-md"/>
            </div>

            <div className="mb-4">
              <label className="block text-indigo-950">Cidade</label>
              <input type="text" name="cidade" value={endereco.cidade} onChange={handleChange} className="w-56 p-2 border border-indigo-300 rounded-md"/>
            </div>

            <div className="mb-4">
              <label className="block text-indigo-950">Estado</label>
              <input type="text" name="estado" value={endereco.estado} onChange={handleChange} className="w-20 p-2 border border-indigo-300 rounded-md"/>
            </div>

            <div className="mb-4">
              <label className="block text-indigo-950">CEP</label>
              <input type="text" name="cep" value={endereco.cep} onChange={handleChange} className="w-44 p-2 border border-indigo-300 rounded-md"/>
            </div>

          </div>

          <div className="flex justify-evenly mt-4">
            <button type="button" onClick={handleSalvarEndereco} className="flex items-center bg-green-500 text-white px-4 py-2 rounded">
              <FaSave className="mr-2" /> Salvar
            </button>

            <button type="button" onClick={handleEnviarEndereco} className="flex items-center bg-blue-500 text-white px-4 py-2 rounded">
              <FaPaperPlane className="mr-2" /> Enviar
            </button>
          </div>

        </form>

        <div className="mt-6">
          <h2 className="text-lg font-bold mb-2 text-indigo-950">Endereços Cadastrados</h2>
          <ul className="list-disc list-inside">
            {enderecos.map((end, index) => (
              <li key={index} className="flex justify-between items-center mb-2">
                <span>
                  {end.tipo}: {end.rua}, {end.numero} {end.cidade} - {end.estado}, CEP: {end.cep}
                </span>

                <div className="flex space-x-2">
                  <button onClick={() => handleEditarEndereco(index)} className="text-yellow-500 hover:text-yellow-700">
                    <FaEdit />
                  </button>

                  <button onClick={() => handleExcluirEndereco(index)} className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </div>
              
              </li>
              
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
