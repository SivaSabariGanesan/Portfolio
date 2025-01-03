import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CyberGrid from './CyberGrid';
import FloatingCode from './FloatingCode';
import DataStream from './DataStream';

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
      }}
    >
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 5, 15]} />
      <ambientLight intensity={0.5} />
      <CyberGrid />
      <FloatingCode />
      <DataStream />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

export default Scene;