import { useEffect, useLayoutEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import amirModel from "../images/3dmodel-characters/amir.glb";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
const Model3d = (props) => {
  // useEffect(() => {
  //   props.setShowLoad(active);
  // }, []);
  const gltf = useLoader(GLTFLoader, props.currentModel);
  return (
    <>
      <primitive object={gltf.scene} scale={[0.08, 0.08, 0.08]} />
    </>
  );
};

export default Model3d;
