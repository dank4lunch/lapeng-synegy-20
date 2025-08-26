import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingParticles = ({ count = 100 }: { count?: number }) => {
  const ref = useRef<THREE.Points>(null);
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Random positions in a large sphere
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      
      // Random colors with brand palette
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        // Primary color (navy blue)
        colors[i * 3] = 0.12;     // R
        colors[i * 3 + 1] = 0.23; // G
        colors[i * 3 + 2] = 0.54; // B
      } else if (colorChoice < 0.66) {
        // Secondary color (green)
        colors[i * 3] = 0.02;     // R
        colors[i * 3 + 1] = 0.59; // G
        colors[i * 3 + 2] = 0.41; // B
      } else {
        // Light blue
        colors[i * 3] = 0.23;     // R
        colors[i * 3 + 1] = 0.51; // G
        colors[i * 3 + 2] = 0.96; // B
      }
    }
    
    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
      
      // Animate individual particles
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.001;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const FloatingOrbs = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const orbs = useMemo(() => [
    { position: [-15, 10, -20], scale: 2, color: '#1e3a8a', speed: 0.5 },
    { position: [15, -8, -25], scale: 1.5, color: '#059669', speed: 0.7 },
    { position: [-10, -12, -15], scale: 1.8, color: '#3b82f6', speed: 0.3 },
    { position: [20, 15, -30], scale: 1.2, color: '#1e293b', speed: 0.6 },
    { position: [0, 20, -35], scale: 2.2, color: '#1e3a8a', speed: 0.4 },
  ], []);

  return (
    <group ref={groupRef}>
      {orbs.map((orb, index) => (
        <mesh key={index} position={orb.position}>
          <sphereGeometry args={[orb.scale, 32, 32]} />
          <meshPhongMaterial
            color={orb.color}
            transparent
            opacity={0.1}
            shininess={100}
          />
        </mesh>
      ))}
    </group>
  );
};

interface FloatingParticles3DProps {
  intensity?: 'light' | 'medium' | 'heavy';
}

const FloatingParticles3D: React.FC<FloatingParticles3DProps> = ({ 
  intensity = 'medium' 
}) => {
  const particleCount = {
    light: 50,
    medium: 100,
    heavy: 200,
  }[intensity];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{
          position: [0, 0, 30],
          fov: 75,
        }}
        style={{
          background: 'transparent',
        }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.3} />
        
        <FloatingParticles count={particleCount} />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
};

export default FloatingParticles3D;
