import { useEffect, useState, useRef, Suspense } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Characters from "../api/Characters";
import {
  Canvas,
  useFrame,
  extend,
  useThree,
  useLoader,
} from "@react-three/fiber";
import Model3d from "../images/3dmodel-characters/Henrik-lgt33.glb";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  Environment,
  OrbitControls,
  useProgress,
  Center,
} from "@react-three/drei";

const OurTeam = () => {
  //state characters
  const [characters, setCharacters] = useState(Characters);
  const [show, setShow] = useState(false);
  const [showLoad, setShowLoad] = useState(null);
  //import model

  const Model = () => {
    const gltf = useLoader(GLTFLoader, Model3d);

    const { active } = useProgress();
    setShowLoad(active);

    return (
      <>
        <primitive object={gltf.scene} scale={[0.08, 0.08, 0.08]} />
      </>
    );
  };
  //click on characters
  const ourteam = useRef();

  const handleClickNFT = (event) => {
    const e = event.target;
    const result = characters.filter(
      (filterevent) => filterevent.className === e.parentElement.className
    );
    const ourteamCurrent = ourteam.current;
    ourteamCurrent.className = "ourteam-characters hidden";
    setTimeout(() => {
      ourteamCurrent.className = "ourteam-characters hidden d-none";
    }, 350);
    setShow(true);
  };
  // handle click close 3dmodel
  const handleClickClose = () => {
    setShow(false);
    const ourteamCurrent = ourteam.current;
    ourteamCurrent.className = "ourteam-characters";
  };

  //   const paddingright = (window.innerWidth / 100) * 15;
  //   const OrderCalc = (imageObject.order % 5) * 200;
  //   let X = 0;
  //   let Y = 0;
  //   // if (imageObject.order / 5 <= 1) {
  //   //   X = paddingright + OrderCalc;
  //   //   Y = window.innerHeight / 2 - 100;
  //   // } else {
  //   //   X = paddingright + OrderCalc;
  //   //   Y = window.innerHeight / 2 + 50;
  //   // }
  //   X = paddingright + OrderCalc;
  //   Y = window.innerHeight / 2 - (imageObject.layer - 1) * 150;
  //   console.log("Y: " + Y + " X: " + X);

  return (
    <>
      <section className="ourteam">
        <Container>
          <div className="ourteam-header">
            <h2>OurTeam</h2>
            <p>Step4 IGOs and ICOs</p>
            <hr />
            <div className="ourteam-menu">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>

          <motion.div
            className="ourteam-characters"
            id="ourteam-characters"
            ref={ourteam}
          >
            {characters.map((characters) => {
              return (
                <div
                  className={characters.className}
                  key={characters.id}
                  onClick={handleClickNFT}
                >
                  <img src={characters.image} alt="" />
                </div>
              );
            })}
          </motion.div>
          {showLoad && <div className="loading-nft">Loading...</div>}
          {show === true && (
            <div className="model3d-characters">
              <div className="close-model3d" onClick={handleClickClose}></div>
              <Canvas>
                <Center position={[0, -3, 0]}>
                  <Suspense fallback={null}>
                    <Model />
                    <OrbitControls enablePan={false} reverseOrbit={false} />
                    <Environment preset="sunset" />
                  </Suspense>
                </Center>
              </Canvas>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default OurTeam;
