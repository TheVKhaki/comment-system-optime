import { useEffect, useRef, useState } from "react";
//Bootstrap
import { Col, Container, Row, Modal } from "react-bootstrap";
//Media
import imageRoadMap3 from "../images/ICO.png";
import logoModalMore from "../images/logoModalMore.png";
import modalCMC from "../images/modalCMC.png";
import roadMapCMC from "../images/RMMBS3.svg";
//Framer motion
import { motion, useAnimation } from "framer-motion";
//RandomReveal
import { RandomReveal } from "react-random-reveal";
//observer
import { useInView } from "react-intersection-observer";
import Lazyload from "../HOC/Lazyload";
//Modal Component
function MyVerticallyCenteredModal(props) {
  const [animationComplete, setAnimationComplete] = useState({
    animation1: "hidden",
    animation2: "hidden",
  });
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const [element, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [element2, inView2] = useInView({
    threshold: 0.9,
    triggerOnce: true,
    rootMargin: "-180px",
  });
  const [element3, inView3] = useInView({
    threshold: 0.9,
    triggerOnce: true,
    rootMargin: "-120px",
  });
  const [element4, inView4] = useInView({ threshold: 0.2, triggerOnce: true });
  const [element5, inView5] = useInView({ threshold: 0.2, triggerOnce: true });
  const [element6, inView6] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (inView2 && animationComplete.animation1 === "visible") {
      controls2.start("visible");
    }
    if (inView3 && animationComplete.animation2 === "visible") {
      controls3.start("visible");
    }
    if (inView4) {
      controls4.start("visible");
    }
    if (inView5) {
      controls5.start("visible");
    }
    if (inView6) {
      controls6.start("visible");
    }
  }, [
    controls,
    inView,
    inView2,
    inView3,
    inView4,
    inView5,
    inView6,
    animationComplete,
  ]);

  const itemPath = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
  };
  const itemPath2 = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1,
        delay: 1.3,
      },
    },
  };
  const itemOpacity = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const itemOpacity2 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  const boxAnim = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="roadmap3-modal"
    >
      <Modal.Header closeButton closeVariant="white"></Modal.Header>
      <Modal.Body>
        <div className="logo-header">
          <img src={logoModalMore} alt="" />
          <p>Air Drops and Give aways</p>
        </div>
        <div className="content-text">
          <p>
            In gravida elit lorem, id efficitur arcu vehicula eget. Fusce id
            nunc suscipit, iaculis ipsum tincidunt, molestie nisl. Sed tempor,
            est ut bibendum ultricies, enim libero finibus mauris, ac auctor
            nibh ligula sed nisl. Curabitur rutrum in ex eget lobortis. Fusce
            fringilla felis id interdum venenatis. Nullam eu nibh sit amet massa
            molestie viverra sit amet dapibus augue. Phasellus ut ante eget ex
            imperdiet finibus. Fusce eleifend mattis diam, nec tempus turpis
            volutpat et. Aenean varius scelerisque nulla, a dictum purus aliquet
            sit amet. Duis vestibulum mauris sed lorem fringilla, non tempus
            magna vestibulum. Morbi ac dolor nec lorem sagittis consequat
            aliquet vel augue. Quisque consequat magna quis fermentum feugiat.
            Phasellus quis velit non mi tincidunt faucibus. Donec eu tortor eu
            dui commodo placerat nec eget enim. Curabitur eget feugiat risus.
            Nullam laoreet mauris ut rutrum pellentesque. In ac finibus velit.
            Fusce pulvinar congue diam, a fringilla sapien. Aenean dolor felis,
            rutrum eleifend neque id, lacinia blandit neque. Phasellus aliquet
            sem tortor, sed ornare quam aliquet ac. Cras mattis volutpat dui,
            non congue metus dignissim nec. Nam pellentesque nulla vel dignissim
            tincidunt. In eu dolor finibus, facilisis massa ut, rhoncus leo.
            Praesent convallis sem eu elit laoreet consectetur. Pellentesque
            interdum laoreet arcu eu fermentum. Phasellus facilisis sapien a
            dictum mattis.
          </p>
        </div>
        <div className="image-CMC">
          <img src={modalCMC} alt="" />
        </div>
        <div className="roadmap-CMC">
          <motion.div
            variants={boxAnim}
            initial="hidden"
            animate={controls4}
            className="box-detail-1"
            ref={element4}
          >
            <div className="box-detail">
              <p>
                In gravida elit lorem, id efficitur arcu vehicula eget. Fusce id
                nunc suscipit, iaculis ipsum tincidunt, molestie nisl. Sed
                tempor, est ut bibendum ultricies, enim libero finibus mauris,
                ac auctor nibh ligula sed nisl. Curabitur rutrum .
              </p>
            </div>
          </motion.div>
          <div className="image-roadmap-CMC">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 861 932"
            >
              <motion.path
                variants={itemPath}
                initial="hidden"
                animate={controls3}
                fill="none"
                stroke="#e06f1f"
                strokeMiterlimit="10"
                strokeWidth="30"
                d="M85.23 890.67L782.9 890.67"
              ></motion.path>
              <motion.path
                variants={itemPath2}
                initial="hidden"
                animate={controls2}
                onAnimationComplete={(definition) => {
                  setAnimationComplete({
                    ...animationComplete,
                    animation2: definition,
                  });
                }}
                fill="none"
                stroke="#e06f1f"
                strokeMiterlimit="10"
                strokeWidth="30"
                d="M49.17 392.59L49.17 854.62"
              ></motion.path>
              <motion.path
                variants={itemPath}
                initial="hidden"
                animate={controls2}
                fill="none"
                stroke="#e06f1f"
                strokeMiterlimit="10"
                strokeWidth="30"
                d="M782.9 356.54L85.23 356.54"
              ></motion.path>
              <motion.path
                variants={itemPath2}
                initial="hidden"
                animate={controls}
                onAnimationComplete={(definition) => {
                  setAnimationComplete({
                    ...animationComplete,
                    animation1: definition,
                  });
                }}
                fill="none"
                stroke="#e06f1f"
                strokeMiterlimit="10"
                strokeWidth="30"
                d="M818.95 77.98L818.95 320.49"
              ></motion.path>
              <motion.path
                variants={itemPath}
                initial="hidden"
                animate={controls}
                fill="none"
                stroke="#e06f1f"
                strokeMiterlimit="10"
                strokeWidth="30"
                d="M85.23 41.93L782.9 41.93"
              ></motion.path>
              <motion.circle
                variants={itemOpacity}
                initial="hidden"
                animate={controls3}
                cx="49.17"
                cy="890.67"
                r="36.05"
                fill="none"
                stroke="#e06f1f"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></motion.circle>
              <motion.circle
                variants={itemOpacity2}
                initial="hidden"
                animate={controls3}
                cx="818.95"
                cy="890.67"
                r="36.05"
                fill="none"
                stroke="#e06f1f"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></motion.circle>
              <motion.circle
                variants={itemOpacity2}
                initial="hidden"
                animate={controls2}
                cx="49.17"
                cy="356.54"
                r="36.05"
                fill="none"
                stroke="#e06f1f"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></motion.circle>
              <motion.circle
                variants={itemOpacity}
                initial="hidden"
                animate={controls2}
                cx="818.95"
                cy="356.54"
                r="36.05"
                fill="none"
                stroke="#e06f1f"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></motion.circle>
              <motion.circle
                variants={itemOpacity}
                initial="hidden"
                animate={controls}
                cx="49.17"
                cy="41.93"
                r="36.05"
                fill="none"
                stroke="#e06f1f"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></motion.circle>
              <motion.circle
                variants={itemOpacity2}
                initial="hidden"
                animate={controls}
                cx="818.95"
                cy="41.93"
                r="36.05"
                fill="none"
                stroke="#e06f1f"
                strokeMiterlimit="10"
                strokeWidth="8"
              ></motion.circle>
            </svg>
            <img src={roadMapCMC} alt="" />
            <motion.div
              variants={boxAnim}
              initial="hidden"
              animate={controls5}
              className="box-detail-2"
              ref={element}
            >
              <div className="box-detail" ref={element2}>
                <p ref={element5}>
                  In gravida elit lorem, id efficitur arcu vehicula eget. Fusce
                  id nunc suscipit, iaculis ipsum tincidunt, molestie nisl. Sed
                  tempor, est ut bibendum ultricies, enim libero finibus mauris,
                  ac auctor nibh ligula sed nisl. Curabitur rutrum .
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={boxAnim}
              initial="hidden"
              animate={controls6}
              className="box-detail-3"
              ref={element3}
            >
              <div className="box-detail" ref={element6}>
                <p>
                  In gravida elit lorem, id efficitur arcu vehicula eget. Fusce
                  id nunc suscipit, iaculis ipsum tincidunt, molestie nisl. Sed
                  tempor, est ut bibendum ultricies, enim libero finibus mauris,
                  ac auctor nibh ligula sed nisl. Curabitur rutrum .In gravida
                  elit lorem, id efficitur arcu vehicula eget. Fusce id nunc
                  suscipit, iaculis ipsum tincidunt, molestie nisl. Sed tempor,
                  est ut bibendum ultricies, enim libero finibus mauris, ac
                  auctor nibh ligula sed nisl. Curabitur rutrum .
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const RoadMapStep3 = () => {
  const [modalShow, setModalShow] = useState(false);
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
      <section className="roadmap-step3 roadmap" ref={element}>
        <div ref={roadMapStep3}>
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
                <RandomReveal
                  isPlaying={inView}
                  duration={0.5}
                  revealDuration={0.5}
                  characters="Step3"
                />
                <br />
                <RandomReveal
                  isPlaying={inView}
                  duration={0.5}
                  revealDuration={0.5}
                  characters="IGOs and ICOs"
                />
              </p>
            </div>
            <Row className="content-slide-3">
              <Col lg={4}>
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
              <Col lg={8}>
                <motion.p
                  variants={textRoadMap}
                  initial="hidden"
                  animate={controls}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Totam culpa autem, minus explicabo blanditiis ex modi
                  architecto commodi consequatur. Quia earum architecto ipsum
                  veritatis sed. Dolorum aperiam eaque excepturi saepe? Quaerat
                  optio aut ipsum alias amet aliquid non excepturi praesentium
                  ea impedit architecto temporibus magni sapiente sed rerum eum
                  accusantium esse hic earum, odio dolores distinctio. Facere
                  assumenda libero, voluptatum excepturi, veritatis dignissimos
                  et sit commodi illum minus soluta, esse consectetur numquam
                  nobis eaque deleniti?
                </motion.p>
                <Row>
                  <Col lg={6} xs={12}>
                    <div className="roadmap-date roadmap-date-3">
                      <p>
                        <RandomReveal
                          isPlaying={inView}
                          duration={0.5}
                          revealDuration={0.5}
                          characters="2022"
                        />
                        <br />
                        <RandomReveal
                          isPlaying={inView}
                          duration={0.5}
                          revealDuration={0.5}
                          characters="feb-mar"
                        />
                      </p>
                    </div>
                  </Col>
                  <Col lg={6} xs={12} className="d-flex justify-content-center">
                    <motion.div
                      variants={textRoadMap}
                      initial="hidden"
                      animate={controls}
                      className="btn-slide btn-slide-3"
                    >
                      <a onClick={() => setModalShow(true)}>More InforMation</a>
                    </motion.div>
                  </Col>
                </Row>
              </Col>
            </Row>
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

export default RoadMapStep3;
