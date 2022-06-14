import { useEffect } from "react";
//Bootstrap
import { Col, Container, Row } from "react-bootstrap";
//framer motion
import { motion, useAnimation } from "framer-motion";
//observer
import { useInView } from "react-intersection-observer";
//Media
import imageRoadMap11 from "../images/Roadmap-step-1.png";
//RandomReveal
import { RandomReveal } from "react-random-reveal";
//Icon
import { IconContext } from "react-icons";
import { FaCheck, FaHourglassHalf } from "react-icons/fa";
//lazyload
import { LazyLoadImage } from "react-lazy-load-image-component";
const RoadMap = () => {
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
  const imgRoadMap2 = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 1.5,
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
  const textRoadMap2 = {
    hidden: {
      opacity: 0,
      y: 70,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1.5,
      },
    },
  };
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
                characters="2019-2022 Q12"
              />
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
            <Col lg={4}>
              <motion.div
                variants={imgRoadMap1}
                initial="hidden"
                animate={controls}
                className="img-slide-roadmap-1"
              >
                <LazyLoadImage src={imageRoadMap11} />
              </motion.div>
            </Col>
            <Col lg={8} className="d-flex align-items-center">
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
                <ul>
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
                      <li>Innovation and formation of the rulebook</li>
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
                      <li>Writing of the white paper (at the final stage)</li>
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
                      <li>
                        Designing of the game structure and visual outlook
                      </li>
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
                      <li>
                        Build of social media robots for bounty campaigns{" "}
                      </li>
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
                      <li>
                        Programming of the game software’s alpha version
                        (debugging stage)
                      </li>
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
                      <li>Tutorized game demonstration video</li>
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
                      <li>Development of the website (front-end & back-end)</li>
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
                      <li>Manuscript and production of a meme teaser</li>
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
                      <li>
                        Market research and creation of a feasibility study
                      </li>
                    </Col>
                  </Row>
                </ul>
              </motion.div>
            </Col>
          </Row>
          {/* <Row className="content-slide-1-2">
            <Col
              lg={{ order: "first", span: 9 }}
              xs={{ order: "last", span: 12 }}
            >
              <motion.div
                variants={textRoadMap2}
                initial="hidden"
                animate={controls}
                className="text-roadmap-2"
              >
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
                  unde sequi! Est voluptatum nam aspernatur minus expedita ipsum
                  laudantium saepe, fuga iste officiis eaque velit atque
                  distinctio nihil quidem consequuntur vel quas nostrum,
                  reiciendis necessitatibus?
                </p>
              </motion.div>
            </Col>
            <Col
              lg={{ order: "last", span: 3 }}
              xs={{ order: "first", span: 12 }}
            >
              <motion.div
                variants={imgRoadMap2}
                initial="hidden"
                animate={controls}
                className="img-slide-roadmap-1 img-slide-roadmap-1-2"
              >
                <LazyLoadImage src={imageRoadMap12} />
              </motion.div>
            </Col>
          </Row> */}
        </Container>
      </section>
    </>
  );
};

export default RoadMap;
