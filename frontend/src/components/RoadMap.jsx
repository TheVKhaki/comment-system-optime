import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import {
  faSpinner,
  faCircleCheck,
  faHourglass,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import sliderVideo1 from "../video/BkgV02_P01.mp4";
import sliderVideo2 from "../video/BkgV02_P02.mp4";
import sliderVideo3 from "../video/BkgV02_P03.mp4";
import sliderVideoReverse1 from "../video/Reverse_BkgV02_P01.mp4";
import sliderVideoReverse2 from "../video/Reverse_BkgV02_P02.mp4";
import sliderVideoReverse3 from "../video/Reverse_BkgV02_P03.mp4";
import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Player } from "@lottiefiles/react-lottie-player";
import ETHLottie from "../lottie/ETH (1).json";
import lineSlide from "../images/Lines_00000.png";
import { useMediaQuery } from "react-responsive";
import paginationGifOne from "../video/Pageination01.gif";
import paginationGifTwo from "../video/Pageination02.gif";
import paginationGifThree from "../video/Pageination03.gif";
import paginationGifReverseOne from "../video/Reverse_Pageination01.gif";
import paginationGifReverseTwo from "../video/Reverse_Pageination02.gif";
import paginationGifReverseThree from "../video/Reverse_Pageination03.gif";
import ReactFreezeframe from "react-freezeframe";
import Lazyload from "../HOC/Lazyload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RoadMap({ setRoadmapSlideLast, roadmapSlideLast }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991.98px)" });
  const lottiePlayer = useRef();
  const controls = useAnimation();
  const [elementView, inView] = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const textFadeIn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.2,
      },
    },
  };
  const freezeGif1 = useRef();
  const freezeGif2 = useRef();
  const freezeGif3 = useRef();
  const freezeGifReverse1 = useRef();
  const freezeGifReverse2 = useRef();
  const freezeGifReverse3 = useRef();
  const app = useRef();
  const handleTransitionStart = (e) => {
    if (isTabletOrMobile) {
      gsap.fromTo(
        ".swiper-slide-active ul li",
        {
          y: 160,
          opacity: 0,
        },
        {
          y: 0,
          duration: 0.5,
          delay: 0.3,
          opacity: 1,
          stagger: 0.1,
          onComplete: () => {
            setRoadmapSlideLast(e.activeIndex);
            e.enable();
          },
        }
      );
    } else {
      gsap.fromTo(
        ".swiper-slide-active ul li",
        {
          y: 160,
          opacity: 0,
        },
        {
          y: 0,
          duration: 1,
          delay: 0.6,
          opacity: 1,
          stagger: 0.1,
          onComplete: () => {
            setRoadmapSlideLast(e.activeIndex);
          },
        }
      );
    }
  };
  const videoSlider1 = useRef();
  const videoSlider2 = useRef();
  const videoSlider3 = useRef();
  const videoSliderRevers1 = useRef();
  const videoSliderRevers2 = useRef();
  const videoSliderRevers3 = useRef();
  const videoSliderEnd = () => {
    const swiper = document.querySelector(".slider-roadmap .swiper").swiper;
    swiper.enable();
  };

  const handleTransitionStartNext = (e) => {
    const gifSlide = document.querySelectorAll(".gif-slide");
    const videoSlide = document.querySelectorAll(".video-slider");
    if (e.activeIndex === 1) {
      e.disable();
      if (!isTabletOrMobile) {
        videoSlide.forEach((videoSlide) => {
          videoSlide.classList.remove("active");
        });
        videoSlider1.current.classList.add("active");
        videoSlider1.current.play();
        setTimeout(() => {
          videoSlide.forEach((videoSlide) => {
            if (!videoSlide.classList.contains("active")) {
              videoSlide.currentTime = 0;
            }
          });
        }, 1000);
      }
      freezeGif1.current.start();
      setTimeout(() => {
        gifSlide.forEach((gifSlide) => {
          gifSlide.classList.remove("active");
        });
        gifSlide[1].classList.add("active");
        setTimeout(() => {
          freezeGif1.current.stop();
        }, 2000);
      }, 2500);
    }
    if (e.activeIndex === 2) {
      e.disable();
      if (!isTabletOrMobile) {
        videoSlide.forEach((videoSlide) => {
          videoSlide.classList.remove("active");
        });
        videoSlider2.current.classList.add("active");
        videoSlider2.current.play();
        setTimeout(() => {
          videoSlide.forEach((videoSlide) => {
            if (!videoSlide.classList.contains("active")) {
              videoSlide.currentTime = 0;
            }
          });
        }, 1000);
      }

      if (!gifSlide[1].classList.contains("active")) {
        gifSlide.forEach((gifSlide) => {
          gifSlide.classList.remove("active");
        });
        gifSlide[1].classList.add("active");
      }
      freezeGif2.current.start();
      setTimeout(() => {
        gifSlide.forEach((gifSlide) => {
          gifSlide.classList.remove("active");
        });
        gifSlide[2].classList.add("active");
        setTimeout(() => {
          freezeGif2.current.stop();
        }, 2000);
      }, 2240);
    }
    if (e.activeIndex === 3) {
      e.disable();
      if (!isTabletOrMobile) {
        videoSlide.forEach((videoSlide) => {
          videoSlide.classList.remove("active");
        });
        videoSlider3.current.classList.add("active");
        videoSlider3.current.play();
        setTimeout(() => {
          videoSlide.forEach((videoSlide) => {
            if (!videoSlide.classList.contains("active")) {
              videoSlide.currentTime = 0;
            }
          });
        }, 1000);
      }

      if (!gifSlide[2].classList.contains("active")) {
        gifSlide.forEach((gifSlide) => {
          gifSlide.classList.remove("active");
        });
        gifSlide[2].classList.add("active");
      }
      freezeGif3.current.start();
      setTimeout(() => {
        gifSlide.forEach((gifSlide) => {
          gifSlide.classList.remove("active");
        });
        gifSlide[5].classList.add("active");
        setTimeout(() => {
          freezeGif3.current.stop();
        }, 2000);
      }, 4240);
    }
    // if (!isTabletOrMobile) {
    //   prev = false;
    //   videoSlider.play();
    //   videoSliderRevers.style.opacity = 0;
    //   setTimeout(() => {
    //     setSlideOneEnd(false);
    //     setSlideTwoEnd(false);
    //     setSlideThreeEnd(false);
    //   }, 1000);
    // }
    if (isTabletOrMobile) {
      gsap.fromTo(
        ".swiper-slide-prev ul li",
        {
          y: 0,
          opacity: 1,
        },
        {
          y: 160,
          opacity: 0,
          duration: 0.2,
          stagger: {
            each: 0.1,
            from: "end",
          },
          onStart: function () {
            lottiePlayer.current.play();
          },
        }
      );
    } else {
      gsap.fromTo(
        ".swiper-slide-prev ul li",
        {
          y: 0,
          opacity: 1,
        },
        {
          y: 160,
          opacity: 0,
          duration: 0.5,
          stagger: {
            each: 0.1,
            from: "end",
          },
          onStart: function () {
            lottiePlayer.current.play();
          },
        }
      );
    }
  };
  const handleTransitionStartEnd = (e) => {
    const gifSlide = document.querySelectorAll(".gif-slide");
    const videoSlide = document.querySelectorAll(".video-slider");
    if (e.activeIndex === 0) {
      e.disable();
      if (!isTabletOrMobile) {
        videoSlide.forEach((videoSlide) => {
          videoSlide.classList.remove("active");
        });
        videoSliderRevers1.current.classList.add("active");
        videoSliderRevers1.current.play();
        setTimeout(() => {
          videoSlide.forEach((videoSlide) => {
            if (!videoSlide.classList.contains("active")) {
              videoSlide.currentTime = 0;
            }
          });
        }, 1000);
      }

      if (!gifSlide[3].classList.contains("active")) {
        gifSlide.forEach((gifSlide) => {
          gifSlide.classList.remove("active");
        });
        gifSlide[3].classList.add("active");
      }
      freezeGifReverse1.current.start();
      setTimeout(() => {
        gifSlide.forEach((gifSlide) => {
          gifSlide.classList.remove("active");
        });
        gifSlide[0].classList.add("active");
        setTimeout(() => {
          freezeGifReverse1.current.stop();
        }, 2000);
      }, 2520);
    }
    if (e.activeIndex === 1) {
      e.disable();
      if (!isTabletOrMobile) {
        videoSlide.forEach((videoSlide) => {
          videoSlide.classList.remove("active");
        });
        videoSliderRevers2.current.classList.add("active");
        videoSliderRevers2.current.play();
        setTimeout(() => {
          videoSlide.forEach((videoSlide) => {
            if (!videoSlide.classList.contains("active")) {
              videoSlide.currentTime = 0;
            }
          });
        }, 1000);
      }

      if (!gifSlide[4].classList.contains("active")) {
        gifSlide.forEach((gifSlide) => {
          gifSlide.classList.remove("active");
        });
        gifSlide[4].classList.add("active");
      }
      freezeGifReverse2.current.start();
      setTimeout(() => {
        gifSlide.forEach((gifSlide) => {
          gifSlide.classList.remove("active");
        });
        gifSlide[3].classList.add("active");
        setTimeout(() => {
          freezeGifReverse2.current.stop();
        }, 2000);
      }, 2240);
    }
    if (e.activeIndex === 2) {
      e.disable();
      if (!isTabletOrMobile) {
        videoSlide.forEach((videoSlide) => {
          videoSlide.classList.remove("active");
        });
        videoSliderRevers3.current.classList.add("active");
        videoSliderRevers3.current.play();
        setTimeout(() => {
          videoSlide.forEach((videoSlide) => {
            if (!videoSlide.classList.contains("active")) {
              videoSlide.currentTime = 0;
            }
          });
        }, 1000);
      }

      freezeGifReverse3.current.start();
      setTimeout(() => {
        gifSlide.forEach((gifSlide) => {
          gifSlide.classList.remove("active");
        });
        gifSlide[4].classList.add("active");
        setTimeout(() => {
          freezeGifReverse3.current.stop();
        }, 2000);
      }, 4240);
    }
    // if (!isTabletOrMobile) {
    //   prev = true;
    //   videoSliderRevers.style.opacity = 1;
    //   videoSliderRevers.play();
    //   setTimeout(() => {
    //     setSlideOneEnd(false);
    //     setSlideTwoEnd(false);
    //     setSlideThreeEnd(false);
    //   }, 1000);
    // }
    // if (!isTabletOrMobile) {
    gsap.fromTo(
      ".swiper-slide-next ul li",
      {
        y: 0,
        opacity: 1,
      },
      {
        y: 160,
        opacity: 0,
        duration: 0.5,
        stagger: {
          each: 0.1,
          from: "end",
        },
        onStart: function () {
          lottiePlayer.current.play();
        },
      }
    );
    // }
  };

  return (
    <section className="roadmap roadmap-step-slider" ref={elementView}>
      <Container>
        <div className="header-roadmap">
          <motion.h2 variants={textFadeIn} initial="hidden" animate={controls}>
            RoadMap
          </motion.h2>
          <motion.p variants={textFadeIn} initial="hidden" animate={controls}>
            Invention, development and introduction of QPoker
          </motion.p>
        </div>
        <div className="slider-roadmap">
          <div ref={app}>
            <div className="bg-home">
              <Lazyload>
                {!isTabletOrMobile && (
                  <>
                    <video
                      // onTimeUpdate={handleCurrentTime}
                      onEnded={videoSliderEnd}
                      ref={videoSlider1}
                      src={sliderVideo1}
                      muted
                      className="video-slider w-100 h100 active"
                    ></video>
                    <video
                      // onTimeUpdate={handleCurrentTimeReverse}
                      onEnded={videoSliderEnd}
                      ref={videoSlider2}
                      src={sliderVideo2}
                      muted
                      className="video-slider w-100 h100"
                    ></video>
                    <video
                      // onTimeUpdate={handleCurrentTime}
                      onEnded={videoSliderEnd}
                      ref={videoSlider3}
                      src={sliderVideo3}
                      muted
                      className="video-slider w-100 h100"
                    ></video>
                    <video
                      // onTimeUpdate={handleCurrentTimeReverse}
                      onEnded={videoSliderEnd}
                      ref={videoSliderRevers1}
                      src={sliderVideoReverse1}
                      muted
                      className="video-slider w-100 h100"
                    ></video>
                    <video
                      // onTimeUpdate={handleCurrentTime}
                      onEnded={videoSliderEnd}
                      ref={videoSliderRevers2}
                      src={sliderVideoReverse2}
                      muted
                      className="video-slider w-100 h100"
                    ></video>
                    <video
                      // onTimeUpdate={handleCurrentTimeReverse}
                      onEnded={videoSliderEnd}
                      ref={videoSliderRevers3}
                      src={sliderVideoReverse3}
                      muted
                      className="video-slider w-100 h100"
                    ></video>
                  </>
                )}
              </Lazyload>
              <img src={lineSlide} alt="" />
              <Player
                ref={lottiePlayer}
                controls={false}
                speed="0.4"
                src={ETHLottie}
                style={{ height: "100px", width: "70px" }}
                className="lottie-roadmap-slider-eth"
              ></Player>
              <Swiper
                modules={[EffectFade, Navigation]}
                effect="fade"
                spaceBetween={0}
                slidesPerView={1}
                navigation
                allowTouchMove={false}
                onTransitionStart={(e) => handleTransitionStart(e)}
                onSlideNextTransitionStart={handleTransitionStartNext}
                onSlidePrevTransitionStart={handleTransitionStartEnd}
              >
                <SwiperSlide>
                  <h1>Apr2020 - Dec2021</h1>
                  <ul>
                    <li>
                      Feasibility Study Of Idea{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faCircleCheck}
                        />
                      ) : (
                        <span>(Completed)</span>
                      )}
                    </li>
                    <li>
                      Initial Prototype{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faCircleCheck}
                        />
                      ) : (
                        <span>(Completed)</span>
                      )}
                    </li>
                    <li>
                      Game Role Book{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faCircleCheck}
                        />
                      ) : (
                        <span>(Completed)</span>
                      )}
                    </li>
                    <li>
                      Transition To Unity Engine{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faCircleCheck}
                        />
                      ) : (
                        <span>(Completed)</span>
                      )}
                    </li>
                    <li>
                      First Version Of Litepaper{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faCircleCheck}
                        />
                      ) : (
                        <span>(Completed)</span>
                      )}
                    </li>
                    <li>
                      First Cinematic Trailer{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faCircleCheck}
                        />
                      ) : (
                        <span>(Completed)</span>
                      )}
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <h1>Jan2022 - Feb2023</h1>
                  <ul>
                    <li>
                      Development Version Of The Game{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faCircleCheck}
                        />
                      ) : (
                        <span>(Completed)</span>
                      )}
                    </li>
                    <li>
                      Participate Platform{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faCircleCheck}
                        />
                      ) : (
                        <span>(Completed)</span>
                      )}
                    </li>
                    <li>
                      NFT SmartContracts{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faCircleCheck}
                        />
                      ) : (
                        <span>(Completed)</span>
                      )}
                    </li>
                    <li>
                      ERC20 Token SmartContrac{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faCircleCheck}
                        />
                      ) : (
                        <span>(Completed)</span>
                      )}
                    </li>
                    <li>
                      Final Version Of Whitepaper{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faCircleCheck}
                        />
                      ) : (
                        <span>(Completed)</span>
                      )}{" "}
                    </li>
                    <li>
                      Investment platform{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faSpinner}
                        />
                      ) : (
                        <span>(In progress)</span>
                      )}{" "}
                    </li>
                    <li>
                      Private Browser Release Beta{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faHourglass}
                        />
                      ) : (
                        <span>(Upcoming)</span>
                      )}
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <h1>Mar2023 - Dec2023</h1>
                  <ul>
                    <li>
                      NFT Marketplace{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faBullhorn}
                        />
                      ) : (
                        <span title="To Be Announced">(TBA)</span>
                      )}
                    </li>
                    <li>
                      Public Browser Release Beta{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faBullhorn}
                        />
                      ) : (
                        <span title="To Be Announced">(TBA)</span>
                      )}
                    </li>
                    <li>
                      Public Mobile Release Beta{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faBullhorn}
                        />
                      ) : (
                        <span title="To Be Announced">(TBA)</span>
                      )}
                    </li>
                    <li>
                      Public Desktop Release Beta{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faBullhorn}
                        />
                      ) : (
                        <span title="To Be Announced">(TBA)</span>
                      )}
                    </li>
                    <li>
                      Initial Metaverse Prototypes{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faBullhorn}
                        />
                      ) : (
                        <span title="To Be Announced">(TBA)</span>
                      )}
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <h1>Sales</h1>
                  <ul>
                    <li>
                      Pre Seed - Mar 2020{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faCircleCheck}
                        />
                      ) : (
                        <span>(Completed)</span>
                      )}
                    </li>
                    <li>
                      Initial Coin Offer - Jan 2023{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faHourglass}
                        />
                      ) : (
                        <span>(Upcoming)</span>
                      )}{" "}
                    </li>
                    <li>
                      Initial Game Offer{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faBullhorn}
                        />
                      ) : (
                        <span title="To Be Announced">(TBA)</span>
                      )}
                    </li>
                    <li>
                      SushiSwap Liquidity Pool{" "}
                      {isTabletOrMobile ? (
                        <FontAwesomeIcon
                          className="ms-2"
                          color="#fd9605"
                          icon={faBullhorn}
                        />
                      ) : (
                        <span title="To Be Announced">(TBA)</span>
                      )}
                    </li>
                  </ul>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="slider-roadmap-pagination">
              <div className="gif-slide active">
                <ReactFreezeframe
                  options={{
                    trigger: false,
                  }}
                  src={paginationGifOne}
                  ref={freezeGif1}
                />
              </div>
              <div className="gif-slide">
                <ReactFreezeframe
                  options={{
                    trigger: false,
                  }}
                  src={paginationGifTwo}
                  ref={freezeGif2}
                />
              </div>
              <div className="gif-slide">
                <ReactFreezeframe
                  options={{
                    trigger: false,
                  }}
                  src={paginationGifThree}
                  ref={freezeGif3}
                />
              </div>
              <div className="gif-slide ">
                <ReactFreezeframe
                  options={{
                    trigger: false,
                  }}
                  src={paginationGifReverseOne}
                  ref={freezeGifReverse1}
                />
              </div>
              <div className="gif-slide">
                <ReactFreezeframe
                  options={{
                    trigger: false,
                  }}
                  src={paginationGifReverseTwo}
                  ref={freezeGifReverse2}
                />
              </div>
              <div className="gif-slide">
                <ReactFreezeframe
                  options={{
                    trigger: false,
                  }}
                  src={paginationGifReverseThree}
                  ref={freezeGifReverse3}
                />
              </div>
              {/* // <img src= className="gif-slide-1" alt="" /> */}

              {/* {roadmapSlideLast === 1 && <img src={paginationGifTwo} alt="" />}
              {roadmapSlideLast === 2 && (
                <img src={paginationGifThree} alt="" />
              )} */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
