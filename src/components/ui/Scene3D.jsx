// src/components/ui/Scene3D.jsx
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Scene3D = ({ phase, progress }) => {
  const groupRef = useRef();
  const torusRef = useRef();
  const icosahedronRef = useRef();
  const octahedronRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.5;
      torusRef.current.rotation.y = time * 0.3;
    }
    
    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.x = time * 0.3;
      icosahedronRef.current.rotation.z = time * 0.2;
    }
    
    if (octahedronRef.current) {
      octahedronRef.current.rotation.y = time * 0.4;
      octahedronRef.current.rotation.z = time * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Glowing Sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <MeshDistortMaterial
            color="#6366f1"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            emissive="#6366f1"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>

      {/* Rotating Torus */}
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusGeometry args={[3, 0.1, 16, 100]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Second Torus */}
      <mesh ref={torusRef} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.5, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Third Torus */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[4, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#f472b6"
          emissive="#f472b6"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Floating Icosahedron */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={icosahedronRef} position={[5, 2, -3]} scale={0.8}>
          <icosahedronGeometry args={[1, 0]} />
          <MeshWobbleMaterial
            color="#6366f1"
            factor={0.3}
            speed={2}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>

      {/* Floating Octahedron */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh ref={octahedronRef} position={[-5, -2, -2]} scale={0.6}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
            wireframe
          />
        </mesh>
      </Float>

      {/* Small Floating Cubes */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 6;
        return (
          <Float 
            key={i} 
            speed={1 + i * 0.2} 
            rotationIntensity={0.5} 
            floatIntensity={1}
          >
            <mesh
              position={[
                Math.cos(angle) * radius,
                Math.sin(i) * 2,
                Math.sin(angle) * radius
              ]}
              scale={0.3}
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color={`hsl(${i * 45}, 70%, 60%)`}
                emissive={`hsl(${i * 45}, 70%, 40%)`}
                emissiveIntensity={0.3}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          </Float>
        );
      })}

      {/* Glowing Dots Orbit */}
      <GlowingDots />
    </group>
  );
};

// Glowing dots orbiting
const GlowingDots = () => {
  const dotsRef = useRef();
  const count = 50;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 5 + Math.random() * 2;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (dotsRef.current) {
      dotsRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <points ref={dotsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#a855f7"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

export default Scene3D;