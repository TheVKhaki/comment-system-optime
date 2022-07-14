import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
const Model3d = (props) => {
  const { progress } = useProgress();
  useEffect(() => {
    props.setShowLoad(progress);
  }, [progress, props]);

  const gltf = useLoader(GLTFLoader, props.currentModel);
  return (
    <>
      <primitive
        object={gltf.scene}
        scale={[0.11, 0.11, 0.11]}
        position={props.position}
      />
    </>
  );
};

export default Model3d;
