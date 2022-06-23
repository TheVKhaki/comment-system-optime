import { useEffect, useState } from "react";
import { useRef } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
//Media
import imageRoadMap2 from "../images/2ND_FRG.png";
import logoModalRoadMap from "../images/Logo_Newcode Color-16.png";
import roadMapParticipate from "../images/RMMBS2.svg";
import rocketgif from "../video/OFF TO ONN_2.mp4";
//RandomReveal
import { RandomReveal } from "react-random-reveal";
//observer
import { useInView } from "react-intersection-observer";
//Framer motion
import { motion, useAnimation } from "framer-motion";
//lazyload
import { LazyLoadImage } from "react-lazy-load-image-component";
import Lazyload from "../HOC/Lazyload";
//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function MyVerticallyCenteredModal(props) {
  gsap.registerPlugin(ScrollTrigger);
  // const [animationComplete, setAnimationComplete] = useState({
  //   animation1: "hidden",
  //   animation2: "hidden",
  //   animation3: "hidden",
  //   animation4: "hidden",
  //   animation5: "hidden",
  // });
  // const controls = useAnimation();
  // const controls2 = useAnimation();
  // const controls3 = useAnimation();
  // const controls4 = useAnimation();
  // const controls5 = useAnimation();
  // const controls6 = useAnimation();
  // const [element, inView] = useInView({ threshold: 0.9, triggerOnce: true });
  // const [element2, inView2] = useInView({ threshold: 0.9, triggerOnce: true });
  // const [element3, inView3] = useInView({ threshold: 0.9, triggerOnce: true });
  // const [element4, inView4] = useInView({ threshold: 0.9, triggerOnce: true });
  // const [element5, inView5] = useInView({ threshold: 0.9, triggerOnce: true });
  // const [element6, inView6] = useInView({ threshold: 0.2, triggerOnce: true });
  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   }
  //   if (inView2) {
  //     controls2.start("visible");
  //   }
  //   if (inView3) {
  //     controls3.start("visible");
  //   }
  //   if (inView4) {
  //     controls4.start("visible");
  //   }
  //   if (inView5) {
  //     controls5.start("visible");
  //   }
  //   if (inView6) {
  //     controls6.start("visible");
  //   }
  // }, [controls, inView, inView2, inView3, inView4, inView5, inView6]);

  // const itemPath = {
  //   hidden: {
  //     pathLength: 0,
  //   },
  //   visible: {
  //     pathLength: 1,
  //     transition: {
  //       duration: 1,
  //       delay: 0.3,
  //     },
  //   },
  // };
  // const itemOpacity = {
  //   hidden: {
  //     opacity: 0,
  //   },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       duration: 1,
  //     },
  //   },
  // };
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
        },
        {
          height: 239,
          duration: 2,
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
        },
        {
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
        },
        {
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
        },
        {
          height: 277,
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
        },
        {
          height: 387,
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
      // gsap.fromTo(
      //   document.querySelector(".roadmap-participate video"),
      //   {
      //     currentTime: 0,
      //   },
      //   {
      //     currentTime: 0,

      //     duration: 1,
      //     scrollTrigger: {
      //       scroller: ".modal",
      //       trigger: document.querySelector(".roadmap-participate"),
      //       start: "1500px center",
      //       end: "1510px center",
      //       scrub: true,
      //     },
      //   }
      // );
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
            start: "1520px center",
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

          <LazyLoadImage src={roadMapParticipate} />
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
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  //variant animation
  const imgRoadMap1 = {
    hidden: {
      opacity: 0,
      x: -100,
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

  return (
    <>
      <section className="roadmap-step2 roadmap" ref={element}>
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
              <Col lg={{ span: 4, order: 1 }} xs={{ span: 12, order: 2 }}>
                <motion.div
                  variants={imgRoadMap1}
                  initial="hidden"
                  animate={controls}
                  className="d-flex justify-content-center d-sm-block"
                >
                  <Lazyload>
                    <img src={imageRoadMap2} alt="" />
                  </Lazyload>
                </motion.div>
              </Col>
              <Col
                lg={{ span: 8, order: 2 }}
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
