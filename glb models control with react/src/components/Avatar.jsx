import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Girl from "../../public/Girl";
import { Environment, OrbitControls } from "@react-three/drei";
import Hassany from "../../public/Hassany";
import GLBScene from "../../public/GLBScene";

const Avatar = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 1.5, 2.5], fov: 8 }}>
        <ambientLight intensity={0.5} />
        <OrbitControls
          target={[0, 1.68, 0]}
          minDistance={1}
          maxDistance={5}
          maxPolarAngle={Math.PI / 2} // Prevent looking from below
        />

        <Suspense fallback={null}>
          {/* <Girl /> */}
          {/* <Hassany /> */}
          <GLBScene url="/head.glb" /> {/* change the url here */}
        </Suspense>
        <directionalLight position={[0, 5, 5]} intensity={0.8} />

        <Environment preset="sunset" />
      </Canvas>
    </>
  );
};

export default Avatar;
