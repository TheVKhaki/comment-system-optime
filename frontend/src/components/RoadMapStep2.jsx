import { useEffect, useState, useCallback } from "react";
import { useRef } from "react";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
//Media
import imageRoadMap2 from "../images/AIR.png";
import logoModalRoadMap from "../images/03-03 13.png";
import roadMapParticipate from "../images/RMMBS2.svg";
//RandomReveal
import { RandomReveal } from "react-random-reveal";
//observer
import { useInView } from "react-intersection-observer";
//Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//Framer motion
import { motion, useAnimation } from "framer-motion";
//custom hook
import useWindowSize from "../custom hook/ResizeEvent";
function MyVerticallyCenteredModal(props) {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const [element, inView] = useInView({ threshold: 0.9, triggerOnce: true });
  const [element2, inView2] = useInView({ threshold: 0.9, triggerOnce: true });
  const [element3, inView3] = useInView({ threshold: 0.9, triggerOnce: true });
  const [element4, inView4] = useInView({ threshold: 0.9, triggerOnce: true });
  const [element5, inView5] = useInView({ threshold: 0.9, triggerOnce: true });
  const [element6, inView6] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (inView2) {
      controls2.start("visible");
    }
    if (inView3) {
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
  }, [controls, inView, inView2, inView3, inView4, inView5, inView6]);

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
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="roadmap2-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="logo-header">
          <img src={logoModalRoadMap} alt="" />
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
        <div className="roadmap-participate">
          <img src={roadMapParticipate} alt="" />
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
              <motion.path
                variants={itemPath}
                initial="hidden"
                animate={controls5}
                strokeLinejoin="round"
                strokeWidth="20"
                d="M72.13 1342L72.13 1712"
              ></motion.path>
              <motion.path
                variants={itemPath}
                initial="hidden"
                animate={controls4}
                strokeLinejoin="round"
                strokeWidth="20"
                d="M72.13 1018L72.13 1282.48"
              ></motion.path>
              <motion.path
                variants={itemPath}
                initial="hidden"
                animate={controls3}
                strokeLinejoin="round"
                strokeWidth="20"
                d="M72.13 673L72.13 957"
              ></motion.path>
              <motion.path
                variants={itemPath}
                initial="hidden"
                animate={controls2}
                strokeLinejoin="round"
                strokeWidth="20"
                d="M72.13 359.11L72.13 614"
              ></motion.path>
              <motion.path
                variants={itemPath}
                initial="hidden"
                animate={controls}
                strokeLinejoin="round"
                strokeWidth="20"
                d="M72.13 70.46L72.13 297"
              ></motion.path>
              <motion.circle
                variants={itemOpacity}
                initial="hidden"
                animate={controls}
                r="28.73"
                strokeMiterlimit="10"
                strokeWidth="8"
                cy="40"
                cx="72.13"
              ></motion.circle>
              <motion.circle
                variants={itemOpacity}
                initial="hidden"
                animate={controls2}
                r="28.73"
                strokeMiterlimit="10"
                strokeWidth="8"
                transform="rotate(-88.09 68.096 336.673)"
                cy="340"
                cx="77"
              ></motion.circle>
              <motion.circle
                variants={itemOpacity}
                initial="hidden"
                animate={controls4}
                r="28.73"
                strokeMiterlimit="10"
                strokeWidth="8"
                transform="rotate(-89.08 68.137 1015.924)"
                cy="1019.81"
                cx="96"
              ></motion.circle>
              <motion.circle
                variants={itemOpacity}
                initial="hidden"
                animate={controls5}
                r="28.73"
                strokeMiterlimit="10"
                strokeWidth="8"
                transform="rotate(-1.68 -271.741 1434.755)"
                cx="75.5"
                cy="1323"
              ></motion.circle>
              <motion.circle
                variants={itemOpacity}
                initial="hidden"
                animate={controls6}
                cx="72.13"
                r="64.13"
                strokeMiterlimit="10"
                strokeWidth="16"
                cy="1783"
              ></motion.circle>
              <motion.circle
                variants={itemOpacity}
                initial="hidden"
                animate={controls3}
                r="28.73"
                strokeMiterlimit="10"
                strokeWidth="8"
                transform="rotate(-1.68 -271.802 740.967)"
                cx="74.5"
                cy="653"
              ></motion.circle>
            </g>
          </svg>
          <div className="box-twitter box-roadmap" ref={element}>
            <h3>Twitter Give Away</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              commodo ligula in
            </p>
          </div>
          <div className="box-twitter-1 box-roadmap" ref={element2}>
            <h3>Twitter Give Away</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              commodo ligula in
            </p>
          </div>
          <div className="box-telegram box-roadmap" ref={element3}>
            <h3>Twitter Give Away</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              commodo ligula in
            </p>
          </div>
          <div className="box-qpoker box-roadmap" ref={element4}>
            <h3>Twitter Give Away</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              commodo ligula in
            </p>
          </div>
          <div className="box-youtube box-roadmap" ref={element5}>
            <h3>Twitter Give Away</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              commodo ligula in
            </p>
          </div>
          <div className="box-roadmap-2" ref={element6}>
            <h3>Twitter Give Away</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              perspiciatis perferendis laboriosam magni corporis facilis
              voluptates quasi laborum quia suscipit corrupti reprehenderit
              velit eius autem tempora, itaque, amet iure. Consequatur iusto
              voluptates corporis ea atque perferendis qui eum reiciendis
              nostrum?
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const RoadMapStep2 = () => {
  const [width, height] = useWindowSize();
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
                <RandomReveal
                  isPlaying={inView}
                  duration={0.5}
                  revealDuration={0.5}
                  characters="Step2"
                />
                <br />
                <RandomReveal
                  isPlaying={inView}
                  duration={0.5}
                  revealDuration={0.5}
                  characters="Air Drops and Bounty Campagins"
                />
              </p>
            </div>
            <Row className="content-slide-2-1">
              <Col lg={4}>
                <motion.img
                  variants={imgRoadMap1}
                  initial="hidden"
                  animate={controls}
                  src={imageRoadMap2}
                  alt=""
                />
              </Col>
              <Col lg={8}>
                <motion.p
                  variants={textRoadMap}
                  initial="hidden"
                  animate={controls}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Impedit aliquid id laborum maiores temporibus harum, ea
                  corrupti deserunt voluptatum exercitationem. Quis maiores
                  reprehenderit, unde voluptatum, at molestiae sapiente aut
                  dignissimos perspiciatis tempora incidunt aspernatur eligendi
                  debitis quos recusandae itaque veritatis!
                </motion.p>
              </Col>
            </Row>
            <Row className="content-slide-2-2">
              <Col lg={4}>
                <div className="roadmap-date roadmap-date-2">
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
              <Col lg={8}>
                <motion.div
                  variants={textRoadMap}
                  initial="hidden"
                  animate={controls}
                  className="btn-slide"
                >
                  <a onClick={() => setModalShow(true)}>
                    How to be Participate
                  </a>
                </motion.div>
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

export default RoadMapStep2;
