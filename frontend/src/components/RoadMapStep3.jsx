import { useEffect, useRef } from "react";
//Bootstrap
import { Col, Container, Row } from "react-bootstrap";
//Media
import imageRoadMap3 from "../images/3RD_FRG.webp";
// import logoModalMore from "../images/logoModalMore.png";
// import modalCMC from "../images/modalCMC.png";
// import roadMapCMC from "../images/RMMBS3.svg";
//Framer motion
import { motion, useAnimation } from "framer-motion";
//RandomReveal
import { RandomReveal } from "react-random-reveal";
//observer
import { useInView } from "react-intersection-observer";
import Lazyload from "../HOC/Lazyload";

//gsap
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
//Modal Component
// function MyVerticallyCenteredModal(props) {
//   gsap.registerPlugin(ScrollTrigger);
//   // const [animationComplete, setAnimationComplete] = useState({
//   //   animation1: "hidden",
//   //   animation2: "hidden",
//   // });
//   // const controls = useAnimation();
//   // const controls2 = useAnimation();
//   // const controls3 = useAnimation();
//   // const controls4 = useAnimation();
//   // const controls5 = useAnimation();
//   // const controls6 = useAnimation();
//   // const [element, inView] = useInView({ threshold: 0.1, triggerOnce: true });
//   // const [element2, inView2] = useInView({
//   //   threshold: 0.9,
//   //   triggerOnce: true,
//   //   rootMargin: "-180px",
//   // });
//   // const [element3, inView3] = useInView({
//   //   threshold: 0.9,
//   //   triggerOnce: true,
//   //   rootMargin: "-120px",
//   // });
//   // const [element4, inView4] = useInView({ threshold: 0.2, triggerOnce: true });
//   // const [element5, inView5] = useInView({ threshold: 0.2, triggerOnce: true });
//   // const [element6, inView6] = useInView({ threshold: 0.2, triggerOnce: true });
//   // useEffect(() => {
//   //   if (inView) {
//   //     controls.start("visible");
//   //   }
//   //   if (inView2) {
//   //     controls2.start("visible");
//   //   }
//   //   if (inView3) {
//   //     controls3.start("visible");
//   //   }
//   //   if (inView4) {
//   //     controls4.start("visible");
//   //   }
//   //   if (inView5) {
//   //     controls5.start("visible");
//   //   }
//   //   if (inView6) {
//   //     controls6.start("visible");
//   //   }
//   // }, [controls, inView, inView2, inView3, inView4, inView5, inView6]);

//   const itemPath = {
//     hidden: {
//       pathLength: 0,
//     },
//     visible: {
//       pathLength: 1,
//       transition: {
//         duration: 1,
//         delay: 0.3,
//       },
//     },
//   };
//   const itemPath2 = {
//     hidden: {
//       pathLength: 0,
//     },
//     visible: {
//       pathLength: 1,
//       transition: {
//         duration: 1,
//         delay: 1.3,
//       },
//     },
//   };
//   const itemOpacity = {
//     hidden: {
//       opacity: 0,
//     },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 1,
//       },
//     },
//   };

//   const itemOpacity2 = {
//     hidden: {
//       opacity: 0,
//     },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 1,
//         delay: 1,
//       },
//     },
//   };

//   const boxAnim = {
//     hidden: {
//       y: 50,
//       opacity: 0,
//     },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 1,
//       },
//     },
//   };

