import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Tooth() {
  return (
    <group>
      {/* Crown with molar-like shape */}
      <mesh position={[0, 1, 0]} scale={[1.3, 1, 1.3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Slightly flatten the crown */}
      <mesh position={[0, 1.1, 0]} scale={[1.2, 0.3, 1.2]}>
        <boxGeometry args={[1.5, 1, 1.5]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Body (Neck) */}
      <mesh position={[0, 0, 0]} scale={[0.9, 1.2, 0.9]}>
        <cylinderGeometry args={[1, 0.7, 1.2, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Curved Roots */}
      {[
        [-0.5, -1, 0.5], [0.5, -1, -0.5], 
        [-0.5, -1, -0.5], [0.5, -1, 0.5]
      ].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]} rotation={[0.2, 0, 0]} scale={[0.35, 1.7, 0.35]}>
          <cylinderGeometry args={[0.35, 0.1, 1.7, 16]} />
          <meshStandardMaterial color="yellow" />
        </mesh>
      ))}
    </group>
  );
}

function App() {
  return (
    <div id="Canvas-Container" style={{ height: "100vh" }}>
      <Canvas camera={{ position: [0, 3, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Tooth />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
