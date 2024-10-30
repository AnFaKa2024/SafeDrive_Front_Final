import CabecalhoAcesso from '@/components/CabecalhoAcesso';
import Link from 'next/link';

export default function Login() {
  const handleLogin = () => {
    alert('Acessando o portal da SafeDrive');
  };

  const handleCadastro = () => {
    alert('Faça seu cadastro');
  };

  <CabecalhoAcesso/>

  return (
    <main className="flex flex-col items-center justify-center shadow-md rounded-lg mt-15 p-4 m-1 bg-indigo-700">
      <label htmlFor="idLogin" className="text-xl text-white font-semibold mb-2">Login</label>
      <input
        type="text"
        className="w-64 p-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mb-4"
        id="idLogin"
      />

      <label htmlFor="idSenha" className="text-xl text-white font-semibold mb-2">Senha</label>
      <input
        type="password"
        className="w-64 p-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mb-4"
        id="idSenha"
      />

      <Link href="/Home">
        <button
          className="w-64 p-2 text-xl bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition duration-200 mb-4"
          onClick={handleLogin}
        >
          Acessar SafeDrive
        </button>
      </Link>

      <Link href="/OqCadastrar">
        <button
          className="w-64 p-2 text-xl bg-indigo-300 hover:bg-indigo-400 text-gray-800 font-semibold rounded-md transition duration-200 mb-4"
          onClick={handleCadastro}
        >
          Novo Cadastro
        </button>
      </Link>

      <button
        className="w-64 p-2 text-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-md transition duration-200"
        onClick={() => alert('Reset da senha enviado para o e-mail cadastrado')}
      >
        Recuperar Senha
      </button>
    </main>
  );
}
