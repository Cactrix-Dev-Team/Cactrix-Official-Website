// src/components/3d/Scene3D.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import FloatingSphere from './FloatingSphere';
import ParticleField from './ParticleField';

const Scene3D = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#c026d3" intensity={0.5} />
        
        <Suspense fallback={null}>
          <FloatingSphere position={[-3, 0, 0]} color="#0ea5e9" />
          <FloatingSphere position={[3, 0, 0]} color="#d946ef" scale={0.7} />
          <FloatingSphere position={[0, 2, -2]} color="#10b981" scale={0.5} />
          <ParticleField count={500} />
          <Environment preset="night" />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
