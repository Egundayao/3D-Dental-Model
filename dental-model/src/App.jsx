import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/public/chemicals__element_exposure_pattern.glb"); // Load the model
  return <primitive object={scene} scale={[2, 2, 2]} />;
}


export default function App() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Model />
      <OrbitControls />
    </Canvas>
    </div>
    
  );
}
