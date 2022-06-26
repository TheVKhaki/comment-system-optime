import { useEffect, useState } from "react";
import { useRef } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
//Media
import imageRoadMap2 from "../images/2ND_FRG.png";
import logoModalRoadMap from "../images/Logo_Newcode Color-16.png";
import roadMapParticipate from "../images/RMMBS2.png";
import rocketgif from "../video/ON_2.mp4";
//RandomReveal
import { RandomReveal } from "react-random-reveal";
//observer
import { useInView } from "react-intersection-observer";
//Framer motion
import { motion, useAnimation } from "framer-motion";
//lazyload
import Lazyload from "../HOC/Lazyload";
//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function MyVerticallyCenteredModal(props) {
  gsap.registerPlugin(ScrollTrigger);
  const lineModal1 = useRef();
  const lineModal2 = useRef();
  const lineModal3 = useRef();
  const lineModal4 = useRef();
  const lineModal5 = useRef();
  const boxModal1 = useRef();
  const boxModal2 = useRef();
  const boxModal3 = useRef();
  const boxModal4 = useRef();
  const boxModal5 = useRef();
  const rocketAnimRef = useRef();

  useEffect(() => {
    if (props.show) {
      gsap.fromTo(
        boxModal1.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          scrollTrigger: {
            scroller: ".modal",
            trigger: boxModal1.current,
            start: "-100px center",
            end: "50px center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        boxModal2.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          scrollTrigger: {
            scroller: ".modal",
            trigger: boxModal2.current,
            start: "-100px center",
            end: "50px center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        boxModal3.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          scrollTrigger: {
            scroller: ".modal",
            trigger: boxModal3.current,
            start: "-100px center",
            end: "50px center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        boxModal4.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          scrollTrigger: {
            scroller: ".modal",
            trigger: boxModal4.current,
            start: "-150px center",
            end: "0 center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        boxModal5.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          scrollTrigger: {
            scroller: ".modal",
            trigger: boxModal5.current,
            start: "-200px center",
            end: "0 center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        lineModal1.current,
        {
          height: 0,
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(224,111,31,1) 80%)",
        },
        {
          height: 239,
          duration: 2,
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(224,111,31,1) 1%)",
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "20px center",
            end: "300px center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        lineModal2.current,
        {
          height: 0,
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(224,111,31,1) 80%)",
        },
        {
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(224,111,31,1) 1%)",
          height: 264,
          duration: 2,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "320px center",
            end: "600px center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        lineModal3.current,
        {
          height: 0,
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(224,111,31,1) 80%)",
        },
        {
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(224,111,31,1) 1%)",
          height: 300,
          duration: 2,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "620px center",
            end: "900px center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        lineModal4.current,
        {
          height: 0,
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(224,111,31,1) 80%)",
        },
        {
          height: 277,
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(224,111,31,1) 1%)",
          duration: 2,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "920px center",
            end: "1200px center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        lineModal5.current,
        {
          height: 0,
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(224,111,31,1) 80%)",
        },
        {
          height: 387,
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(224,111,31,1) 1%)",
          duration: 2,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "1220px center",
            end: "1500px center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        document.querySelector(".roadmap-participate .circle-modal-svg-1"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "20px center",
            end: "60px center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        document.querySelector(
          ".roadmap-participate .roadmap-modal-svg .group-svg-modal-2"
        ),
        {
          fill: "#fff",
        },
        {
          fill: "#2f6ea5",
          duration: 1,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "20px center",
            end: "60px center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        document.querySelector(".roadmap-participate .circle-modal-svg-2"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "270px center",
            end: "310px center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        document.querySelector(".roadmap-participate .path-modal-svg-1"),
        {
          fill: "#fff",
        },
        {
          fill: "#2f6ea5",

          duration: 1,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "270px center",
            end: "310px center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        document.querySelector(".roadmap-participate .circle-modal-svg-3"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "620px center",
            end: "660px center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        document.querySelector(".roadmap-participate .path-modal-svg-2"),
        {
          fill: "#fff",
        },
        {
          fill: "#1ba5d4",

          duration: 1,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "620px center",
            end: "660px center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        document.querySelector(".roadmap-participate .circle-modal-svg-4"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "850px center",
            end: "900px center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        document.querySelector(".roadmap-participate .path-modal-svg-3"),
        {
          fill: "#fff",
        },
        {
          fill: "#FF0000",

          duration: 1,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "850px center",
            end: "900px center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        document.querySelector(".roadmap-participate .circle-modal-svg-5"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "1180px center",
            end: "1220px center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        document.querySelector(".roadmap-participate .path-modal-svg-4"),
        {
          fill: "#fff",
        },
        {
          fill: "#fdb017",
          duration: 1,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "1180px center",
            end: "1220px center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        document.querySelector(".roadmap-participate .circle-modal-svg-6"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "1490px center",
            end: "1560px center",
            scrub: true,
          },
        }
      );
      const myEnterFunc = () => {
        rocketAnimRef.current.play();
        console.log("object");
      };
      const myLeaveFunc = () => {
        rocketAnimRef.current.currentTime = 0;
        rocketAnimRef.current.pause();
        console.log("object1");
      };
      gsap.fromTo(
        document.querySelector(".roadmap-participate video"),
        {},
        {
          duration: 1,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "1400px center",
            end: "1520px center",
            scrub: true,
            onEnter: myEnterFunc,
            onEnterBack: myLeaveFunc,
          },
        }
      );
    }
  }, [props.show]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="roadmap2-modal"
    >
      <Modal.Header closeButton closeVariant="white"></Modal.Header>
      <Modal.Body>
        <div className="logo-header">
          <img src={logoModalRoadMap} alt="" />
          <p>Airdrops and Giveaways</p>
        </div>
        <div className="content-text">
          <p>
            The amount of prize money depends on the points earned by you.{" "}
            <br />
            According to the tools that our technical team and programming
            department has built, we can monitor 100 percent of all the
            activities of users who have been active in line with our social
            networks.
            <br /> There is a certain number of points for each behavior, so
            users can finally get their issues at the specified times under the
            smart contract, to convert cashable tokens. This process has been
            implemented transparently by our smart contracts and notified on our
            social networks and blogs.
            <br /> Why are we doing this? <br /> Because by doing so, we will
            always be honest with customers and keep promises to our audience.{" "}
            <br /> Well, it seems we have a competitive campaign, so you'd
            better get to work as soon as possible and increase your ultimate
            participation in our campaigns; take a few simple steps.
          </p>
        </div>
        <div className="roadmap-participate">
          <div className="line-modal-1" ref={lineModal1}></div>
          <div className="line-modal-2" ref={lineModal2}></div>
          <div className="line-modal-3" ref={lineModal3}></div>
          <div className="line-modal-4" ref={lineModal4}></div>
          <div className="line-modal-5" ref={lineModal5}></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 149 1915"
            className="roadmap-modal-svg"
          >
            <g data-name="Layer 2">
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="17"
                d="M74.51 24.5L74.51 1845.39"
              ></path>
              <circle
                cx="74.51"
                cy="42.85"
                r="28.73"
                fill="#050708"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></circle>
              <circle
                cx="74.51"
                cy="338.5"
                r="28.73"
                fill="#050708"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></circle>
              <circle
                cx="74.51"
                cy="1019.81"
                r="28.73"
                fill="#050708"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></circle>
              <circle
                cx="74.51"
                cy="1356.33"
                r="28.73"
                fill="#050708"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></circle>
              <circle
                cx="74.51"
                cy="1839.98"
                r="64.13"
                fill="#050708"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="16"
              ></circle>
              <circle
                cx="74.51"
                cy="663.77"
                r="28.73"
                fill="#050708"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></circle>
              <path
                className="path-modal-svg-1"
                fill="#fff"
                d="M83 332.67a1.21 1.21 0 00-1.2-.67 2.34 2.34 0 00-.81.15c-.12 0-12 4.57-16.81 6.56a1.31 1.31 0 00-.82.73.93.93 0 00.48 1.12c1.2.53 3.71 1.26 4.5 1.49.26.86 1.17 3.87 1.59 5.16a.84.84 0 00.87.53h.1a.41.41 0 00.29-.16.47.47 0 00.11-.26l.25-3.63 1.93 1.45c1.51 1.13 3.31 2.47 4.32 3.19a1.77 1.77 0 001 .39 1.39 1.39 0 001.28-1.16c.84-3.24 2.06-9.38 2.79-13.05l.16-.8a1.55 1.55 0 00-.03-1.04zm-12.28 10.12l-.23 3.21c-.55-1.75-1.35-4.44-1.36-4.47l9.26-6a4.92 4.92 0 01.87-.49c.32-.07.4.06.34.14a15.57 15.57 0 01-1.28 1.22l-7.38 6.11a.44.44 0 00-.22.28z"
              ></path>
              <path
                className="path-modal-svg-3"
                fill="#fff"
                d="M87.47 1013.25a3.39 3.39 0 00-2.39-2.4c-2.11-.57-10.57-.57-10.57-.57s-8.46 0-10.56.57a3.4 3.4 0 00-2.4 2.4 38.64 38.64 0 000 13.11 3.4 3.4 0 002.4 2.4c2.1.57 10.56.57 10.56.57s8.46 0 10.57-.57a3.39 3.39 0 002.39-2.4 38.64 38.64 0 000-13.11zm-15.72 10.58v-8l7.06 4z"
              ></path>
              <path
                className="path-modal-svg-4"
                fill="#fdb017"
                d="M70.35 1352.78a8.43 8.43 0 003.74.69 8.38 8.38 0 003.73-.69 1.52 1.52 0 00.87-1.38c-.23-2.62-.91-3.27-2.11-4.2l-.19-.15a3.06 3.06 0 10-5.37-2 3 3 0 00.77 2l-.2.15c-1.19.93-1.88 1.58-2.11 4.27a1.53 1.53 0 00.87 1.31zm6.8-1.39a3.85 3.85 0 01-1.57.46l-1.07-2.85.65-1 .48.37c.91.75 1.36 1.08 1.51 3.02zm-3.06-7.88a1.53 1.53 0 11-1.54 1.53 1.53 1.53 0 011.54-1.53zm-1.56 4.9l.47-.41.64 1-1.07 2.85a3.79 3.79 0 01-1.56-.46c.2-1.95.62-2.28 1.52-2.98zM68.91 1360.25l-.19-.16a3 3 0 00.76-2 3.07 3.07 0 10-5.37 2l-.19.15c-1.2.92-1.88 1.58-2.11 4.26a1.5 1.5 0 00.87 1.31 8.24 8.24 0 003.73.7 8.25 8.25 0 003.74-.7 1.54 1.54 0 00.87-1.38c-.23-2.6-.92-3.26-2.11-4.18zm-2.5-3.7a1.54 1.54 0 11-1.53 1.53 1.54 1.54 0 011.53-1.53zm-1.55 4.91l.48-.38.65 1-1.07 2.84a3.8 3.8 0 01-1.57-.45c.19-1.98.65-2.31 1.51-3.01zm3 3.43l-1.07-2.84.65-1 .48.38c.91.7 1.33 1 1.51 3a3.55 3.55 0 01-1.52.46zM84.25 1360.25l-.19-.16a3 3 0 00.77-2 3.07 3.07 0 10-5.37 2l-.2.15c-1.19.92-1.88 1.58-2.1 4.26a1.5 1.5 0 00.87 1.31 10.29 10.29 0 007.46 0 1.52 1.52 0 00.87-1.38c-.22-2.6-.91-3.26-2.11-4.18zm-2.49-3.7a1.54 1.54 0 11-1.53 1.53 1.53 1.53 0 011.53-1.53zm-1.55 4.91l.48-.38.64 1-1.07 2.84a3.73 3.73 0 01-1.56-.45c.18-1.98.61-2.31 1.51-3.01zm3.05 3.43l-1.07-2.84.64-1 .48.38c.91.7 1.33 1 1.51 3a3.49 3.49 0 01-1.56.46zM77.92 1358.08a.76.76 0 00-.76-.76h-2.31V1355a.77.77 0 00-1.53 0v2.31H71a.77.77 0 100 1.53h6.14a.76.76 0 00.78-.76z"
              ></path>
              <path
                className="path-modal-svg-2"
                fill="#fff"
                fillRule="evenodd"
                d="M70.15 668.87a4.56 4.56 0 01-4.24-3.16 4.58 4.58 0 002-.06h.07a4.56 4.56 0 01-3-2.09 4.38 4.38 0 01-.67-2.42 4.53 4.53 0 002 .55 4.59 4.59 0 01-1.88-2.77 4.54 4.54 0 01.49-3.3 13.07 13.07 0 009.4 4.77 5 5 0 01-.07-.5 4.55 4.55 0 017.75-3.8.24.24 0 00.24.07 9 9 0 002.65-1h.06a4.66 4.66 0 01-1.95 2.43 8.63 8.63 0 002.54-.69c-.18.22-.34.46-.53.68a8.77 8.77 0 01-1.65 1.57.18.18 0 00-.08.15 12.41 12.41 0 01-.08 2 13.43 13.43 0 01-1.18 4.06 13 13 0 01-2.4 3.64 12.22 12.22 0 01-6.26 3.49 14.44 14.44 0 01-2.54.3 12.85 12.85 0 01-7.29-2l-.11-.07a9.18 9.18 0 004.56-.63 9 9 0 002.17-1.22z"
              ></path>
            </g>
            <g fill="#fff" data-name="Layer 6" className="group-svg-modal-2">
              <path d="M78 40.32a10 10 0 01-1 .92l-5.58 4.63a.38.38 0 00-.16.25l-.16 2.44c-.43-1.31-1-3.36-1-3.39l7-4.56a3.68 3.68 0 01.65-.37c.25-.07.32.03.25.08z"></path>
              <path d="M64.52 36.14v15a1.79 1.79 0 001.78 1.79h16.39a1.79 1.79 0 001.79-1.79v-15zm16.14 3.1l-.12.62c-.55 2.77-1.48 7.41-2.12 9.88a1 1 0 01-1 .88 1.34 1.34 0 01-.77-.3c-.77-.55-2.13-1.57-3.27-2.42-.59-.44-1.11-.82-1.46-1.1l-.2 2.75a.24.24 0 01-.08.2.31.31 0 01-.22.11h-.08a.66.66 0 01-.66-.4c-.32-1-1-3.25-1.19-3.89-.59-.18-2.5-.74-3.41-1.14a.72.72 0 01-.37-.85 1 1 0 01.62-.55C70 41.52 79 38.1 79.1 38.06a1.84 1.84 0 01.6-.11.91.91 0 01.89.52 1.11 1.11 0 01.07.77z"></path>
              <rect
                width="4.88"
                height="13.96"
                x="58.56"
                y="35.51"
                rx="2.44"
              ></rect>
              <rect
                width="4.88"
                height="13.96"
                x="85.86"
                y="35.51"
                rx="2.44"
              ></rect>
              <path d="M78.59 60.66a2.44 2.44 0 01-2.44-2.44v-5.5c0-1.35.44-1.79 1.79-1.79l.54-.07c1.35 0 2.55.51 2.55 1.86v5.5a2.44 2.44 0 01-2.44 2.44z"></path>
              <rect
                width="4.88"
                height="10.38"
                x="68.32"
                y="50.28"
                rx="2.44"
              ></rect>
              <path d="M74.48 25a9.89 9.89 0 00-9.88 9.9h19.78a9.9 9.9 0 00-9.9-9.9zm-5 6.52a1.06 1.06 0 111.06-1.05 1.05 1.05 0 01-1.04 1.08zm9.68 0a1.06 1.06 0 111-1.05 1 1 0 01-.98 1.08z"></path>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 144.26 1901.99"
          >
            <g
              fill="none"
              stroke="#e06f1f"
              data-name="bc59edd1-101a-4510-b44a-68a4d33fcac1"
            >
              {/* <motion.path
                variants={itemPath}
                initial="hidden"
                animate={controls5}
                onAnimationComplete={(definition) => {
                  setAnimationComplete({
                    ...animationComplete,
                    animation5: definition,
                  });
                }}
                strokeLinejoin="round"
                strokeWidth="20"
                d="M72.13 1342L72.13 1712"
              ></motion.path>
              <motion.path
                variants={itemPath}
                initial="hidden"
                animate={controls4}
                onAnimationComplete={(definition) => {
                  setAnimationComplete({
                    ...animationComplete,
                    animation4: definition,
                  });
                }}
                strokeLinejoin="round"
                strokeWidth="20"
                d="M72.13 1018L72.13 1282.48"
              ></motion.path>
              <motion.path
                variants={itemPath}
                initial="hidden"
                animate={controls3}
                onAnimationComplete={(definition) => {
                  setAnimationComplete({
                    ...animationComplete,
                    animation3: definition,
                  });
                }}
                strokeLinejoin="round"
                strokeWidth="20"
                d="M72.13 673L72.13 957"
              ></motion.path>
              <motion.path
                variants={itemPath}
                initial="hidden"
                animate={controls2}
                onAnimationComplete={(definition) => {
                  setAnimationComplete({
                    ...animationComplete,
                    animation2: definition,
                  });
                }}
                strokeLinejoin="round"
                strokeWidth="20"
                d="M72.13 359.11L72.13 614"
              ></motion.path>
              <motion.path
                variants={itemPath}
                initial="hidden"
                animate={controls}
                onAnimationComplete={(definition) => {
                  setAnimationComplete({
                    ...animationComplete,
                    animation1: definition,
                  });
                }}
                strokeLinejoin="round"
                strokeWidth="20"
                d="M72.13 70.46L72.13 297"
              ></motion.path> */}
              <circle
                // variants={itemOpacity}
                // initial="hidden"
                // animate={controls}
                className="circle-modal-svg-1"
                r="28.73"
                strokeMiterlimit="10"
                strokeWidth="8"
                cy="40"
                cx="72.13"
              ></circle>
              <circle
                // variants={itemOpacity}
                // initial="hidden"
                // animate={controls2}
                className="circle-modal-svg-2"
                r="28.73"
                strokeMiterlimit="10"
                strokeWidth="8"
                transform="rotate(-88.09 68.096 336.673)"
                cy="340"
                cx="77"
              ></circle>
              <circle
                // variants={itemOpacity}
                // initial="hidden"
                // animate={controls4}
                className="circle-modal-svg-4"
                r="28.73"
                strokeMiterlimit="10"
                strokeWidth="8"
                transform="rotate(-89.08 68.137 1015.924)"
                cy="1019.81"
                cx="96"
              ></circle>
              <circle
                // variants={itemOpacity}
                // initial="hidden"
                // animate={controls5}
                className="circle-modal-svg-5"
                r="28.73"
                strokeMiterlimit="10"
                strokeWidth="8"
                transform="rotate(-1.68 -271.741 1434.755)"
                cx="75.5"
                cy="1323"
              ></circle>
              <circle
                // variants={itemOpacity}
                // initial="hidden"
                // animate={controls6}
                className="circle-modal-svg-6"
                cx="72.13"
                r="64.13"
                strokeMiterlimit="10"
                strokeWidth="16"
                cy="1783"
              ></circle>
              <circle
                // variants={itemOpacity}
                // initial="hidden"
                // animate={controls3}
                className="circle-modal-svg-3"
                r="28.73"
                strokeMiterlimit="10"
                strokeWidth="8"
                transform="rotate(-1.68 -271.802 740.967)"
                cx="74.5"
                cy="653"
              ></circle>
            </g>
          </svg>
          <div className="box-twitter box-roadmap" ref={boxModal1}>
            <h3>Telegram Bot</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              quidem.
            </p>
          </div>
          <div className="box-twitter-1 box-roadmap" ref={boxModal2}>
            <h3>Telegram Channel</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              quidem.
            </p>
          </div>
          <div className="box-telegram box-roadmap" ref={boxModal3}>
            <h3>Twitter</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              quidem.
            </p>
          </div>
          <div className="box-qpoker box-roadmap" ref={boxModal4}>
            <h3>Youtube</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              quidem.
            </p>
          </div>
          <div className="box-youtube box-roadmap" ref={boxModal5}>
            <h3>Refer-a-Friend</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              quidem.
            </p>
          </div>
          <div className="box-roadmap-2">
            <h3>Airdrop Rewards</h3>
            <p>
              After all the above steps, all participants can cash their points
              at the specified times. Our smart contracts ultimately do this,
              and in this way, all the people who trusted us and have worked to
              grow our social networks and identify us will get the best of
              them.
              <br /> so, Let's start right now
            </p>
          </div>
          <video muted loop ref={rocketAnimRef}>
            <source src={rocketgif} type="video/mp4" />
          </video>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const RoadMapStep2 = () => {
  const [modalShow, setModalShow] = useState(false);
  const roadMapStep2 = useRef(null);
  const controls = useAnimation();
  const [element, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (modalShow) {
      document.querySelector("html").style.overflowY = "hidden";
    } else {
      document.querySelector("html").style.overflowY = "visible";
    }
  }, [modalShow]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  //variant animation
  const imgRoadMap1 = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const textRoadMap = {
    hidden: {
      opacity: 0,
      y: 70,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };
  useEffect(() => {
    const imagePerspective = document.querySelector(".content-slide-2-1 img");
    const sectionInPerspective = document.querySelector(".roadmap-step2");
    sectionInPerspective.addEventListener("mousemove", function (e) {
      const position = (e.clientX / window.innerWidth) * 30 + "px";
      const positionY = (e.clientY / window.innerHeight) * 20 + "px";
      imagePerspective.style.transform = `translate(${position},${positionY})`;
    });
  }, []);

  return (
    <>
      <section className="roadmap-step2 roadmap" ref={element} id="roadmap-2">
        <div ref={roadMapStep2}>
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
                  characters="AirDrops and Bounty Campaigns"
                />
              </p>
            </div>
            <Row className="content-slide-2-1">
              <Col lg={{ span: 4, order: 2 }} xs={{ span: 12, order: 2 }}>
                <motion.div
                  variants={imgRoadMap1}
                  initial="hidden"
                  animate={controls}
                  className="d-flex justify-content-center d-sm-block"
                >
                  {/* <Lazyload> */}
                  <img src={imageRoadMap2} alt="" />
                  {/* </Lazyload> */}
                </motion.div>
              </Col>
              <Col
                lg={{ span: 8, order: 1 }}
                xs={{ span: 12, order: 1 }}
                className="position-relative"
              >
                <motion.p
                  variants={textRoadMap}
                  initial="hidden"
                  animate={controls}
                >
                  Many projects follow nearly the same Airdrops and Bounty
                  Campaigns, and most of them put their prizes to chance in
                  return for the extraordinary efforts of their users.
                  <br /> The question that remains is, Is luck enough? Is it
                  possible to assign active users on social networks (who
                  struggle to achieve the project's goals and have continuous
                  activities) the chance to respond to their efforts? Not. We
                  will reward users who trust us and have worked to introduce us
                  to the international community beyond luck for every single
                  one of their activities, even a dollar! You can learn more
                  about this by clicking the button below
                </motion.p>
                <motion.div
                  variants={textRoadMap}
                  initial="hidden"
                  animate={controls}
                  className="btn-slide"
                >
                  <a className="btn-main" onClick={() => setModalShow(true)}>
                    Join the Winners
                    <span></span>
                  </a>
                </motion.div>
              </Col>
            </Row>
            {/* <Row className="content-slide-2-2">
              <Col lg={8}></Col>
            </Row> */}
          </Container>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </section>
    </>
  );
};

export default RoadMapStep2;
