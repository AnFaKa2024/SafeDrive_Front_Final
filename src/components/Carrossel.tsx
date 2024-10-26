"use client"

import Image from "next/image"
import { useState } from "react"
import dig1 from '../imagens/dig1.jpeg'
import dig2 from '../imagens/dig2.jpeg'
import dig3 from '../imagens/dig3.jpeg'
import dig4 from '../imagens/dig4.jpeg'





const slides = [dig1, dig2, dig3, dig4 ]

export default function Carrossel(){

  const[atual, setAtual] = useState(0)

  const prev = () => setAtual(atual === 0? slides.length -1 : atual-1)
  const next = () => setAtual(atual === slides.length -1 ? 0 : atual+1)

  return(

    <div className="max-w-lg">
      <div className="overflow-hidden relative">
        
        <div className="flex transition-transform ease-out duration-500"
          style={{transform: `translateX(-${atual * 100}%)`, gap: '0.5rem'}}>
              {slides.map((s,i)=> (<Image key={i} src={s} alt=''/>))}
        </div>

        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button className='text-3xl font-black pb-1 px-2 rounded-full shadow bg-white/80 text-indigo-800 hover:bg-indigo-50' onClick={prev}>{' < '}</button>
          <button className='text-3xl font-black pb-1 px-2 rounded-full shadow bg-white/80 text-indigo-800 hover:bg-indigo-50' onClick={next}>{' > '}</button>
        </div>

        <div className='absolute bottom-4 right-0 left-0'>
          <div className='flex items-center justify-center gap-4'> {slides.map((_, i) => (<div key={i} onClick={() => setAtual(i)} 
            className={`transition-all w-3 h-3 rounded-full bg-indigo-800 ${atual === i ? "p-2" : "bg-opacity-50"}`}></div>))}</div>
        </div>

      </div>
    
    </div>
  )
}