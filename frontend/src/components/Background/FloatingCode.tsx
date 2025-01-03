import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingCode = () => {
  const particles = useRef<THREE.Points>(null!);

  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

    const color = new THREE.Color();
    color.setHSL(0.1, 1, 0.5);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    particles.current.rotation.y = time * 0.05;
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particles.current.geometry.attributes.position.array[i3 + 1] -= 0.01;
      if (particles.current.geometry.attributes.position.array[i3 + 1] < -5) {
        particles.current.geometry.attributes.position.array[i3 + 1] = 5;
      }
    }
    particles.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        blending={THREE.AdditiveBlending}
        transparent
        opacity={0.6}
      />
    </points>
  );
};

export default FloatingCode;