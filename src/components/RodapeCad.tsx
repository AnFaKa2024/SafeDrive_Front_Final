
"use client"



export default function RodapeCad(){

  return(
    <footer className="bg-gray-100 p-4 flex flex-col items-center">
      
      <button onClick={()=> alert()} className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"> Cadastrar </button> 
      
      <button onClick={()=> alert()} className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"> Limpar Formulário </button>
      
      <input type="file" className="border border-gray-300 p-2 rounded" name="documento" id="idDoc" />
      
    </footer>
  )
}