//   const lineModal1 = useRef();
//   const lineModal2 = useRef();
//   const lineModal3 = useRef();
//   const lineModal4 = useRef();
//   const lineModal5 = useRef();
//   useEffect(() => {
//     // const element = lineModal1.current;
//     if (props.show) {
//       setTimeout(() => {
//         gsap.fromTo(
//           lineModal1.current,
//           {
//             width: 0,
//           },
//           {
//             width: 628,
//             duration: 2,
//             scrollTrigger: {
//               scroller: ".roadmap3-scroller",
//               trigger: document.querySelector(".image-roadmap-CMC"),
//               start: "top center",
//               end: "50px center",
//               scrub: true,
//             },
//           }
//         );
//         gsap.fromTo(
//           lineModal2.current,
//           {
//             height: 0,
//           },
//           {
//             height: 223,
//             duration: 2,
//             scrollTrigger: {
//               scroller: ".roadmap3-scroller",
//               trigger: document.querySelector(".image-roadmap-CMC"),
//               start: "50px center",
//               end: "230px center",
//               scrub: true,
//             },
//           }
//         );
//         gsap.fromTo(
//           lineModal3.current,
//           {
//             width: 0,
//           },
//           {
//             width: 628,
//             duration: 2,
//             scrollTrigger: {
//               scroller: ".roadmap3-scroller",
//               trigger: document.querySelector(".image-roadmap-CMC"),
//               start: "250px center",
//               end: "300px center",
//               scrub: true,
//             },
//           }
//         );
//         gsap.fromTo(
//           lineModal4.current,
//           {
//             height: 0,
//           },
//           {
//             height: 416,
//             duration: 2,
//             scrollTrigger: {
//               scroller: ".roadmap3-scroller",
//               trigger: document.querySelector(".image-roadmap-CMC"),
//               start: "310px center",
//               end: "350px center",
//               scrub: true,
//             },
//           }
//         );
//         gsap.fromTo(
//           lineModal5.current,
//           {
//             width: 0,
//           },
//           {
//             width: 628,
//             duration: 2,
//             scrollTrigger: {
//               scroller: ".roadmap3-scroller",
//               trigger: document.querySelector(".image-roadmap-CMC"),
//               start: "350px center",
//               end: "380px center",
//               scrub: true,
//             },
//           }
//         );
//         gsap.fromTo(
//           document.querySelector(".image-roadmap-CMC .circle-modal-svg-1"),
//           {
//             opacity: 0,
//           },
//           {
//             opacity: 1,
//             duration: 1,
//             scrollTrigger: {
//               scroller: ".roadmap3-scroller",
//               trigger: document.querySelector(".image-roadmap-CMC"),
//               start: "-30px center",
//               end: "top center",
//               scrub: true,
//             },
//           }
//         );
//         gsap.fromTo(
//           document.querySelector(".image-roadmap-CMC .circle-modal-svg-2"),
//           {
//             opacity: 0,
//           },
//           {
//             opacity: 1,
//             duration: 1,
//             scrollTrigger: {
//               scroller: ".roadmap3-scroller",
//               trigger: document.querySelector(".image-roadmap-CMC"),
//               start: "40px center",
//               end: "50px center",
//               scrub: true,
//             },
//           }
//         );
//         gsap.fromTo(
//           document.querySelector(".image-roadmap-CMC .circle-modal-svg-3"),
//           {
//             opacity: 0,
//           },
//           {
//             opacity: 1,
//             duration: 1,
//             scrollTrigger: {
//               scroller: ".roadmap3-scroller",
//               trigger: document.querySelector(".image-roadmap-CMC"),
//               start: "210px center",
//               end: "220px center",
//               scrub: true,
//             },
//           }
//         );
//         gsap.fromTo(
//           document.querySelector(".image-roadmap-CMC .circle-modal-svg-4"),
//           {
//             opacity: 0,
//           },
//           {
//             opacity: 1,
//             duration: 1,
//             scrollTrigger: {
//               scroller: ".roadmap3-scroller",
//               trigger: document.querySelector(".image-roadmap-CMC"),
//               start: "300px center",
//               end: "310px center",
//               scrub: true,
//             },
//           }
//         );
//         gsap.fromTo(
//           document.querySelector(".image-roadmap-CMC .circle-modal-svg-5"),
//           {
//             opacity: 0,
//           },
//           {
//             opacity: 1,
//             duration: 1,
//             scrollTrigger: {
//               scroller: ".roadmap3-scroller",
//               trigger: document.querySelector(".image-roadmap-CMC"),
//               start: "350px center",
//               end: "360px center",
//               scrub: true,
//             },
//           }
//         );
//         gsap.fromTo(
//           document.querySelector(".image-roadmap-CMC .circle-modal-svg-6"),
//           {
//             opacity: 0,
//           },
//           {
//             opacity: 1,
//             duration: 1,
//             scrollTrigger: {
//               scroller: ".roadmap3-scroller",
//               trigger: document.querySelector(".image-roadmap-CMC"),
//               start: "380px center",
//               end: "390px center",
//               scrub: true,
//             },
//           }
//         );
//       }, 400);
//     }
//   }, [props.show]);

