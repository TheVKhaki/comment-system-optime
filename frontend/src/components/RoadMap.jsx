import { useEffect, useState } from "react";

// Import Swiper React components
import { Pagination, Mousewheel } from "swiper";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//Bootstrap
import { Col, Container, Row } from "react-bootstrap";
//framer motion
import { motion, useAnimation } from "framer-motion";
//observer
import { useInView } from "react-intersection-observer";
//Media
import imageRoadMap11 from "../images/PRO.png";
import imageRoadMap12 from "../images/ART.png";
import imageRoadMap2 from "../images/AIR.png";
import imageRoadMap3 from "../images/ICO.png";
const RoadMap = () => {
  const [element, inView] = useInView({ threshold: 1, triggerOnce: true });
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  useEffect(() => {
    if (inView) {
      controls3.start("visible");
    }
  }, [[controls3, inView]]);

  //Swiper
  function SlideChangeRoadMap(params) {
    if (params === 1) {
      controls1.start("visible");
    }
    if (params === 2) {
      controls2.start("visible");
    }
  }
  //Variants
  const svg1 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const item1 = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const svg12 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delayChildren: 3.7,
      },
    },
  };

  const item12 = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const svg2 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delayChildren: 0.5,
      },
    },
  };

  const item2 = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const svg22 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delayChildren: 3.7,
      },
    },
  };

  const item22 = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const svg32 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delayChildren: 5.5,
      },
    },
  };

  const item32 = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1,
      },
    },
  };
  //Countdown
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`05/01/${year}`) - +new Date();
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
    return () => clearTimeout(timer);
  });

  return (
    <>
      <section className="roadmap" ref={element}>
        <Swiper
          modules={[Pagination, Mousewheel]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          mousewheel={true}
          onSlideChange={(index) => {
            SlideChangeRoadMap(index.snapIndex);
          }}
        >
          <SwiperSlide>
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
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      A, unde sequi! Est voluptatum nam aspernatur minus
                      expedita ipsum laudantium saepe, fuga iste officiis eaque
                      velit atque distinctio nihil quidem consequuntur vel quas
                      nostrum, reiciendis necessitatibus?
                    </p>
                  </div>
                </Col>
                <div className="roadmap-line-1-1">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="411"
                    height="102"
                    fill="none"
                    viewBox="0 0 411 102"
                    variants={svg1}
                    initial="hidden"
                    animate={controls3}
                  >
                    <motion.path
                      stroke="#E28225"
                      strokeWidth="2.5"
                      d="M1.25 4.003L1.25 101.003"
                      variants={item1}
                      initial="hidden"
                      animate={controls3}
                    ></motion.path>
                    <motion.path
                      stroke="#E28225"
                      strokeWidth="2.5"
                      d="M0 99.752L280 99.752"
                      variants={item1}
                      initial="hidden"
                      animate={controls3}
                    ></motion.path>
                    <motion.path
                      stroke="#E28225"
                      strokeWidth="2.5"
                      d="M278.252 101.005L278.252 1"
                      variants={item1}
                      initial="hidden"
                      animate={controls3}
                    ></motion.path>
                    <motion.path
                      stroke="#E28225"
                      strokeWidth="2.5"
                      d="M278 1.752L411 1.752"
                      variants={item1}
                      initial="hidden"
                      animate={controls3}
                    ></motion.path>
                  </motion.svg>
                </div>
              </Row>
              <Row className="content-slide-1-2">
                <Col lg={9}>
                  <div className="text-roadmap-2">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      A, unde sequi! Est voluptatum nam aspernatur minus
                      expedita ipsum laudantium saepe, fuga iste officiis eaque
                      velit atque distinctio nihil quidem consequuntur vel quas
                      nostrum, reiciendis necessitatibus?
                    </p>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="img-slide-roadmap-1">
                    <img src={imageRoadMap12} alt="" />
                  </div>
                </Col>
                <div className="roadmap-line-1-2">
                  <motion.svg
                    width="650"
                    height="91"
                    viewBox="0 0 650 91"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    variants={svg12}
                    initial="hidden"
                    animate={controls3}
                  >
                    <motion.line
                      y1="1.75"
                      x2="650"
                      y2="1.75"
                      stroke="#E28225"
                      strokeWidth="2.5"
                      variants={item12}
                      initial="hidden"
                      animate={controls3}
                    />
                    <motion.line
                      x1="326.25"
                      y1="3"
                      x2="326.25"
                      y2="90.0058"
                      stroke="#E28225"
                      strokeWidth="2.5"
                      variants={item12}
                      initial="hidden"
                      animate={controls3}
                    />
                  </motion.svg>
                </div>
              </Row>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container>
              <div className="header-roadmap">
                <h2>RoadMap</h2>
                <p>
                  Step2 <br />
                  Air Drops and Bounty Campagins
                </p>
              </div>
              <Row className="content-slide-2-1">
                <Col lg={4}>
                  <img src={imageRoadMap2} alt="" />
                </Col>
                <Col lg={8}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Impedit aliquid id laborum maiores temporibus harum, ea
                    corrupti deserunt voluptatum exercitationem. Quis maiores
                    reprehenderit, unde voluptatum, at molestiae sapiente aut
                    dignissimos perspiciatis tempora incidunt aspernatur
                    eligendi debitis quos recusandae itaque veritatis!
                  </p>
                </Col>
                <div className="roadmap-line-2-1">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="312"
                    height="246"
                    fill="none"
                    viewBox="0 0 312 246"
                    variants={svg2}
                    initial="hidden"
                    animate={controls1}
                  >
                    <motion.path
                      stroke="#E28225"
                      strokeWidth="2.5"
                      d="M82 44.75L163 44.75"
                      variants={item2}
                    ></motion.path>

                    <motion.path
                      stroke="#E28225"
                      strokeWidth="2.5"
                      d="M162.25 44L162.25 246"
                      variants={item2}
                    ></motion.path>
                    <motion.path
                      stroke="#E28225"
                      strokeWidth="2.5"
                      d="M163 244.75L312 244.75"
                      variants={item2}
                    ></motion.path>
                  </motion.svg>
                </div>
                <div className="roadmap-line-2-2">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1152"
                    height="362"
                    fill="none"
                    viewBox="0 0 1152 362"
                    variants={svg22}
                    initial="hidden"
                    animate={controls1}
                  >
                    <motion.path
                      stroke="#E28225"
                      strokeWidth="2.5"
                      d="M0 359.875L149.5 359.875"
                      variants={item22}
                    ></motion.path>
                    <motion.path
                      stroke="#E28225"
                      strokeWidth="2.5"
                      d="M150.75 361L150.75 1"
                      variants={item22}
                    ></motion.path>
                    <motion.path
                      stroke="#E28225"
                      strokeWidth="2.5"
                      d="M152 1.967h1000"
                      variants={item22}
                    ></motion.path>
                  </motion.svg>
                </div>
              </Row>
              <Row className="content-slide-2-2">
                <Col lg={4}>
                  <div className="roadmap-date roadmap-date-2">
                    <p>
                      2022 <br />
                      feb-mar
                    </p>
                  </div>
                </Col>
                <Col lg={8}>
                  <div className="btn-slide">
                    <a href="#">How to be Participate</a>
                  </div>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container>
              <div className="header-roadmap">
                <h2>RoadMap</h2>
                <p>
                  Step3 <br />
                  IGOs and ICOs
                </p>
              </div>
              <div className="roadmap-line-3-1">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="640"
                  height="425"
                  fill="none"
                  viewBox="0 0 640 425"
                  variants={svg2}
                  initial="hidden"
                  animate={controls2}
                >
                  <motion.path
                    stroke="#E28225"
                    strokeWidth="2.5"
                    d="M0 1.75L34 1.75"
                    variants={item2}
                  ></motion.path>
                  <motion.path
                    stroke="#E28225"
                    strokeWidth="2.5"
                    d="M33.25 1L33.25 424"
                    variants={item2}
                  ></motion.path>

                  <motion.path
                    stroke="#E28225"
                    strokeWidth="2"
                    d="M32 423.749L530.005 423.749"
                    variants={item2}
                  ></motion.path>
                  <motion.path
                    stroke="#E28225"
                    strokeWidth="2"
                    d="M530 424L530 335"
                    variants={item2}
                  ></motion.path>
                  <motion.path
                    stroke="#E28225"
                    strokeWidth="2"
                    d="M529 334h111"
                    variants={item2}
                  ></motion.path>
                </motion.svg>
              </div>
              <div className="roadmap-line-3-2">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="621"
                  height="91"
                  fill="none"
                  viewBox="0 0 621 91"
                  variants={svg32}
                  initial="hidden"
                  animate={controls2}
                >
                  <motion.path
                    variants={item32}
                    stroke="#E28225"
                    strokeWidth="2"
                    d="M0 1h111"
                  ></motion.path>
                  <motion.path
                    variants={item32}
                    stroke="#E28225"
                    strokeWidth="2"
                    d="M112 0L112 91"
                  ></motion.path>
                  <motion.path
                    variants={item32}
                    stroke="#E28225"
                    strokeWidth="2"
                    d="M111 90h510"
                  ></motion.path>
                </motion.svg>
              </div>
              <Row className="content-slide-3">
                <Col lg={4}>
                  <img src={imageRoadMap3} alt="" />
                </Col>
                <Col lg={8}>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Totam culpa autem, minus explicabo blanditiis ex modi
                    architecto commodi consequatur. Quia earum architecto ipsum
                    veritatis sed. Dolorum aperiam eaque excepturi saepe?
                    Quaerat optio aut ipsum alias amet aliquid non excepturi
                    praesentium ea impedit architecto temporibus magni sapiente
                    sed rerum eum accusantium esse hic earum, odio dolores
                    distinctio. Facere assumenda libero, voluptatum excepturi,
                    veritatis dignissimos et sit commodi illum minus soluta,
                    esse consectetur numquam nobis eaque deleniti?
                  </p>
                  <Row>
                    <Col>
                      <div className="roadmap-date roadmap-date-3">
                        <p>
                          2022 <br />
                          feb-mar
                        </p>
                      </div>
                    </Col>
                    <Col>
                      <div className="btn-slide btn-slide-3">
                        <a href="#">How to be Participate</a>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container>
              <div className="header-roadmap">
                <h2>RoadMap</h2>
                <p>
                  Step4 <br />
                  IGOs and ICOs
                </p>
              </div>
              <div className="countdown">
                <div className="countdown-number">
                  <div className="time-number">{timeLeft.days}</div>
                  <div className="time-number">{timeLeft.hours}</div>
                  <div className="time-number">{timeLeft.minutes}</div>
                  <div className="time-number">{timeLeft.seconds}</div>
                </div>
              </div>
              <div className="coming-soon">
                <span>Coming Soon</span>
                <p>
                  In gravida elit lorem, id efficitur arcu vehicula eget. Fusce
                  id nunc suscipit, iaculis ipsum tincidunt,{" "}
                </p>
              </div>
            </Container>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default RoadMap;
