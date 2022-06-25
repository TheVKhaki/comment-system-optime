import { useEffect, useState, useRef, Suspense, useLayoutEffect } from "react";
//media
import Rotation3d from "../images/Rotate360.png";
//Bootstrap
import { Container } from "react-bootstrap";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
//icon
import { IconContext } from "react-icons";
import { IoCloseSharp } from "react-icons/io5";
//lottie
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import clickGif from "../lottie/78149-click-or-tap-animation-v1.json";
//Gsap
import { gsap } from "gsap";
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
  const [width] = useWindowSize();

  //state characters
  const [characters, setCharacters] = useState(Characters);
  const [show, setShow] = useState(false);
  const [showLoad, setShowLoad] = useState(0);
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
  const model3dCharacters = document.querySelectorAll(".model3d-characters");
  const handleClickNFT = (event) => {
    const e = event.target;
    const result = characters.filter(
      (filterevent) => filterevent.className === e.parentElement.className
    );
    const resultModel3dCharacters = [...model3dCharacters].filter(
      (filterevent) => +filterevent.getAttribute("data-index") === result[0].id
    );
    resultModel3dCharacters[0].className = "model3d-characters d-block";
    setCurrentModel(result[0].model3d);
    setPosition(result[0].position);
    const ourteamCurrent = ourteam.current;
    ourteamCurrent.className = "ourteam-characters hidden d-none";
    setShow(true);
  };
  // handle click close 3dmodel
  const handleClickClose = () => {
    setShow(false);
    const ourteamCurrent = ourteam.current;
    ourteamCurrent.className = "ourteam-characters";
    const hiddenModel3d = [...model3dCharacters].map(
      (addClass) => (addClass.className = "model3d-characters d-none")
    );
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
  function Loader() {
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
  useEffect(() => {
    gsap.fromTo(
      document.querySelector(".lottie-our-team"),
      {
        opacity: 0.7,
      },
      {
        opacity: 0,
        duration: 0.5,
        delay: 5,
        scrollTrigger: {
          trigger: document.querySelector(".ourteam"),
          start: "center center",
          end: "bottom center",
        },
      }
    );
  }, []);
  useEffect(() => {
    if (showLoad === 100) {
      console.log("object");
      gsap.fromTo(
        document.querySelectorAll(".characters-information img"),
        {
          opacity: 0.7,
        },
        {
          opacity: 0,
          duration: 0.5,
          delay: 5,
        }
      );
    }
  }, [showLoad]);

  // const canvasRotationDeleteSVG = (e) => {
  //   if (showLoad === 100) {
  //     const RotationSVG = document.querySelectorAll(
  //       ".characters-information img"
  //     );
  //     RotationSVG.forEach((Rotationsvg) => {
  //       if (e.target.tagName === "CANVAS") {
  //         Rotationsvg.classList.add("d-none");
  //       }
  //     });
  //   }
  // };
  const player = useRef();
  return (
    <>
      <section className="ourteam" ref={element} id="our-team">
        <Player
          ref={player}
          autoplay={true}
          loop={true}
          controls={false}
          src={clickGif}
          style={{ height: "300px", width: "70px" }}
          className="lottie-our-team"
        ></Player>
        <Container>
          <div className="ourteam-header">
            <h2>
              <RandomReveal
                isPlaying={inView}
                duration={0.5}
                revealDuration={0.5}
                characters="Our Key Members"
              />
            </h2>
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
                  <SwiperSlide key={characters.id}>
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
                  <SwiperSlide key={characters.id}>
                    <a
                      href="#our-team"
                      className={characters.className}
                      key={characters.id}
                      onClick={handleClickNFT}
                    >
                      <div className="characters-information-mobile">
                        <div className="wrapper-characters-information-mobile">
                          <span>{characters.name.toUpperCase()}</span>
                          <p>
                            {characters.abbrPosition !== "" && (
                              <span>{characters.abbrPosition}</span>
                            )}
                            {characters.job}
                          </p>
                        </div>
                      </div>
                      <img src={characters.image} alt="" />
                    </a>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </motion.div>
          {/* {showLoad && <div className="loading-nft">Loading...</div>} */}
          {/* {show === true && ( */}
          {characters.map((characters) => (
            <div
              className="model3d-characters d-none"
              ref={refModel3d}
              data-index={characters.id}
              key={characters.id}
            >
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
                <Center position={characters.position}>
                  <Suspense fallback={<Loader />}>
                    <Model3d
                      setShowLoad={setShowLoad}
                      currentModel={characters.model3d}
                    />
                    <OrbitControls
                      enablePan={false}
                      reverseOrbit={false}
                      enableZoom={false}
                    />
                    <Environment
                      path={"/model3d-env/"}
                      files={characters.env}
                    />
                  </Suspense>
                </Center>
              </Canvas>
              {showLoad === 100 && (
                <Container className="characters-information">
                  <img className="3d-rotation" src={Rotation3d} alt="" />
                  <div className="characters-information-left">
                    <p>{characters.description}</p>
                  </div>

                  <div className="characters-information-right">
                    <div className="wrapper-characters-information-right">
                      <span>{characters.name.toUpperCase()}</span>
                      <p>
                        {characters.abbrPosition !== "" && (
                          <span>{characters.abbrPosition}</span>
                        )}
                        {characters.job}
                      </p>
                    </div>
                  </div>
                </Container>
              )}
            </div>
          ))}
        </Container>
      </section>
    </>
  );
};

export default OurTeam;
