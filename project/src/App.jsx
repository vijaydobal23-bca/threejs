import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import Exprience from './components/Exprience'

const App = () => {
  return (
    <div className="parent">
      <div className="title-overlay">
        <h1>Gallery Showcase</h1>
        <p>Interactive 3D Experience</p>
      </div>
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
        <color attach="background" args={['#0b0b0e']} />
        <fog attach="fog" args={['#0b0b0e', 10, 30]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
        <Environment preset="city" />
        <Exprience />
        <ContactShadows position={[0, 0, 0]} opacity={0.7} scale={20} blur={2.5} far={4.5} color="#000000" />
      </Canvas>
    </div>
  )
}

export default App
