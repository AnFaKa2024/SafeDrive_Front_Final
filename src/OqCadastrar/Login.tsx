import { DivMec } from "@/styled";
import { useNavigate } from "react-router-dom"; 

export default function Login() {
  const navigate = useNavigate(); 

  const handleLogin = () => {
    alert('Acessando o portal da SafeDrive');
    navigate('/home'); 
  };

  

  const handleCadastro = () => {
    alert('Faça seu cadastro');
    navigate('/primeiroacesso'); 
  };



  return ( 
 
    <DivMec>
     
      <h1><b>SAFE DRIVE</b></h1>

      <label htmlFor="idLogin">Login</label>
      <input type="text" className="login" id="idLogin" />

      <label htmlFor="idSenha">Senha</label>
      <input type="password" className="senha" id="isSenha" />

      <br />

      <button className="BotaoEntrar" onClick={handleLogin}>
        Acessar SafeDrive
      </button>

      
      {/* <button className="NovoCadastro" onClick={handleCadastro}>
        Novo Cadastro
      </button> */}
      
      
      <button
        className="BotaoRecuperaSenha"
        onClick={() => alert('Reset da senha enviado para o e-mail cadastrado')}
      >
        Recuperar Senha
      </button>
    </DivMec>
  );
}
