import Cabecalho from "@/components/Cabecalho";
import { DivDiag } from "@/styled";
import { useEffect, useState } from "react"; // Para gerenciar estado e efeito
import { fetchUserProfile, updateUserProfile, deleteUserAccount } from "@/services/api"; // Funções para chamadas de API
import { NovoCondProps } from "@/types";


export default function Perfil({name, value, email}: NovoCondProps){
          

  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    // Chamar a API para buscar o perfil do usuário
    const getUserProfile = async () => {
      try {
        const profileData = await fetchUserProfile();
        setUser(profileData);
      } catch (error) {
        setErrorMessage("Erro ao buscar perfil do usuário.");
      }
    };
    getUserProfile();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(user);
      setSuccessMessage("Perfil atualizado com sucesso!");
      setIsEditing(false);
    } catch (error) {
      setErrorMessage("Erro ao atualizar perfil.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteUserAccount();
      setSuccessMessage("Conta deletada com sucesso.");
      // Redirecionar ou realizar outra ação após a exclusão
    } catch (error) {
      setErrorMessage("Erro ao deletar conta.");
    }
  };


  return(
    <>
      <Cabecalho/>
        <DivDiag>
  
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

        {user && (
          <form onSubmit={handleUpdate}>
            <div>
              <label>Nome:</label>
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({...user, name: e.target.value })}
                disabled={!isEditing}
              />
            </div>
            <div>
              <label>E-mail:</label>
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                disabled={!isEditing}
              />
            </div>
            <button type="button" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? "Cancelar" : "Editar"}
            </button>
            {isEditing && <button type="submit">Salvar</button>}
          </form>
        )}

        <button onClick={handleDelete} style={{ color: "red" }}>
          Deletar Conta
        </button>
      </DivDiag>
    </>
  );
}































        </DivDiag>
    </>  
    
 )
}