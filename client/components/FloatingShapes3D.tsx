import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sphere,
  Box,
  Octahedron,
} from "@react-three/drei";
import * as THREE from "three";

const FloatingShape = ({
  position,
  color,
  speed,
  geometry,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  geometry: "sphere" | "box" | "octahedron";
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.5;
      meshRef.current.rotation.y += speed * 0.3;
      meshRef.current.position.y +=
        Math.sin(state.clock.elapsedTime * speed) * 0.002;
    }
  });

  const Shape = () => {
    switch (geometry) {
      case "sphere":
        return <Sphere args={[1, 32, 32]} />;
      case "box":
        return <Box args={[1.5, 1.5, 1.5]} />;
      case "octahedron":
        return <Octahedron args={[1.2]} />;
      default:
        return <Sphere args={[1, 32, 32]} />;
    }
  };

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <Shape />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.6}
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
};

const FloatingShapes3D: React.FC = () => {
  const shapes = useMemo(
    () => [
      {
        position: [-8, 4, -5] as [number, number, number],
        color: "#1e3a8a",
        speed: 0.8,
        geometry: "sphere" as const,
      },
      {
        position: [8, -2, -8] as [number, number, number],
        color: "#059669",
        speed: 1.2,
        geometry: "box" as const,
      },
      {
        position: [-4, -4, -6] as [number, number, number],
        color: "#3b82f6",
        speed: 0.6,
        geometry: "octahedron" as const,
      },
      {
        position: [6, 6, -10] as [number, number, number],
        color: "#1e293b",
        speed: 1.0,
        geometry: "sphere" as const,
      },
      {
        position: [0, -6, -12] as [number, number, number],
        color: "#1e3a8a",
        speed: 0.7,
        geometry: "box" as const,
      },
      {
        position: [-10, 2, -7] as [number, number, number],
        color: "#059669",
        speed: 0.9,
        geometry: "octahedron" as const,
      },
    ],
    [],
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 75,
        }}
        style={{
          background: "transparent",
        }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />

        {shapes.map((shape, index) => (
          <FloatingShape
            key={index}
            position={shape.position}
            color={shape.color}
            speed={shape.speed}
            geometry={shape.geometry}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default FloatingShapes3D;
