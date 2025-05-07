import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Content from './components/content'
function App() {


  return (
    <div className="bg-zinc-800 text-zinc-900 text-2xl ">
      <Navbar/>
       <div className='w-screen h-screen flex items-center justify-center '>
         <Content/>
       </div>
    </div>
       
  )
}

export default App