//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       contentClassName="roadmap3-modal"
//       className="roadmap3-scroller"
//     >
//       <Modal.Header closeButton closeVariant="white"></Modal.Header>
//       <Modal.Body>
//         <div className="logo-header">
//           <img src={logoModalMore} alt="" />
//           <p>Air Drops and Give aways</p>
//         </div>
//         <div className="content-text">
//           <p>
//             In gravida elit lorem, id efficitur arcu vehicula eget. Fusce id
//             nunc suscipit, iaculis ipsum tincidunt, molestie nisl. Sed tempor,
//             est ut bibendum ultricies, enim libero finibus mauris, ac auctor
//             nibh ligula sed nisl. Curabitur rutrum in ex eget lobortis. Fusce
//             fringilla felis id interdum venenatis. Nullam eu nibh sit amet massa
//             molestie viverra sit amet dapibus augue. Phasellus ut ante eget ex
//             imperdiet finibus. Fusce eleifend mattis diam, nec tempus turpis
//             volutpat et. Aenean varius scelerisque nulla, a dictum purus aliquet
//             sit amet. Duis vestibulum mauris sed lorem fringilla, non tempus
//             magna vestibulum. Morbi ac dolor nec lorem sagittis consequat
//             aliquet vel augue. Quisque consequat magna quis fermentum feugiat.
//             Phasellus quis velit non mi tincidunt faucibus. Donec eu tortor eu
//             dui commodo placerat nec eget enim. Curabitur eget feugiat risus.
//             Nullam laoreet mauris ut rutrum pellentesque. In ac finibus velit.
//             Fusce pulvinar congue diam, a fringilla sapien. Aenean dolor felis,
//             rutrum eleifend neque id, lacinia blandit neque. Phasellus aliquet
//             sem tortor, sed ornare quam aliquet ac. Cras mattis volutpat dui,
//             non congue metus dignissim nec. Nam pellentesque nulla vel dignissim
//             tincidunt. In eu dolor finibus, facilisis massa ut, rhoncus leo.
//             Praesent convallis sem eu elit laoreet consectetur. Pellentesque
//             interdum laoreet arcu eu fermentum. Phasellus facilisis sapien a
//             dictum mattis.
//           </p>
//         </div>
//         <div className="image-CMC">
//           <img src={modalCMC} alt="" />
//         </div>
//         <div className="roadmap-CMC">
//           <motion.div
//             // variants={boxAnim}
//             initial="hidden"
//             // animate={controls4}
//             className="box-detail-1"
//             // ref={element4}
//           >
//             <div className="box-detail">
//               <p>
//                 In gravida elit lorem, id efficitur arcu vehicula eget. Fusce id
//                 nunc suscipit, iaculis ipsum tincidunt, molestie nisl. Sed
//                 tempor, est ut bibendum ultricies, enim libero finibus mauris,
//                 ac auctor nibh ligula sed nisl. Curabitur rutrum .
//               </p>
//             </div>
//           </motion.div>
//           <div className="image-roadmap-CMC">
//             <div className="line-modal-1" ref={lineModal1}></div>
//             <div className="line-modal-2" ref={lineModal2}></div>
//             <div className="line-modal-3" ref={lineModal3}></div>
//             <div className="line-modal-4" ref={lineModal4}></div>
//             <div className="line-modal-5" ref={lineModal5}></div>

