import { useEffect, useRef } from "react";
//Bootstrap
import { Col, Container, Row } from "react-bootstrap";
//framer motion
import { motion, useAnimation } from "framer-motion";
//observer
import { useInView } from "react-intersection-observer";
//Media
import imageRoadMap11 from "../images/1ST_FRG.png";
//RandomReveal
import { RandomReveal } from "react-random-reveal";
//Icon
import { IconContext } from "react-icons";
import { FaCheck, FaHourglassHalf } from "react-icons/fa";
//react responsive
import { useMediaQuery } from "react-responsive";
const RoadMap = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 992px)" });
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
      x: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };
  const textRoadMap1 = {
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
    if (!isTabletOrMobile) {
      const imagePerspective = document.querySelector(
        ".img-slide-roadmap-1 img"
      );
      const sectionInPerspective = document.querySelector(".roadmap-step1");
      sectionInPerspective.addEventListener("mousemove", function (e) {
        const position = (e.clientX / window.innerWidth) * 30 + "px";
        const positionY = (e.clientY / window.innerHeight) * 20 + "px";
        imagePerspective.style.transform = `translate(${position},${positionY})`;
      });
    }
  }, [isTabletOrMobile]);

  return (
    <>
      <section className="roadmap-step1 roadmap" ref={element} id="roadmap">
        <Container>
          <motion.div className="header-roadmap">
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
                characters="2019-2022 Q"
              />
              <sub>12</sub>
            </p>
            <p>
              <RandomReveal
                isPlaying={inView}
                duration={0.5}
                revealDuration={0.5}
                characters="Invention, development and introduction of QPoker"
              />
            </p>
          </motion.div>
          <Row className="content-slide-1-1">
            <Col
              lg={{ span: 4, order: 1 }}
              xs={{ span: 12, order: 2 }}
              className="d-flex justify-content-center"
            >
              <motion.div
                variants={imgRoadMap1}
                initial="hidden"
                animate={controls}
                className="img-slide-roadmap-1"
              >
                <img src={imageRoadMap11} alt="" />
              </motion.div>
            </Col>
            <Col
              lg={{ span: 8, order: 2 }}
              xs={{ span: 12, order: 1 }}
              className="d-flex align-items-center"
            >
              <motion.div
                variants={textRoadMap1}
                initial="hidden"
                animate={controls}
                className="text-roadmap-1"
              >
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque repellat amet quis quidem? Provident quasi minus
                  suscipit temporibus hic saepe rem nemo adipisci, dolorem
                  officiis quos doloremque unde numquam alias?
                </p> */}

                <Row>
                  <Col lg={6}>
                    <IconContext.Provider
                      value={{
                        color: "#e28001",
                        size: "2rem",
                      }}
                    >
                      <span>
                        <FaCheck />
                      </span>
                    </IconContext.Provider>
                    <span>Innovation and formation of the rulebook</span>
                  </Col>
                  <Col lg={6}>
                    <IconContext.Provider
                      value={{
                        color: "#e28001",
                        size: "2rem",
                      }}
                    >
                      <span>
                        <FaCheck />
                      </span>
                    </IconContext.Provider>
                    <span>Manuscript and production of promotion videos</span>
                  </Col>

                  <Col lg={6}>
                    <IconContext.Provider
                      value={{
                        color: "#e28001",
                        size: "2rem",
                      }}
                    >
                      <span>
                        <FaCheck />
                      </span>
                    </IconContext.Provider>
                    <span>
                      Designing of the game structure and visual outlook
                    </span>
                  </Col>
                  <Col lg={6}>
                    <IconContext.Provider
                      value={{
                        color: "#e28001",
                        size: "2rem",
                      }}
                    >
                      <span>
                        <FaCheck />
                      </span>
                    </IconContext.Provider>
                    <span>Tutorized game demonstration video</span>
                  </Col>
                  <Col lg={6}>
                    <IconContext.Provider
                      value={{
                        color: "#e28001",
                        size: "2rem",
                      }}
                    >
                      <span>
                        <FaHourglassHalf />
                      </span>
                    </IconContext.Provider>
                    <span>
                      Programming of the game software’s alpha version
                      (debugging stage)
                    </span>
                  </Col>
                  <Col lg={6}>
                    <IconContext.Provider
                      value={{
                        color: "#e28001",
                        size: "2rem",
                      }}
                    >
                      <span>
                        <FaHourglassHalf />
                      </span>
                    </IconContext.Provider>
                    <span>Publishing of the white paper</span>
                  </Col>
                  <Col lg={6}>
                    <IconContext.Provider
                      value={{
                        color: "#e28001",
                        size: "2rem",
                      }}
                    >
                      <span>
                        <FaCheck />
                      </span>
                    </IconContext.Provider>
                    <span>
                      Development of the website (front-end & back-end)
                    </span>
                  </Col>
                  <Col lg={6}>
                    <IconContext.Provider
                      value={{
                        color: "#e28001",
                        size: "2rem",
                      }}
                    >
                      <span>
                        <FaCheck />
                      </span>
                    </IconContext.Provider>
                    <span>
                      Build of the social media robots for bounty campaigns{" "}
                    </span>
                  </Col>

                  <Col lg={6}>
                    <IconContext.Provider
                      value={{
                        color: "#e28001",
                        size: "2rem",
                      }}
                    >
                      <span>
                        <FaCheck />
                      </span>
                    </IconContext.Provider>
                    <span>
                      Market research and creation of a feasibility study
                    </span>
                  </Col>
                </Row>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RoadMap;
