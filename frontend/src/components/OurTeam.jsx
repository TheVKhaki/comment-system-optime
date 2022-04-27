<<<<<<< HEAD
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
=======
import { useEffect, useState, useRef, Suspense, useLayoutEffect } from "react";
//Bootstrap
import { Container } from "react-bootstrap";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
//icon
import { IconContext } from "react-icons";
import { IoCloseSharp } from "react-icons/io5";
//Framermotion
import { motion } from "framer-motion";
//Characters 3dmodel
import Characters from "../api/Characters";
import { Canvas } from "@react-three/fiber";
>>>>>>> comeing-soon-deploy-1
import {
  Environment,
  OrbitControls,
  useProgress,
  Center,
<<<<<<< HEAD
} from "@react-three/drei";

const OurTeam = () => {
=======
  Html,
} from "@react-three/drei";
import Model3d from "./Model3d";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const OurTeam = () => {
  const [width, height] = useWindowSize();
>>>>>>> comeing-soon-deploy-1
  //state characters
  const [characters, setCharacters] = useState(Characters);
  const [show, setShow] = useState(false);
  const [showLoad, setShowLoad] = useState(null);
<<<<<<< HEAD
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

=======
  const [currentModel, setCurrentModel] = useState(null);
  const [position, setPosition] = useState([0, -3, 0]);
  //click on characters
  const ourteam = useRef();
  const refModel3d = useRef();
>>>>>>> comeing-soon-deploy-1
  const handleClickNFT = (event) => {
    const e = event.target;
    const result = characters.filter(
      (filterevent) => filterevent.className === e.parentElement.className
    );
<<<<<<< HEAD
=======
    setCurrentModel(result[0].model3d);
    setPosition(result[0].position);
>>>>>>> comeing-soon-deploy-1
    const ourteamCurrent = ourteam.current;
    ourteamCurrent.className = "ourteam-characters hidden";
    setTimeout(() => {
      ourteamCurrent.className = "ourteam-characters hidden d-none";
    }, 350);
<<<<<<< HEAD
=======
    refModel3d.current.className = "model3d-characters d-block";
>>>>>>> comeing-soon-deploy-1
    setShow(true);
  };
  // handle click close 3dmodel
  const handleClickClose = () => {
    setShow(false);
<<<<<<< HEAD
    const ourteamCurrent = ourteam.current;
    ourteamCurrent.className = "ourteam-characters";
=======
    setShowLoad(false);
    const ourteamCurrent = ourteam.current;
    ourteamCurrent.className = "ourteam-characters";
    refModel3d.current.className = "model3d-characters d-none";
>>>>>>> comeing-soon-deploy-1
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
<<<<<<< HEAD

  return (
    <>
      <section className="ourteam">
=======
  function Loader() {
    const { progress } = useProgress();
    return <Html center>Loading...</Html>;
  }

  useEffect(() => {
    const swiper1 = document.querySelector(".swiper-ourteam-1initialized");
    const swiper2 = document.querySelector(".swiper-ourteam-2initialized");
    if (width < 992) {
      swiper1.classList.add("d-none");
      swiper2.classList.add("d-block");
    } else {
      swiper1.classList.remove("d-none");
      swiper2.classList.remove("d-block");
    }
  }, [width]);

  return (
    <>
      <section className="ourteam" index="6">
>>>>>>> comeing-soon-deploy-1
        <Container>
          <div className="ourteam-header">
            <h2>OurTeam</h2>
            <p>Step4 IGOs and ICOs</p>
<<<<<<< HEAD
            <hr />
            <div className="ourteam-menu">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
=======
>>>>>>> comeing-soon-deploy-1
          </div>

          <motion.div
            className="ourteam-characters"
            id="ourteam-characters"
            ref={ourteam}
          >
<<<<<<< HEAD
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
=======
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              enabled={false}
              containerModifierClass={"swiper-ourteam-1"}
            >
              {characters.map((characters) => {
                return (
                  <SwiperSlide>
                    <div
                      className={characters.className}
                      key={characters.id}
                      onClick={handleClickNFT}
                    >
                      <img src={characters.image} alt="" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              containerModifierClass={"swiper-ourteam-2"}
              modules={[Navigation]}
              navigation
            >
              {characters.map((characters) => {
                return (
                  <SwiperSlide>
                    <div
                      className={characters.className}
                      key={characters.id}
                      onClick={handleClickNFT}
                    >
                      <img src={characters.image} alt="" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </motion.div>
          {/* {showLoad && <div className="loading-nft">Loading...</div>} */}
          {/* {show === true && ( */}
          <div className="model3d-characters d-none" ref={refModel3d}>
            <Container>
              <div className="close-model3d" onClick={handleClickClose}>
                <IconContext.Provider
                  value={{ color: "black", size: "3.1rem" }}
                >
                  <IoCloseSharp />
                </IconContext.Provider>
              </div>
            </Container>
            <Canvas camera={{ position: [0, 0, 10] }}>
              <Center position={position}>
                <Suspense fallback={<Loader />}>
                  <Model3d
                    setShowLoad={setShowLoad}
                    currentModel={currentModel}
                  />
                  <OrbitControls
                    enablePan={false}
                    reverseOrbit={false}
                    enableZoom={false}
                  />
                  <Environment preset="sunset" />
                </Suspense>
              </Center>
            </Canvas>
          </div>
          {/* )} */}
>>>>>>> comeing-soon-deploy-1
        </Container>
      </section>
    </>
  );
};

export default OurTeam;
