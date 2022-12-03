import { useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { RandomReveal } from "react-random-reveal";
import { gsap } from "gsap";
import bgVideo from "../video/RoadmapVideo_R02.mp4";
import { Mousewheel } from "swiper";
import { EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import lineSlide from "../images/Lines_00000.png";
export default function RoadMap({ setRoadmapSlideLast }) {
  const controls = useAnimation();
  const [element, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const app = useRef();
  const circle = useRef();
  const handleSlideChange = (e) => {};
  const handleTransitionStart = (e) => {
    console.log(e.activeIndex);
    setRoadmapSlideLast(e.activeIndex);

    gsap.fromTo(
      ".swiper-slide-active ul li",
      {
        y: 160,
        opacity: 0,
      },
      {
        y: 0,
        duration: 0.5,
        delay: 0.6,
        opacity: 1,
        stagger: 0.1,
        onComplete: () => {
          e.enable();
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
    gsap.fromTo(
      ".swiper-slide-prev ul li",
      {
        y: 0,
        opacity: 1,
      },
      {
        y: 160,
        opacity: 0,
        duration: 0.3,
        stagger: {
          each: 0.1,
          from: "end",
        },
        onStart: function () {
          e.disable();
        },
        onComplete: function () {},
      }
    );
  };
  const handleTransitionStartEnd = (e) => {
    gsap.fromTo(
      ".swiper-slide-next ul li",
      {
        y: 0,
        opacity: 1,
      },
      {
        y: 160,
        opacity: 0,
        duration: 0.3,
        stagger: {
          each: 0.1,
          from: "end",
        },
        onStart: function () {
          e.disable();
        },
      }
    );
  };

  return (
    <section className="roadmap" ref={element}>
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
              <video src={bgVideo} autoPlay loop className="w-100 h100"></video>
              <img src={lineSlide} alt="" />
              <Swiper
                modules={[Mousewheel, EffectFade]}
                effect="fade"
                spaceBetween={0}
                slidesPerView={1}
                mousewheel={true}
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
                    <li>Releasing Governance ERV-20 Token</li>
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
                    <li>Releasing the beta version of the QPoker game</li>
                    <li>Decentralized EXchange (DEX)</li>
                    <li>Releasing Governance ERV-20 Token</li>
                    <li>Releasing Qpoker Treasury</li>
                  </ul>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
