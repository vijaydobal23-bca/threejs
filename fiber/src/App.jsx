import React from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';import {OrbitControls} from '@react-three/drei'

const App = () => {
  return (
    <div className="parent">
      <Canvas camera={{ position: [0, 0, 10], fov: 25 }}>
        <OrbitControls></OrbitControls>
        <ambientLight intensity={3} position={[0,5,0]}></ambientLight>
      <Experience></Experience>
    </Canvas>
    </div>
  )
}

export default App
