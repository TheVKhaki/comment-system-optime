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
//RandomReveal
import { RandomReveal } from "react-random-reveal";
//observer
import { useInView } from "react-intersection-observer";
//Framermotion
import { motion, useAnimation } from "framer-motion";
//Characters 3dmodel
import Characters from "../api/Characters";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useProgress,
  Center,
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
  //state characters
  const [characters, setCharacters] = useState(Characters);
  const [show, setShow] = useState(false);
  const [showLoad, setShowLoad] = useState(null);
  const [currentModel, setCurrentModel] = useState(null);
  const [position, setPosition] = useState([0, -3, 0]);
  //animation
  const controls = useAnimation();
  const [element, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  //click on characters
  const ourteam = useRef();
  const refModel3d = useRef();
  const handleClickNFT = (event) => {
    const e = event.target;
    const result = characters.filter(
      (filterevent) => filterevent.className === e.parentElement.className
    );
    setCurrentModel(result[0].model3d);
    setPosition(result[0].position);
    const ourteamCurrent = ourteam.current;
    ourteamCurrent.className = "ourteam-characters hidden";
    setTimeout(() => {
      ourteamCurrent.className = "ourteam-characters hidden d-none";
    }, 350);
    refModel3d.current.className = "model3d-characters d-block";
    setShow(true);
  };
  // handle click close 3dmodel
  const handleClickClose = () => {
    setShow(false);
    setShowLoad(false);
    const ourteamCurrent = ourteam.current;
    ourteamCurrent.className = "ourteam-characters";
    refModel3d.current.className = "model3d-characters d-none";
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

  //variant animation
  // const imgOurTeam = {
  //   hidden: {
  //     filter: blur(3),
  //   },
  //   visible: {
  //     blur: 4,
  //     transition: {
  //       duration: 1,
  //       delay: 0.5,
  //     },
  //   },
  // };

  return (
    <>
      <section className="ourteam" index="6" ref={element}>
        <Container>
          <div className="ourteam-header">
            <h2>
              <RandomReveal
                isPlaying={inView}
                duration={0.5}
                revealDuration={0.5}
                characters="OurTeam"
              />
            </h2>
            <p>
              <RandomReveal
                isPlaying={inView}
                duration={0.5}
                revealDuration={0.5}
                characters="Step4 IGOs and ICOs"
              />
            </p>
          </div>

          <motion.div
            className="ourteam-characters"
            id="ourteam-characters"
            ref={ourteam}
          >
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
                      <motion.img
                        className={`${inView ? "show" : "hidden"} `}
                        src={characters.image}
                        alt=""
                      />
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
        </Container>
      </section>
    </>
  );
};

export default OurTeam;
