import { useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { RandomReveal } from "react-random-reveal";
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

export default function RoadMap({ setRoadmapSlideLast, roadmapSlideLast }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991.98px)" });
  const lottiePlayer = useRef();
  const controls = useAnimation();
  const [elementView, inView] = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      // videoSlider.play();
    }
  }, [controls, inView]);
  const freezeGif1 = useRef();
  const freezeGif2 = useRef();
  const freezeGif3 = useRef();
  const freezeGifReverse1 = useRef();
  const freezeGifReverse2 = useRef();
  const freezeGifReverse3 = useRef();
  const app = useRef();
  const handleSlideChange = (e) => {};
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

    // const h1Slide = document.querySelector(
    //   ".swiper-slide.swiper-slide-active h1"
    // );
    // // const h1SlideNext = document.querySelector(
    // //   ".swiper-slide.swiper-slide-next h1"
    // // );
    // // const h1SlidePrev = document.querySelector(
    // //   ".swiper-slide.swiper-slide-prev h1"
    // // );
    // // h1SlideNext.style.transform = "translate(200px)";
    // // h1SlidePrev.style.transform = "translate(-200px)";
    // h1Slide.style.transform = "translate(200px)";
    // h1Slide.style.opacity = "1";
  };
  const handleTransitionEnd = () => {
    console.log("first");
  };
  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     // Our animations can use selector text like ".box"
  //     // this will only select '.box' elements that are children of the component
  //     gsap.to(".swiper-slide-active ul li", {
  //       opacity: 1,
  //     });
  //   }, app); // <- IMPORTANT! Scopes selector text

  //   return () => ctx.revert(); // cleanup
  // }, []);
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
        }, 500);
      }, 2550);
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
        }, 500);
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
        }, 500);
      }, 4250);
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
        }, 500);
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
        }, 500);
      }, 2250);
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
        }, 500);
      }, 4250);
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
          <h2>
            <RandomReveal
              isPlaying={inView}
              duration={0.5}
              revealDuration={0.5}
              characters="RoadMap"
            />
          </h2>
          <p>
            {/* <RandomReveal
                  isPlaying={inView}
                  duration={0.5}
                  revealDuration={0.5}
                  characters="Step2"
                /> */}
            {/* <br /> */}
            <RandomReveal
              isPlaying={inView}
              duration={0.5}
              revealDuration={0.5}
              characters="Invention, development and introduction of QPoker"
            />
          </p>
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
                onSlideChange={(e) => handleSlideChange(e)}
                onTransitionStart={(e) => handleTransitionStart(e)}
                onTransitionEnd={handleTransitionEnd}
                onSlideNextTransitionStart={handleTransitionStartNext}
                onSlidePrevTransitionStart={handleTransitionStartEnd}
              >
                <SwiperSlide>
                  <h1>1Nov-30Jan</h1>
                  <ul>
                    <li>Updating Qpoker Game</li>
                    <li>Updating NFT Market Place</li>
                    <li>Beta version of iGaming-Platform</li>
                    <li>Releasing Governance ERC-20 Token</li>
                    <li>Releasing Qpoker Treasury</li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <h1>30Jan-1Apr</h1>
                  <ul>
                    <li>Accounting API</li>
                    <li>NFT Market Place</li>
                    <li>Decentralized EXchange (DEX)</li>
                    <li>Integrated User-Panel</li>
                    <li>QPoker-Game Private Sale</li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <h1>1Apr-30Jul</h1>
                  <ul>
                    <li>QPoker-Game Public Sale</li>
                    <li>Beta version of iGaming-Platform</li>
                    <li>Decentralized EXchange (DEX)</li>
                    <li>Releasing Governance ERV-20 Token</li>
                    <li>Releasing Qpoker Treasury</li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <h1>4Apr-30Jul</h1>
                  <ul>
                    <li>QPoker-Game Public Sale</li>
                    <li>Beta version of iGaming-Platform</li>
                    <li>Decentralized EXchange (DEX)</li>
                    <li>Releasing Governance ERC-20 Token</li>
                    <li>Releasing Qpoker Treasury</li>
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
