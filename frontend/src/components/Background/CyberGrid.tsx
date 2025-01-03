import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CyberGrid = () => {
  const grid = useRef<THREE.Group>(null!);
  const material = new THREE.LineBasicMaterial({ color: '#FFCC00', opacity: 0.2, transparent: true });
  const size = 20;
  const divisions = 20;

  const gridHelper = new THREE.GridHelper(size, divisions);
  gridHelper.material = material;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    grid.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    grid.current.position.y = Math.sin(time * 0.2) * 0.2 - 2;
  });

  return (
    <group ref={grid}>
      <primitive object={gridHelper} />
    </group>
  );
};

export default CyberGrid;