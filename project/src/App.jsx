import React from 'react'
import { Canvas } from '@react-three/fiber'
import Exprience from './components/Exprience'

const App = () => {
  return (
    <div className = "parent">
      <Canvas>
        <Exprience />
      </Canvas>
    </div>
  )
}

export default App
