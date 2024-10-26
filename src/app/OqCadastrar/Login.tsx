
// import { useNavigate } from 'react-router-dom';

export default function Login() {
  // const navigate = useNavigate();

  // const handleLogin = () => {
  //   alert('Acessando o portal da SafeDrive');
  //   navigate('/home');
  // };

  // const handleCadastro = () => {
  //   alert('Faça seu cadastro');
  //   navigate('/primeiroacesso');
  // };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8">SAFE DRIVE</h1>

      <label htmlFor="idLogin" className="text-lg mb-2">Login</label>
      <input
        type="text"
        className="w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
        id="idLogin"
      />

      <label htmlFor="idSenha" className="text-lg mb-2">Senha</label>
      <input
        type="password"
        className="w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
        id="idSenha"
      />

      <button
        className="w-64 p-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200 mb-4"
        // onClick={handleLogin}
      >
        Acessar SafeDrive
      </button>

      <button
        className="w-64 p-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-md transition duration-200 mb-4"
        // onClick={handleCadastro}
      >
        Novo Cadastro
      </button>

      <button
        className="w-64 p-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
        onClick={() => alert('Reset da senha enviado para o e-mail cadastrado')}
      >
        Recuperar Senha
      </button>
    </main>
  );
}
