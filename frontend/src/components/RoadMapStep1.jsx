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

//Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//custom hook
import useWindowSize from "../custom hook/ResizeEvent";

const RoadMap = () => {
  const [width, height] = useWindowSize();
  const [element, inView] = useInView({ threshold: 1, triggerOnce: true });
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const roadMapStep1 = useRef(null);
  useEffect(() => {
    // const sectionHeight = roadMapStep1.current.clientHeight;
    // console.log(sectionHeight);
    // gsap.registerPlugin(ScrollTrigger);
    // if (width > 992) {
    //   ScrollTrigger.enable();
    //   gsap.fromTo(
    //     roadMapStep1.current,
    //     { opacity: 1, scale: 1 },
    //     {
    //       opacity: 0,
    //       scale: 0.5,
    //       scrollTrigger: {
    //         trigger: roadMapStep1.current,
    //         start: "center center",
    //         end: "bottom center",
    //         scrub: true,
    //       },
    //     }
    //   );
    //   console.log("if");
    // } else {
    //   ScrollTrigger.disable();
    //   gsap.fromTo(
    //     roadMapStep1.current,
    //     { opacity: 1, scale: 1 },
    //     {
    //       opacity: 1,
    //       scale: 1,
    //       scrollTrigger: {
    //         trigger: roadMapStep1.current,
    //         start: "center center",
    //         end: "bottom center",
    //         scrub: true,
    //       },
    //     }
    //   );
    //   console.log("else");
    // }
  }, [width]);

  useEffect(() => {
    if (inView) {
      controls1.start("visible");
    }
  }, [[controls1, inView]]);

  //Swiper
  function SlideChangeRoadMap(params) {
    if (params === 1) {
      controls2.start("visible");
    }
    if (params === 2) {
      controls3.start("visible");
    }
  }

  return (
    <>
      <section className="roadmap-step1 roadmap" ref={element}>
        <div ref={roadMapStep1}>
          <Container>
            <div className="header-roadmap">
              <h2>RoadMap</h2>
              <p>
                Step1 <br />
                gathering social medias and developing requirment
              </p>
            </div>
            <div className="roadmap-date roadmap-date-1">
              <p>
                2022 <br />
                feb-mar
              </p>
            </div>
            <Row className="content-slide-1-1">
              <Col lg={3}>
                <div className="img-slide-roadmap-1">
                  <img src={imageRoadMap11} alt="" />
                </div>
              </Col>
              <Col lg={9}>
                <div className="text-roadmap-1">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
                    unde sequi! Est voluptatum nam aspernatur minus expedita
                    ipsum laudantium saepe, fuga iste officiis eaque velit atque
                    distinctio nihil quidem consequuntur vel quas nostrum,
                    reiciendis necessitatibus?
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="content-slide-1-2">
              <Col
                lg={{ order: "first", span: 9 }}
                xs={{ order: "last", span: 12 }}
              >
                <div className="text-roadmap-2">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
                    unde sequi! Est voluptatum nam aspernatur minus expedita
                    ipsum laudantium saepe, fuga iste officiis eaque velit atque
                    distinctio nihil quidem consequuntur vel quas nostrum,
                    reiciendis necessitatibus?
                  </p>
                </div>
              </Col>
              <Col
                lg={{ order: "last", span: 3 }}
                xs={{ order: "first", span: 12 }}
              >
                <div className="img-slide-roadmap-1 img-slide-roadmap-1-2">
                  <img src={imageRoadMap12} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default RoadMap;
