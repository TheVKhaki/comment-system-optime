import { Container, Modal } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
//media
import elephantComingsoon from "../images/BKGR4-03.webp";
import elephantComingsoonRes from "../images/BKGR4-03-Res.webp";
import logoModalRoadMap from "../images/Fly-Ele3_For-Website.png";
import rocketgif from "../video/ON_2.mp4";
//motion
import { motion, useAnimation } from "framer-motion";
//observer
import { useInView } from "react-intersection-observer";
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
          duration: 1.5,
          scrollTrigger: {
            scroller: ".modal",
            trigger: boxModal1.current,
            start: "-230px center",
            end: "-180px center",
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
          duration: 1.5,
          scrollTrigger: {
            scroller: ".modal",
            trigger: boxModal2.current,
            start: "-250px center",
            end: "-150px center",
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
            start: "-350px center",
            end: "-250px center",
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
            start: "-350px center",
            end: "-250px center",
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
            start: "-350px center",
            end: "-250px center",
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
          height: 202,
          duration: 2,
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(224,111,31,1) 1%)",
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "-50px center",
            end: "120px center",
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
          height: 202,
          duration: 2,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "130px center",
            end: "230px center",
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
          height: 202,
          duration: 2,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "320px center",
            end: "500px center",
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
          height: 202,
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(224,111,31,1) 1%)",
          duration: 2,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "560px center",
            end: "750px center",
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
          height: 202,
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(224,111,31,1) 1%)",
          duration: 2,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "800px center",
            end: "1050px center",
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
            start: "-150px center",
            end: "-100px center",
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
            start: "100px center",
            end: "140px center",
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
            start: "230px center",
            end: "270px center",
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
            start: "500px center",
            end: "540px center",
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
            start: "750px center",
            end: "790px center",
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
            start: "1050px center",
            end: "1080px center",
            scrub: true,
          },
        }
      );
      const myEnterFunc = () => {
        rocketAnimRef.current.play();
      };
      const myLeaveFunc = () => {
        rocketAnimRef.current.currentTime = 0;
        rocketAnimRef.current.pause();
      };
      gsap.fromTo(
        document.querySelector(".roadmap-participate video"),
        {},
        {
          duration: 1,
          scrollTrigger: {
            scroller: ".modal",
            trigger: document.querySelector(".roadmap-participate"),
            start: "1070px center",
            end: "1080px center",
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
          <p>QPoker Airdrop</p>
        </div>
        <div className="content-text">
          <p>
            We are happy to announce that our Airdrop has been published on 2st
            of February 2023. We are running three campaigns with glorious
            rewards:
          </p>
          <ul>
            <li>- $12,000 USDT + NFT</li>
            <li>- $120,000 QMatic Lottery</li>
            <li>- 200-400 $QMATIC</li>
            <li>- Early Access to QPoker</li>
          </ul>
          <p>Join the Airdrop by following the steps</p>
        </div>
        <div className="roadmap-participate">
          <div className="line-modal-1" ref={lineModal1}></div>
          <div className="line-modal-2" ref={lineModal2}></div>
          <div className="line-modal-3" ref={lineModal3}></div>
          <div className="line-modal-4" ref={lineModal4}></div>
          <div className="line-modal-5" ref={lineModal5}></div>
          <svg
            className="roadmap-modal-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 149 1457.09"
          >
            <g data-name="Layer 2">
              <path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="17"
                d="M74.51 61.87L74.51 1387.47"
              ></path>
              <circle
                cx="74.51"
                cy="293.06"
                r="28.73"
                fill="#050708"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></circle>
              <circle
                cx="74.51"
                cy="817.94"
                r="28.73"
                fill="#050708"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></circle>
              <circle
                cx="74.51"
                cy="1079.8"
                r="28.73"
                fill="#050708"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></circle>
              <circle
                cx="74.51"
                cy="1382.07"
                r="64.13"
                fill="#050708"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="16"
              ></circle>
              <circle
                cx="74.51"
                cy="555.91"
                r="28.73"
                fill="#050708"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></circle>
              <path
                fill="#f9f9f9"
                d="M83 287.23a1.21 1.21 0 00-1.18-.69 2.34 2.34 0 00-.81.15c-.12 0-12 4.57-16.81 6.56a1.31 1.31 0 00-.82.73.93.93 0 00.48 1.12 45 45 0 004.5 1.49c.26.86 1.17 3.87 1.59 5.16a.84.84 0 00.87.53h.1a.41.41 0 00.29-.16.47.47 0 00.11-.26l.25-3.63 1.93 1.45c1.51 1.13 3.31 2.47 4.32 3.19a1.77 1.77 0 001 .39 1.39 1.39 0 001.28-1.16c.84-3.24 2.06-9.38 2.79-13.05l.16-.8a1.55 1.55 0 00-.05-1.02zm-12.28 10.12l-.23 3.22c-.55-1.75-1.35-4.44-1.36-4.47l9.26-6a4.92 4.92 0 01.87-.49c.32-.07.4.06.34.14a15.57 15.57 0 01-1.28 1.22l-7.4 6.03a.44.44 0 00-.2.35zM87.47 811.39a3.42 3.42 0 00-2.39-2.39c-2.11-.57-10.57-.57-10.57-.57s-8.46 0-10.56.57a3.43 3.43 0 00-2.4 2.41 38.59 38.59 0 000 13.1A3.42 3.42 0 0064 826.9c2.1.57 10.56.57 10.56.57s8.46 0 10.57-.57a3.4 3.4 0 002.39-2.41 38.59 38.59 0 000-13.1zM71.75 822v-8l7.06 4z"
              ></path>
              <path
                fill="#fdb017"
                d="M70.35 1076.25a8.28 8.28 0 003.74.7 8.37 8.37 0 003.73-.7 1.52 1.52 0 00.87-1.38c-.23-2.61-.91-3.27-2.11-4.19l-.19-.16a3 3 0 00.77-2 3.07 3.07 0 10-6.14 0 3 3 0 00.77 2l-.2.16c-1.19.92-1.88 1.58-2.11 4.26a1.53 1.53 0 00.87 1.31zm6.8-1.39a3.69 3.69 0 01-1.57.46l-1.07-2.84.65-1 .48.38c.91.73 1.36 1.06 1.51 3zm-3.06-7.86a1.54 1.54 0 11-1.54 1.53 1.54 1.54 0 011.54-1.53zm-1.56 4.91l.49-.38.64 1-1.07 2.84a3.63 3.63 0 01-1.56-.46c.18-2 .6-2.32 1.5-3.02zM68.91 1083.72l-.19-.15a3.07 3.07 0 10-4.61 0l-.19.15c-1.2.93-1.88 1.58-2.11 4.26a1.49 1.49 0 00.87 1.31 8.24 8.24 0 003.73.7 8.25 8.25 0 003.74-.7 1.53 1.53 0 00.87-1.37c-.23-2.62-.92-3.27-2.11-4.2zm-2.5-3.7a1.54 1.54 0 11-1.53 1.54 1.54 1.54 0 011.53-1.56zm-1.55 4.91l.48-.38.65 1-1.07 2.84a3.8 3.8 0 01-1.57-.45c.19-1.94.65-2.31 1.51-3.01zm3 3.43l-1.07-2.84.65-1 .48.38c.91.71 1.33 1 1.51 3a3.74 3.74 0 01-1.52.46zM84.25 1083.72l-.19-.15a3.07 3.07 0 10-4.6 0l-.2.15c-1.19.93-1.88 1.58-2.1 4.26a1.49 1.49 0 00.87 1.31 10.29 10.29 0 007.46 0 1.51 1.51 0 00.87-1.37c-.22-2.62-.91-3.27-2.11-4.2zm-2.49-3.7a1.54 1.54 0 11-1.53 1.54 1.53 1.53 0 011.53-1.56zm-1.55 4.91l.48-.38.64 1-1.07 2.84a3.73 3.73 0 01-1.56-.45c.18-1.94.61-2.31 1.51-3.01zm3.05 3.43l-1.07-2.84.64-1 .48.38c.91.71 1.33 1 1.51 3a3.68 3.68 0 01-1.56.46zM77.92 1081.56a.76.76 0 00-.76-.77h-2.31v-2.3a.77.77 0 10-1.53 0v2.3H71a.77.77 0 100 1.53h6.14a.76.76 0 00.78-.76z"
              ></path>
              <path
                fill="#f9f9f9"
                fillRule="evenodd"
                d="M70.15 561a4.56 4.56 0 01-4.24-3.16 4.42 4.42 0 002-.06h.07a4.56 4.56 0 01-3-2.09 4.36 4.36 0 01-.67-2.42 4.53 4.53 0 002 .55 4.58 4.58 0 01-1.39-6.06 13.05 13.05 0 009.4 4.76 5 5 0 01-.07-.5A4.54 4.54 0 0178 547a4.46 4.46 0 014 1.27.22.22 0 00.24.07 9.25 9.25 0 002.65-1h.06a4.62 4.62 0 01-1.95 2.38 8.93 8.93 0 002.54-.68c-.18.23-.34.46-.53.68a8.83 8.83 0 01-1.65 1.58.15.15 0 00-.08.14 12.37 12.37 0 01-.08 2 13.35 13.35 0 01-1.18 4.06 13 13 0 01-2.46 3.59 12.22 12.22 0 01-6.26 3.49 13.55 13.55 0 01-2.54.3 12.78 12.78 0 01-7.29-2l-.11-.07a9.18 9.18 0 004.56-.62 9.34 9.34 0 002.23-1.19z"
              ></path>
              <circle
                cx="74.51"
                cy="33.14"
                r="28.73"
                fill="#050708"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></circle>
              <path
                fill="#f9f9f9"
                d="M78 30.62a11.45 11.45 0 01-1 .92l-5.58 4.62a.4.4 0 00-.16.25l-.16 2.44c-.43-1.31-1-3.36-1-3.39l7-4.56a3.68 3.68 0 01.65-.37c.25-.07.32.03.25.09z"
              ></path>
              <path
                fill="#f9f9f9"
                d="M64.52 26.43v15a1.79 1.79 0 001.78 1.79h16.39a1.79 1.79 0 001.79-1.79v-15zm16.14 3.1l-.12.62c-.54 2.77-1.48 7.41-2.12 9.85a1 1 0 01-1 .88 1.34 1.34 0 01-.77-.3c-.77-.55-2.13-1.57-3.27-2.42-.59-.44-1.11-.82-1.46-1.1l-.2 2.75a.24.24 0 01-.08.2.31.31 0 01-.22.11h-.08a.66.66 0 01-.66-.39c-.32-1-1-3.26-1.19-3.9-.59-.18-2.5-.74-3.41-1.14a.72.72 0 01-.37-.85 1 1 0 01.62-.55C70 31.81 79 28.39 79.1 28.35a1.84 1.84 0 01.6-.11.91.91 0 01.89.52 1.11 1.11 0 01.07.77z"
              ></path>
              <rect
                width="4.88"
                height="13.96"
                x="58.56"
                y="25.8"
                fill="#f9f9f9"
                rx="2.44"
              ></rect>
              <rect
                width="4.88"
                height="13.96"
                x="85.86"
                y="25.8"
                fill="#f9f9f9"
                rx="2.44"
              ></rect>
              <path
                fill="#f9f9f9"
                d="M78.59 51a2.44 2.44 0 01-2.44-2.44V43c0-1.35.44-1.79 1.79-1.79l.54-.07c1.35 0 2.55.51 2.55 1.86v5.5a2.44 2.44 0 01-2.44 2.5z"
              ></path>
              <rect
                width="4.88"
                height="10.38"
                x="68.32"
                y="40.57"
                fill="#f9f9f9"
                rx="2.44"
              ></rect>
              <path
                fill="#f9f9f9"
                d="M74.48 15.33a9.88 9.88 0 00-9.88 9.89h19.78a9.89 9.89 0 00-9.9-9.89zm-5 6.52a1.06 1.06 0 111.06-1.06 1.06 1.06 0 01-1.04 1.06zm9.68 0a1.06 1.06 0 010-2.12 1.06 1.06 0 010 2.12z"
              ></path>
            </g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149 1457.09">
            <g fill="none" stroke="#e06f1f" data-name="Layer 2">
              <circle
                className="circle-modal-svg-1"
                cx="74.5"
                cy="33.14"
                r="28.73"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></circle>
              <circle
                className="circle-modal-svg-2"
                cx="74.09"
                cy="293.06"
                r="28.73"
                transform="rotate(-86 74.99 293)"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></circle>
              <circle
                className="circle-modal-svg-4"
                cx="74.84"
                cy="817.9"
                r="28.73"
                transform="rotate(-89.08 74.84 817.903)"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></circle>
              <circle
                className="circle-modal-svg-5"
                cx="74.44"
                cy="1079.8"
                r="28.73"
                transform="rotate(-3.36 74.595 1080.853)"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></circle>
              <circle
                className="circle-modal-svg-6"
                cx="74.5"
                cy="1382.07"
                r="64.13"
                strokeMiterlimit="10"
                strokeWidth="14"
              ></circle>
              <circle
                className="circle-modal-svg-3"
                cx="74.14"
                cy="555.98"
                r="28.73"
                transform="rotate(-3.36 74.277 556.526)"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></circle>
            </g>
          </svg>
          <div className="box-twitter box-roadmap" ref={boxModal1}>
            <h3>Telegram Bot</h3>
            <p>
              1️⃣ Join in our Airdrop channel <br />
              <a href="https://t.me/qpoker_giveaways_bot">
                https://t.me/qpoker_giveaways_bot
              </a>
            </p>
          </div>
          <div className="box-twitter-1 box-roadmap" ref={boxModal2}>
            <h3>Telegram Community</h3>
            <p>2️⃣ Join our Telegram group & Telegram channel</p>
          </div>
          <div className="box-telegram box-roadmap" ref={boxModal3}>
            <h3>Twitter</h3>
            <p>3️⃣ Follow QPoker on Twitter</p>
          </div>
          <div className="box-qpoker box-roadmap" ref={boxModal4}>
            <h3>Youtube</h3>
            <p>
              4️⃣ Subscribe our Youtube channel <br />
              <span>🎉 Congratulations, you have earned 200 $QMATIC ($5)</span>
            </p>
          </div>
          <div className="box-youtube box-roadmap" ref={boxModal5}>
            <h3>Refer-a-Friend</h3>
            <p>
              Invite your friends to join our Airdrop and earn extra rewards:
              💰 $120,000 QMatic(NFT) and $12,000 USDT + NFT campaigns
            </p>
          </div>
          <div className="box-roadmap-2">
            <div className="link-box-roadmap-2">
              <a href="https://t.me/qpoker_giveaways_bot" target="_blank">
                Join the Airdrop
              </a>
            </div>
          </div>
          <a
            href="https://t.me/qpoker_giveaways_bot"
            className="link-gif-to-telegram"
            target="_blank"
          >
            <video muted loop ref={rocketAnimRef}>
              <source src={rocketgif} type="video/mp4" />
            </video>
          </a>
        </div>
      </Modal.Body>
    </Modal>
  );
}
const RoadMapStep4 = () => {
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    if (modalShow) {
      document.querySelector("html").style.overflowY = "hidden";
    } else {
      document.querySelector("html").style.overflowY = "visible";
    }
  }, [modalShow]);

  const controls = useAnimation();
  const [element, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  //variant animation
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
  const textComingSoon = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  //Countdown
  const [endCount, setEndCount] = useState(false);
  const calculateTimeLeft = () => {
    let endEvent = new Date("2023-03-02");
    let nowDate = new Date();
    let monthData = endEvent.getUTCMonth();
    let dayData = endEvent.getUTCDate();
    let yearData = endEvent.getUTCFullYear();
    let difference =
      +new Date(Date.UTC(yearData, monthData, dayData)) -
      +new Date(
        Date.UTC(
          nowDate.getUTCFullYear(),
          nowDate.getUTCMonth(),
          nowDate.getUTCDate(),
          nowDate.getUTCHours(),
          nowDate.getUTCMinutes(),
          nowDate.getUTCSeconds()
        )
      );
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    if (!timeLeft) {
      clearTimeout(timer);
      setEndCount(true);
    } else {
      setEndCount(false);
    }
    return () => clearTimeout(timer);
  });
  const btnComingSoon = useRef();
  const textBtnComingSoon = useRef();
  useEffect(() => {
    btnComingSoon.current.addEventListener("mouseover", function (params) {
      textBtnComingSoon.current.innerHTML = "Coming Soon";
    });
    btnComingSoon.current.addEventListener("mouseout", function (params) {
      textBtnComingSoon.current.innerHTML = "Join the Rewards";
    });
    btnComingSoon.current.addEventListener("click", function (params) {
      textBtnComingSoon.current.innerHTML = "Coming Soon";
    });
  }, []);

  return (
    <>
      <section className="roadmap-step4 roadmap" ref={element} id="airdrop">
        <Container>
          <div className="img-elephant-comingsoon">
            <Lazyload>
              <img src={elephantComingsoon} alt="" width={500} height={600} />
              <img src={elephantComingsoonRes} alt="" />
            </Lazyload>
          </div>
          <motion.div
            className="coming-soon"
            variants={textComingSoon}
            initial="hidden"
            animate={controls}
          >
            <motion.div className="header-comingsoon">
              <h2>
                <span style={{ color: "#e28001" }}>Q</span>Poker Airdrop
              </h2>
              <p>02.02.2023 - 02.03.2023</p>
            </motion.div>
            {!endCount && (
              <motion.div className="countdown">
                <div className="countdown-number">
                  <div className="time-number">
                    {timeLeft.days} <span>Days</span>
                  </div>
                  <div className="time-number">
                    {timeLeft.hours} <span>Hours</span>
                  </div>
                  <div className="time-number">
                    {timeLeft.minutes} <span>Minutes</span>
                  </div>
                  <div className="time-number">
                    {timeLeft.seconds} <span>Seconds</span>
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div className="coming-soon-text">
              <motion.p>400 $QMATIC + Early Access</motion.p>
              <motion.p>$12,000 (USDT + NFT) for 100 Winners</motion.p>
              <motion.p>$120,000 NFT Lottery for 1800 Winners</motion.p>

              <a
                className="btn-coming-soon btn-main"
                onClick={() => setModalShow(true)}
                ref={btnComingSoon}
                target="_blank"
              >
                <p>Join the Airdrop</p>
                <span aria-hidden="true"></span>
              </a>
            </motion.div>
          </motion.div>
        </Container>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </section>
    </>
  );
};

export default RoadMapStep4;
