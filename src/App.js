 
import React from 'react';
import { Canvas } from '@react-three/fiber';
// import Sphere from './components/globe';
import "./App.css";
import TestGlobe from './components/test';
import { OrbitControls } from "@react-three/drei";

export default function App() { 

  return (
    <Canvas
      gl={{
        physicallyCorrectLights: true,
        antialias: true,
        powerPreference: "high-performance",
        legacy: true,
      }}
    > 
      <ambientLight args={["white"]} intensity={0.3} />
      <pointLight position={[0.01, 9, 0]} intensity={50} />
      <OrbitControls />
      <TestGlobe/>
      <axesHelper args={[5]} />
    </Canvas>
  );
}

