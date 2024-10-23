import { OrbitControls } from "@react-three/drei";
import AvatarBackup from "./AvatarBackup";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
        <AvatarBackup />
      </group>
      <ambientLight intensity={1} />
    </>
  );
};
