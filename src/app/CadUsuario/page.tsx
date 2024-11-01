"use client"; 

import React, { useState } from 'react';
import DadosPessoais from './DadosPessoais';
import RodapeCad from "@/components/RodapeCad";

// Definindo o tipo para os dados pessoais
type PessoaisProps = {
  Nome: string;
  DN: string;
  Doc: number;
  Login: string;
  End: string;
  Senha: string;
};

export default function App() {
  const [formData, setFormData] = useState<PessoaisProps>({
    Nome: '',
    DN: '',
    Doc: 0,
    Login: '',
    End: '',
    Senha: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Dados adicionados:", formData);
    alert("Dados adicionados com sucesso!");
    setFormData({
      Nome: '',
      DN: '',
      Doc: 0,
      Login: '',
      End: '',
      Senha: ''
    });
  };

  return (

    <>
    
    <div>
      <DadosPessoais 
        Nome={formData.Nome}
        DN={formData.DN}
        Doc={formData.Doc}
        Login={formData.Login}
        End={formData.End}
        Senha={formData.Senha}
        onSubmit={handleSubmit} // Para passar onSubmit como prop
      />
    </div>

    <RodapeCad/>

    </>
  )
}