//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               data-name="Layer 1"
//               viewBox="0 0 861 932"
//             >
//               {/* <motion.path
//                 variants={itemPath}
//                 initial="hidden"
//                 animate={controls3}
//                 fill="none"
//                 stroke="#e06f1f"
//                 strokeMiterlimit="10"
//                 strokeWidth="30"
//                 d="M85.23 890.67L782.9 890.67"
//               ></motion.path>
//               <motion.path
//                 variants={itemPath2}
//                 initial="hidden"
//                 animate={controls2}
//                 onAnimationComplete={(definition) => {
//                   setAnimationComplete({
//                     ...animationComplete,
//                     animation2: definition,
//                   });
//                 }}
//                 fill="none"
//                 stroke="#e06f1f"
//                 strokeMiterlimit="10"
//                 strokeWidth="30"
//                 d="M49.17 392.59L49.17 854.62"
//               ></motion.path>
//               <motion.path
//                 variants={itemPath}
//                 initial="hidden"
//                 animate={controls2}
//                 fill="none"
//                 stroke="#e06f1f"
//                 strokeMiterlimit="10"
//                 strokeWidth="30"
//                 d="M782.9 356.54L85.23 356.54"
//               ></motion.path>
//               <motion.path
//                 variants={itemPath2}
//                 initial="hidden"
//                 animate={controls}
//                 onAnimationComplete={(definition) => {
//                   setAnimationComplete({
//                     ...animationComplete,
//                     animation1: definition,
//                   });
//                 }}
//                 fill="none"
//                 stroke="#e06f1f"
//                 strokeMiterlimit="10"
//                 strokeWidth="30"
//                 d="M818.95 77.98L818.95 320.49"
//               ></motion.path>
//               <motion.path
//                 variants={itemPath}
//                 initial="hidden"
//                 animate={controls}
//                 fill="none"
//                 stroke="#e06f1f"
//                 strokeMiterlimit="10"
//                 strokeWidth="30"
//                 d="M85.23 41.93L782.9 41.93"
//               ></motion.path> */}
//               <circle
//                 cx="49.17"
//                 cy="890.67"
//                 r="36.05"
//                 fill="none"
//                 stroke="#e06f1f"
//                 strokeMiterlimit="10"
//                 strokeWidth="8"
//                 className="circle-modal-svg-5"
//               ></circle>
//               <circle
//                 cx="818.95"
//                 cy="890.67"
//                 r="36.05"
//                 fill="none"
//                 stroke="#e06f1f"
//                 strokeMiterlimit="10"
//                 strokeWidth="8"
//                 className="circle-modal-svg-6"
//               ></circle>
//               <circle
//                 cx="49.17"
//                 cy="356.54"
//                 r="36.05"
//                 fill="none"
//                 stroke="#e06f1f"
//                 strokeMiterlimit="10"
//                 strokeWidth="8"
//                 className="circle-modal-svg-4"
//               ></circle>
//               <circle
//                 cx="818.95"
//                 cy="356.54"
//                 r="36.05"
//                 fill="none"
//                 stroke="#e06f1f"
//                 strokeMiterlimit="10"
//                 strokeWidth="8"
//                 className="circle-modal-svg-3"
//               ></circle>
//               <circle
//                 cx="49.17"
//                 cy="41.93"
//                 r="36.05"
//                 fill="none"
//                 stroke="#e06f1f"
//                 strokeMiterlimit="10"
//                 strokeWidth="8"
//                 className="circle-modal-svg-1"
//               ></circle>
//               <circle
//                 cx="818.95"
//                 cy="41.93"
//                 r="36.05"
//                 fill="none"
//                 stroke="#e06f1f"
//                 strokeMiterlimit="10"
//                 strokeWidth="8"
//                 className="circle-modal-svg-2"
//               ></circle>
//             </svg>
//             <img src={roadMapCMC} alt="" />
//             <motion.div initial="hidden" className="box-detail-2">
//               <div className="box-detail">
//                 <p>
//                   In gravida elit lorem, id efficitur arcu vehicula eget. Fusce
//                   id nunc suscipit, iaculis ipsum tincidunt, molestie nisl. Sed
//                   tempor, est ut bibendum ultricies, enim libero finibus mauris,
//                   ac auctor nibh ligula sed nisl. Curabitur rutrum .
//                 </p>
//               </div>
//             </motion.div>
//             <motion.div className="box-detail-3">
//               <div className="box-detail">
//                 <p>
//                   In gravida elit lorem, id efficitur arcu vehicula eget. Fusce
//                   id nunc suscipit, iaculis ipsum tincidunt, molestie nisl. Sed
//                   tempor, est ut bibendum ultricies, enim libero finibus mauris,
//                   ac auctor nibh ligula sed nisl. Curabitur rutrum .In gravida
//                   elit lorem, id efficitur arcu vehicula eget. Fusce id nunc
//                   suscipit, iaculis ipsum tincidunt, molestie nisl. Sed tempor,
//                   est ut bibendum ultricies, enim libero finibus mauris, ac
//                   auctor nibh ligula sed nisl. Curabitur rutrum .
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// }

