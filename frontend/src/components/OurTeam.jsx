import { useEffect, useState, useRef, Suspense } from "react";
//media
import Rotation3d from "../images/Rotate360.png";
//Bootstrap
import { Container } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
//icon
import { IconContext } from "react-icons";
import { FaTelegramPlane, FaDiscord, FaInfoCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
//lottie
import { Player } from "@lottiefiles/react-lottie-player";
import clickGif from "../lottie/78149-click-or-tap-animation-v1.json";
//Gsap
import { gsap } from "gsap";
//lozyload
import Lazyload from "../HOC/Lazyload";
//RandomReveal
import { RandomReveal } from "react-random-reveal";
//observer
import { useInView } from "react-intersection-observer";
//Framermotion
import { motion, useAnimation } from "framer-motion";
//Characters 3dmodel
import Characters from "../api/Characters";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Center, Html } from "@react-three/drei";
import Model3d from "./Model3d";
const OurTeam = () => {
  //state characters
  const [characters, setCharacters] = useState(Characters);
  const [charactersMobile, setCharactersMobile] = useState(Characters);
  const [showLoad, setShowLoad] = useState(0);
  const [idCurrentModel, setIdCurrentModel] = useState();
  const [show, setShow] = useState(false);
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
    document.querySelector(".lottie-our-team").classList.add("d-none");
    const e = event.target;
    const result = characters.filter(
      (filterevent) => filterevent.className === e.offsetParent.className
    );
    setIdCurrentModel(result[0].id);
    const resultModel3dCharacters = [...model3dCharacters].filter(
      (filterevent) => +filterevent.getAttribute("data-index") === result[0].id
    );
    resultModel3dCharacters[0].className =
      "model3d-characters d-block container-lg";
    const ourteamCurrent = ourteam.current;
    ourteamCurrent.className = "ourteam-characters hidden d-none";
  };
  // handle click close 3dmodel
  const handleClickClose = () => {
    const ourteamCurrent = ourteam.current;
    ourteamCurrent.className = "ourteam-characters";
    const hiddenModel3d = [...model3dCharacters].map(
      (addClass) =>
        (addClass.className = "model3d-characters d-none container-lg")
    );
  };
  //click prev model 3d
  const handleClickPrev = () => {
    let currentModel = idCurrentModel;
    let prevModel;
    if (currentModel === 1) {
      prevModel = currentModel;
    } else {
      prevModel = currentModel - 1;
    }

    const resultModel3dCharacters = [...model3dCharacters].filter(
      (filterevent) => +filterevent.getAttribute("data-index") === prevModel
    );

    const hiddenModel3d = [...model3dCharacters].map(
      (addClass) =>
        (addClass.className = "model3d-characters d-none container-lg")
    );
    console.log(resultModel3dCharacters);
    resultModel3dCharacters[0].className =
      "model3d-characters d-block container-lg";
    setIdCurrentModel(prevModel);
  };
  //click next model 3d
  const handleClickNext = (e) => {
    let currentModel = idCurrentModel;
    let nextModel;

    if (currentModel === 10) {
      nextModel = currentModel;
    } else {
      nextModel = currentModel + 1;
    }

    const resultModel3dCharacters = [...model3dCharacters].filter(
      (filterevent) => +filterevent.getAttribute("data-index") === nextModel
    );

    const hiddenModel3d = [...model3dCharacters].map(
      (addClass) =>
        (addClass.className = "model3d-characters d-none container-lg")
    );
    console.log(resultModel3dCharacters);
    resultModel3dCharacters[0].className =
      "model3d-characters d-block container-lg";
    setIdCurrentModel(nextModel);
  };
  function Loader() {
    return <Html center>Loading...</Html>;
  }
  function name_generate(title, job) {
    return title + " " + job;
  }
  // useEffect(() => {
  //   gsap.fromTo(
  //     document.querySelector(".lottie-our-team"),
  //     {
  //       opacity: 0.7,
  //     },
  //     {
  //       opacity: 0,
  //       duration: 0.5,
  //       delay: 5,
  //       scrollTrigger: {
  //         trigger: document.querySelector(".ourteam"),
  //         start: "center center",
  //         end: "bottom center",
  //       },
  //     }
  //   );
  // }, []);
  useEffect(() => {
    if (showLoad === 100) {
      gsap.fromTo(
        document.querySelectorAll(".characters-information img"),
        {
          opacity: 0.7,
        },
        {
          opacity: 0,
          duration: 0.5,
          delay: 3,
        }
      );
    }
  }, [showLoad]);

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
            <p>Click on the photos to see the details</p>
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
                      <Lazyload>
                        <motion.img
                          title={name_generate(
                            characters.abbrPosition,
                            characters.job
                          )}
                          className={`${inView ? "show" : "hidden"} `}
                          src={characters.image}
                          alt=""
                        />
                      </Lazyload>
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
              {charactersMobile
                .sort((a, b) => {
                  return a.idMobile - b.idMobile;
                })
                .map((characters) => {
                  return (
                    <SwiperSlide key={characters.id}>
                      <div
                        className={characters.className}
                        key={characters.id}
                        onClick={handleClickNFT}
                      >
                        <div className="characters-information-mobile">
                          <div className="wrapper-characters-information-mobile">
                            <span>
                              {characters.name.toUpperCase()}
                              <OverlayTrigger
                                trigger="click"
                                placement="top"
                                rootClose={true}
                                overlay={
                                  <Popover id={`popover-positioned`}>
                                    <Popover.Header as="h3">
                                      {characters.name}
                                    </Popover.Header>
                                    <Popover.Body>
                                      <p>{characters.description}</p>
                                    </Popover.Body>
                                  </Popover>
                                }
                              >
                                <Button variant="secondary">
                                  {" "}
                                  <IconContext.Provider
                                    value={{
                                      color: "#e28001",
                                      size: "2.4rem",
                                    }}
                                  >
                                    <span>
                                      <FaInfoCircle />
                                    </span>
                                  </IconContext.Provider>
                                </Button>
                              </OverlayTrigger>
                            </span>
                            <p>
                              {characters.abbrPosition !== "" && (
                                <span>{characters.abbrPosition}</span>
                              )}
                              {characters.job}
                            </p>
                            <div className="social-media-our-team">
                              <IconContext.Provider
                                value={{
                                  color: "white",
                                  size: "2.4rem",
                                }}
                              >
                                <a
                                  href={characters.telegram}
                                  target="_blank"
                                  className={`${
                                    characters.telegram === ""
                                      ? "text-muted"
                                      : null
                                  }`}
                                >
                                  <FaTelegramPlane />
                                </a>
                              </IconContext.Provider>
                              <IconContext.Provider
                                value={{
                                  color: "white",
                                  size: "2.4rem",
                                }}
                              >
                                <a href={characters.email} target="_blank">
                                  <HiOutlineMail />
                                </a>
                              </IconContext.Provider>
                              <IconContext.Provider
                                value={{
                                  color: "white",
                                  size: "2.4rem",
                                }}
                              >
                                <a
                                  title="Coming soon"
                                  href={characters.discord}
                                  target="_blank"
                                  className={`${
                                    characters.discord === ""
                                      ? "text-muted"
                                      : null
                                  }`}
                                >
                                  <FaDiscord />
                                </a>
                              </IconContext.Provider>
                            </div>
                          </div>
                        </div>
                        <a href="#our-team">
                          <Lazyload>
                            <img src={characters.image} alt="" />
                          </Lazyload>
                        </a>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </motion.div>
          {/* {showLoad && <div className="loading-nft">Loading...</div>} */}
          {/* {show === true && ( */}
          {characters.map((characters) => (
            <div
              className="model3d-characters d-none container-lg"
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
              <Canvas
                camera={{
                  far: 1000,
                  near: 1,
                  fov: 75,
                  position: [0, 0, 10],
                  zoom: 1,
                }}
              >
                {/* <Center> */}
                <Suspense fallback={<Loader />}>
                  <Model3d
                    setShowLoad={setShowLoad}
                    currentModel={characters.model3d}
                    position={characters.position}
                  />
                  <OrbitControls
                    enablePan={false}
                    reverseOrbit={false}
                    enableZoom={false}
                  />
                  <Environment path={"/model3d-env/"} files={characters.env} />
                </Suspense>
                {/* </Center> */}
              </Canvas>

              <Container className="characters-information">
                {showLoad === 100 && (
                  <img className="3d-rotation" src={Rotation3d} alt="" />
                )}
                <IconContext.Provider
                  value={{
                    color: "#e28001",
                    size: "7rem",
                  }}
                >
                  <div
                    className={`prev-3d-model ${
                      characters.id === 1 && "opacity-50"
                    }`}
                    onClick={handleClickPrev}
                  >
                    <MdArrowBackIos />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "#e28001",
                    size: "7rem",
                  }}
                >
                  <div
                    className={`next-3d-model ${
                      characters.id === 10 && "opacity-50"
                    }`}
                    onClick={handleClickNext}
                  >
                    <MdArrowForwardIos />
                  </div>
                </IconContext.Provider>
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
                    <div className="social-media-our-team">
                      <IconContext.Provider
                        value={{
                          color: "white",
                          size: "2.4rem",
                        }}
                      >
                        <a
                          href={characters.telegram}
                          target="_blank"
                          className={`${
                            characters.telegram === "" ? "text-muted" : null
                          }`}
                        >
                          <FaTelegramPlane />
                        </a>
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{
                          color: "white",
                          size: "2.4rem",
                        }}
                      >
                        <a href={characters.email} target="_blank">
                          <HiOutlineMail />
                        </a>
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{
                          color: "white",
                          size: "2.4rem",
                        }}
                      >
                        <a
                          href={characters.discord}
                          target="_blank"
                          className={`${
                            characters.discord === "" ? "text-muted" : null
                          }`}
                        >
                          <FaDiscord />
                        </a>
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
};

export default OurTeam;
