import { useEffect, useState } from "react";
import { useRef } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
//Media
import imageRoadMap2 from "../images/2ND_FRG.webp";
//RandomReveal
import { RandomReveal } from "react-random-reveal";
//observer
import { useInView } from "react-intersection-observer";
//Framer motion
import { motion, useAnimation } from "framer-motion";

//react responsive
import { useMediaQuery } from "react-responsive";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-demo-game"
    >
      <Modal.Header closeButton closeVariant="white"></Modal.Header>
      <Modal.Body>
        <iframe
          width="1264"
          height="711"
          src="https://www.youtube.com/embed/hf9fCwwnefo"
          title="QPoker-Trendsetter of GameFI 2.0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Modal.Body>
    </Modal>
  );
}

const RoadMapStep2 = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 992px)" });
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
  useEffect(() => {
    if (!isTabletOrMobile) {
      const imagePerspective = document.querySelector(".content-slide-2-1 img");
      const sectionInPerspective = document.querySelector(".roadmap-step2");
      sectionInPerspective.addEventListener("mousemove", function (e) {
        const position = (e.clientX / window.innerWidth) * 30 + "px";
        const positionY = (e.clientY / window.innerHeight) * 20 + "px";
        imagePerspective.style.transform = `translate(${position},${positionY})`;
      });
    }
  }, [isTabletOrMobile]);

  return (
    <>
      <section className="roadmap-step2 roadmap" ref={element} id="roadmap-2">
        <div ref={roadMapStep2}>
          <Container>
            <div className="header-roadmap">
              <motion.h2
                variants={textFadeIn}
                initial="hidden"
                animate={controls}
              >
                ©QPoker Ltd.
              </motion.h2>
              <motion.p
                variants={textFadeIn}
                initial="hidden"
                animate={controls}
              >
                New Rulebook, New Game
              </motion.p>
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
                  <img src={imageRoadMap2} alt="" width={858} height={1089} />
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
                  All immaterial rights of QPoker’s rulebook and structure are
                  owned by QPoker Ltd. Hereby none of the competing gambling
                  operators are allowed to start offering games based on
                  QPoker's rulebook or its features without our given
                  authorization to QPoker license.
                  <br />
                  We own the same waterproof copyrights as Monopoly and Trivial
                  Pursuit possess to their games. This guarantees years lasting
                  growth momentum for $QMATIC price, as the player traffic
                  increases while $QMATIC minting rate stays low.
                </motion.p>
                <motion.div
                  variants={textRoadMap}
                  initial="hidden"
                  animate={controls}
                  className="btn-slide"
                >
                  <a className="btn-main" onClick={() => setModalShow(true)}>
                    Watch Game Demo
                    <span aria-hidden="true"></span>
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
