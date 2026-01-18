// src/components/ui/AnimatedRings.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const AnimatedRings = () => {
  const ringsRef = useRef([]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ringsRef.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.x = time * (0.1 + i * 0.05);
        ring.rotation.y = time * (0.15 + i * 0.03);
        ring.rotation.z = time * (0.1 + i * 0.02);
      }
    });
  });

  const ringColors = ['#6366f1', '#a855f7', '#22d3ee', '#f472b6', '#34d399'];

  return (
    <group>
      {ringColors.map((color, i) => (
        <mesh
          key={i}
          ref={el => ringsRef.current[i] = el}
          rotation={[Math.PI / 2 * i * 0.3, Math.PI / 4 * i * 0.2, 0]}
        >
          <torusGeometry args={[2 + i * 0.5, 0.02, 16, 100]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.8}
            transparent
            opacity={0.8 - i * 0.1}
          />
        </mesh>
      ))}
    </group>
  );
};

export default AnimatedRings;