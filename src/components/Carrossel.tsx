"use client"

import Image from "next/image"
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useState } from "react"
import dig1 from '../imagens/dig1.jpeg'
import dig2 from '../imagens/dig2.jpeg'
import dig3 from '../imagens/dig3.jpeg'
import dig4 from '../imagens/dig4.jpeg'
import dig5 from '../imagens/dig5.jpg'
import dig6 from '../imagens/dig6.jpg'
import dig7 from '../imagens/dig7.jpg'
import app from '../imagens/app.jpg'





const slides = [app, dig1, dig2, dig3, dig4, dig6, dig7, dig5 ]

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
        <button onClick={() => setAtual(atual > 0 ? atual - 1 : slides.length - 1)} className="absolute -left-0 top-1/2 transform -translate-y-1/2 z-10">
        <FiChevronLeft size={32} className="text-red-600 border border-white bg-white" />
      </button>
        
        <button onClick={() => setAtual(atual < slides.length - 1 ? atual + 1 : 0)} className="absolute -right-0 top-1/2 transform -translate-y-1/2 z-10">
        <FiChevronRight size={32} className="text-red-600 border border-white bg-white" />
      </button>
        </div>

        <div className='absolute bottom-3 right-52 left-52'>
          <div className='flex items-center justify-between gap-3'> {slides.map((_, i) => (<div key={i} onClick={() => setAtual(i)} 
            className={`transition-shadow w-3 h-3 rounded-full bg-indigo-800 ${atual === i ? "p-2" : "bg-opacity-50"}`}></div>))}</div>
        </div>

      </div>
    
    </div>
  )
}