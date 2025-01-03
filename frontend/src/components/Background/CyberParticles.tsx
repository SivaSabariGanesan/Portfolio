import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CyberParticles = () => {
  const points = useRef<THREE.Points>(null!);
  
  const particlesCount = 3000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  const colors = useMemo(() => {
    const colors = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const mixedColor = new THREE.Color();
      mixedColor.setHSL(0.1, 1, 0.5); // Yellow base
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    return colors;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      points.current.geometry.attributes.position.array[i3 + 1] -= 0.01;
      if (points.current.geometry.attributes.position.array[i3 + 1] < -5) {
        points.current.geometry.attributes.position.array[i3 + 1] = 5;
      }
    }
    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.y = time * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        blending={THREE.AdditiveBlending}
        transparent
        depthWrite={false}
      />
    </points>
  );
};

export default CyberParticles;