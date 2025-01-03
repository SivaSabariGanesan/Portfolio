import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const DataStream = () => {
  const lines = useRef<THREE.LineSegments>(null!);
  
  const lineCount = 100;
  const points = new Float32Array(lineCount * 6);
  const colors = new Float32Array(lineCount * 6);

  for (let i = 0; i < lineCount; i++) {
    const x = (Math.random() - 0.5) * 10;
    const y = (Math.random() - 0.5) * 10;
    const z = (Math.random() - 0.5) * 10;
    
    points[i * 6] = x;
    points[i * 6 + 1] = y;
    points[i * 6 + 2] = z;
    points[i * 6 + 3] = x;
    points[i * 6 + 4] = y + 0.5;
    points[i * 6 + 5] = z;

    const color = new THREE.Color();
    color.setHSL(0.1, 1, 0.5);
    colors[i * 6] = color.r;
    colors[i * 6 + 1] = color.g;
    colors[i * 6 + 2] = color.b;
    colors[i * 6 + 3] = color.r;
    colors[i * 6 + 4] = color.g;
    colors[i * 6 + 5] = color.b;
  }

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    lines.current.rotation.y = time * 0.1;
  });

  return (
    <lineSegments ref={lines}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={lineCount * 2}
          array={points}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={lineCount * 2}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        vertexColors
        blending={THREE.AdditiveBlending}
        transparent
        opacity={0.5}
      />
    </lineSegments>
  );
};

export default DataStream;