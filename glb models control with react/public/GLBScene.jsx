import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export default function GLBScene({ url, ...props }) {
  const { scene } = useGLTF(url);

  // Clone the scene to avoid mutating the original GLTF object
  const clonedScene = useMemo(() => {
    if (!scene) return null;
    return SkeletonUtils.clone(scene);
  }, [scene]);

  if (!clonedScene) {
    return null; // Prevent rendering if the scene isn't loaded
  }

  return (
    <group {...props} dispose={null}>
      {clonedScene.children.map((child, index) => (
        <primitive key={index} object={child} />
      ))}
    </group>
  );
}

useGLTF.preload("/head.glb");
