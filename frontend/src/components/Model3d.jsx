import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import amirModel from "../images/3dmodel-characters/amir.glb";

const Model3d = (props) => {
  const gltf = useLoader(GLTFLoader, props.currentModel);
  const { active } = useProgress();
  console.log(active);
  props.setShowLoad(active);
  return (
    <>
      <primitive object={gltf.scene} scale={[0.08, 0.08, 0.08]} />
    </>
  );
};

export default Model3d;
