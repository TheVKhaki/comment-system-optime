import { useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { RandomReveal } from "react-random-reveal";
import { gsap } from "gsap";
import sliderVideo from "../video/RoadmapVideo_R03.mp4";
import sliderVideoReverse from "../video/RoadmapVideo_R04_Reverse.mp4";
import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Player } from "@lottiefiles/react-lottie-player";
import ETHLottie from "../lottie/ETH (1).json";
import lineSlide from "../images/Lines_00000.png";
import { useMediaQuery } from "react-responsive";
import paginationGifOne from "../video/GIF_Pageination01.gif";
import paginationGifTwo from "../video/GIF_Pageination02.gif";
import paginationGifThree from "../video/GIF_Pageination03.gif";
import paginationGifReverseOne from "../video/GIF.Reverse_Pageination01.gif";
import paginationGifReverseTwo from "../video/GIF.Reverse_Pageination02.gif";
import paginationGifReverseThree from "../video/GIF.Reverse_Pageination03.gif";
import ReactFreezeframe from "react-freezeframe";

export default function RoadMap({ setRoadmapSlideLast, roadmapSlideLast }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991.98px)" });
  const videoSlider = document.querySelector(".slider-roadmap .video-slider");
  const videoSliderRevers = document.querySelector(
    ".slider-roadmap .video-slider-revers"
  );
  const [slideOneEnd, setSlideOneEnd] = useState(false);
  const [slideTwoEnd, setSlideTwoEnd] = useState(false);
  const [slideThreeEnd, setSlideThreeEnd] = useState(false);
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
  let prev = false;
  const handleCurrentTime = (e) => {
    console.log(e.target.currentTime);
    const swiper = document.querySelector(".slider-roadmap .swiper").swiper;
    if (roadmapSlideLast === 1) {
      if (!slideOneEnd) {
        if (Math.round(e.target.currentTime) === 3) {
          videoSliderRevers.currentTime = 6;
          videoSlider.pause();
          swiper.enable();
          setSlideOneEnd(true);
        }
      }
    }
    if (
      Math.round(e.target.currentTime) > 3 &&
      Math.round(e.target.currentTime) < 6
    ) {
      swiper.disable();
    }
    if (roadmapSlideLast === 2) {
      if (!slideTwoEnd) {
        if (Math.round(e.target.currentTime) === 6) {
          videoSliderRevers.currentTime = 3;
          videoSlider.pause();
          swiper.enable();
          setSlideTwoEnd(true);
        }
      }
    }
    if (
      Math.round(e.target.currentTime) > 6 &&
      Math.round(e.target.currentTime) < 9
    ) {
      swiper.disable();
    }
    if (Math.round(e.target.currentTime) === 9) {
      swiper.enable();
      videoSliderRevers.currentTime = 0;
    }
  };
  const handleCurrentTimeReverse = (e) => {
    console.log(prev);
    const swiper = document.querySelector(".slider-roadmap .swiper").swiper;
    if (roadmapSlideLast === 0) {
      if (!slideOneEnd) {
        if (e.target.currentTime === e.target.duration) {
          videoSlider.currentTime = 0;
          swiper.enable();
          setSlideOneEnd(true);
        }
      }
    }
    if (
      Math.round(e.target.currentTime) > 3 &&
      Math.round(e.target.currentTime) < 6
    ) {
      swiper.disable();
    }
    if (
      Math.round(e.target.currentTime) > 0 &&
      Math.round(e.target.currentTime) < 3
    ) {
      swiper.disable();
    }
    if (roadmapSlideLast === 1) {
      if (!slideTwoEnd) {
        if (Math.round(e.target.currentTime) === 6) {
          setTimeout(() => {
            if (prev) {
              videoSlider.currentTime = 3;
            }
          }, 1000);
          videoSliderRevers.pause();
          swiper.enable();
          setSlideTwoEnd(true);
        }
      }
    }
    if (roadmapSlideLast === 2) {
      if (!slideThreeEnd) {
        if (Math.round(e.target.currentTime) === 3) {
          setTimeout(() => {
            if (prev) {
              videoSlider.currentTime = 6;
            }
          }, 1000);
          videoSliderRevers.pause();
          swiper.enable();
          setSlideThreeEnd(true);
        }
      }
    }
    if (
      Math.round(e.target.currentTime) > 6 &&
      Math.round(e.target.currentTime) < 9
    ) {
      swiper.disable();
    }
    if (Math.round(e.target.currentTime) === 0) {
      swiper.enable();
    }
  };
  const app = useRef();
  const handleSlideChange = (e) => {};
  const handleTransitionStart = (e) => {
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
  const handleTransitionStartNext = (e) => {
    const gifSlide = document.querySelectorAll(".gif-slide");
    if (e.activeIndex === 1) {
      freezeGif1.current.start();
      setTimeout(() => {
        gifSlide.forEach((gifSlide) => {
          gifSlide.classList.remove("active");
        });
        gifSlide[1].classList.add("active");
        freezeGif1.current.stop();
      }, 3000);
    }
    if (e.activeIndex === 2) {
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
        freezeGif2.current.stop();
      }, 3000);
    }
    if (e.activeIndex === 3) {
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
        freezeGif3.current.stop();
      }, 4300);
    }
    if (!isTabletOrMobile) {
      prev = false;
      videoSlider.play();
      videoSliderRevers.style.opacity = 0;
      setTimeout(() => {
        setSlideOneEnd(false);
        setSlideTwoEnd(false);
        setSlideThreeEnd(false);
      }, 1000);
    }
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
          console.log("first");
          lottiePlayer.current.play();
          e.disable();
        },
        onComplete: function () {},
      }
    );
  };
  const handleTransitionStartEnd = (e) => {
    const gifSlide = document.querySelectorAll(".gif-slide");
    if (e.activeIndex === 0) {
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
        freezeGifReverse1.current.stop();
      }, 3500);
    }
    if (e.activeIndex === 1) {
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
        freezeGifReverse2.current.stop();
      }, 3000);
    }
    if (e.activeIndex === 2) {
      freezeGifReverse3.current.start();
      setTimeout(() => {
        gifSlide.forEach((gifSlide) => {
          gifSlide.classList.remove("active");
        });
        gifSlide[4].classList.add("active");
        freezeGifReverse3.current.stop();
      }, 4700);
    }
    if (!isTabletOrMobile) {
      prev = true;
      videoSliderRevers.style.opacity = 1;
      videoSliderRevers.play();
      setTimeout(() => {
        setSlideOneEnd(false);
        setSlideTwoEnd(false);
        setSlideThreeEnd(false);
      }, 1000);
    }
    if (!isTabletOrMobile) {
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
            e.disable();
          },
        }
      );
    }
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
              {!isTabletOrMobile && (
                <>
                  <video
                    onTimeUpdate={handleCurrentTime}
                    src={sliderVideo}
                    muted
                    className="video-slider w-100 h100"
                  ></video>
                  <video
                    onTimeUpdate={handleCurrentTimeReverse}
                    src={sliderVideoReverse}
                    muted
                    className="video-slider-revers w-100 h100"
                  ></video>
                </>
              )}

              <img src={lineSlide} alt="" />
              <Player
                ref={lottiePlayer}
                controls={false}
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
                <ReactFreezeframe src={paginationGifOne} ref={freezeGif1} />
              </div>
              <div className="gif-slide">
                <ReactFreezeframe src={paginationGifTwo} ref={freezeGif2} />
              </div>
              <div className="gif-slide">
                <ReactFreezeframe src={paginationGifThree} ref={freezeGif3} />
              </div>
              <div className="gif-slide ">
                <ReactFreezeframe
                  src={paginationGifReverseOne}
                  ref={freezeGifReverse1}
                />
              </div>
              <div className="gif-slide">
                <ReactFreezeframe
                  src={paginationGifReverseTwo}
                  ref={freezeGifReverse2}
                />
              </div>
              <div className="gif-slide">
                <ReactFreezeframe
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
