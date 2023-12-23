import { useRef, useState } from 'react'
import './App.css'
import playTest from './playText'

function App() {
  let inputText, empty = useRef()

  const play = () => {
    let message = inputText.value
    if (message == '') {
      setTimeout(function(){
          empty.classList.add('text-red-500')
        }, 2000)
        empty.classList.remove('text-red-500')
    }
    else
      playTest(message)
  }

  return (
    <>
      <div className="h-screen flex gap-8 flex-col justify-center items-center">
        <div className="">
          <h1 className='text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 sm:text-5xl lg:text-6xl'>Text To Speech</h1>
        </div><div className="w-full flex justify-center">
          <textarea ref={(a)=>inputText = a} className='resize-none w-[70%] max-w-[560px] h-36 border border-black rounded-md p-3 text-2xl lg:text-3xl lg:h-48' placeholder='Enter Text...'></textarea>
        </div>
        <div className="">
          <button className='bg-blue-500 text-white font-bold text-xl px-4 py-2 outline-none border border-black rounded-md lg:text-2xl' onClick={play} >Play</button>
        </div>
        <div className="text-2xl font-bold">
          <h1 ref={(a)=>empty=a} className=''>Enter a text</h1>
        </div>
      </div>
    </>
  )
}

export default App
