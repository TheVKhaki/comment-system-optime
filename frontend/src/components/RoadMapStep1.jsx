import { useEffect, useState, useRef } from "react";
//Bootstrap
import { Col, Container, Row } from "react-bootstrap";
//framer motion
import { motion, useAnimation } from "framer-motion";
//observer
import { useInView } from "react-intersection-observer";
//Media
import imageRoadMap11 from "../images/PRO.png";
import imageRoadMap12 from "../images/ART.png";
//RandomReveal
import { RandomReveal } from "react-random-reveal";
//Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//custom hook
import useWindowSize from "../custom hook/ResizeEvent";

const RoadMap = () => {
  const [width, height] = useWindowSize();
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
      <section className="roadmap-step1 roadmap" ref={element}>
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
                characters="Step1"
              />
            </p>
            <p>
              <RandomReveal
                isPlaying={inView}
                duration={0.5}
                revealDuration={0.5}
                characters="gathering social medias and developing requirment"
              />
            </p>
          </motion.div>
          <div className="roadmap-date roadmap-date-1">
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
          <Row className="content-slide-1-1">
            <Col lg={3}>
              <motion.div
                variants={imgRoadMap1}
                initial="hidden"
                animate={controls}
                className="img-slide-roadmap-1"
              >
                <img src={imageRoadMap11} alt="" />
              </motion.div>
            </Col>
            <Col lg={9}>
              <motion.div
                variants={textRoadMap1}
                initial="hidden"
                animate={controls}
                className="text-roadmap-1"
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
          </Row>
          <Row className="content-slide-1-2">
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
                <img src={imageRoadMap12} alt="" />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RoadMap;
