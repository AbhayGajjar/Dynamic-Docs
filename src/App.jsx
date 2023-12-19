import React from 'react'
import Background from './Component/Background'
import Foreground from './Component/Foreground'

function App() {
  return (
    <div className=' relative w-full h-screen bg-zinc-800'>
     <Background/>
     <Foreground/>
    </div>
  )
}

export default App