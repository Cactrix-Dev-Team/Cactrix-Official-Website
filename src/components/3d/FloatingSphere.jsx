import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

const FloatingSphere = ({ position = [0, 0, 0], color = '#0ea5e9', scale = 1 }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Animation logic
      meshRef.current.position.y = position[1] + Math.sin(clock.elapsedTime) * 0.3;
      meshRef.current.rotation.x = clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = clock.elapsedTime * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

export default FloatingSphere;