const RoadMapStep3 = () => {
  // const [modalShow, setModalShow] = useState(false);
  const roadMapStep3 = useRef(null);
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
      <section className="roadmap-step3 roadmap" ref={element} id="roadmap-3">
        <div ref={roadMapStep3}>
          <Container>
            <div className="header-roadmap">
              <h2>
                <RandomReveal
                  isPlaying={inView}
                  duration={0.5}
                  revealDuration={0.5}
                  characters="Vision of QPoker"
                />
              </h2>
              <p>
                {/* <RandomReveal
                  isPlaying={inView}
                  duration={0.5}
                  revealDuration={0.5}
                  characters="Step3"
                />
                <br /> */}
                <RandomReveal
                  isPlaying={inView}
                  duration={0.5}
                  revealDuration={0.5}
                  characters="Trendsetter of iGaming"
                />
              </p>
            </div>
            <Row className="content-slide-3">
              <Col
                xl={4}
                lg={{ span: 5, order: 1 }}
                xs={{ span: 12, order: 2 }}
              >
                <Lazyload>
                  <motion.img
                    variants={imgRoadMap1}
                    initial="hidden"
                    animate={controls}
                    src={imageRoadMap3}
                    alt=""
                  />
                </Lazyload>
              </Col>
              <Col
                xl={8}
                lg={{ span: 7, order: 2 }}
                xs={{ span: 12, order: 1 }}
                className="position-relative"
              >
                <motion.p
                  variants={textRoadMap}
                  initial="hidden"
                  animate={controls}
                >
                  All immaterial rights of QPoker’s rulebook and structure are
                  owned by QPoker Ltd. It means none of the world’s other
                  gambling providers is allowed to start offering QPoker without
                  our authorization and annual license fees (millions of dollars
                  per year). We own the same waterproof copyrights as Monopoly
                  and Trivial Pursuit possess to their games. <br /> Our only,
                  realistic, and achievable goal is to become a sovereign leader
                  of global iGaming markets. We will break Pandora’s box by
                  starting to offer skill-based social games as real money
                  versions, all run by a P2P decentralized platform. Up to this
                  date, all casinos have been ruthlessly exploiting players by
                  offering only luck-based brainless products which do provide
                  neither social amusement nor a chance of winning. Fortunately,
                  this will change irreversibly as QPoker launches the new Web3
                  era of fair and inspirational iGaming.
                </motion.p>
                <Row>
                  <Col className="d-flex justify-content-center">
                    <motion.div
                      variants={textRoadMap}
                      initial="hidden"
                      animate={controls}
                      className="btn-slide btn-slide-3"
                    >
                      <a
                        target="_blank"
                        className="btn-main"
                        href="/docs/qpoker-lightpaper-v1.0.1.pdf"
                      >
                        Litepaper
                        <span aria-hidden="true"></span>
                      </a>
                    </motion.div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        /> */}
      </section>
    </>
  );
};

export default RoadMapStep3;
