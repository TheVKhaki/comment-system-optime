import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
//media
import elephantComingsoon from "../images/BKGR4-03.png";
import elephantComingsoonRes from "../images/BKGR4-03-Res.png";
//motion
import { motion, useAnimation } from "framer-motion";
//Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//RandomReveal
import { RandomReveal } from "react-random-reveal";
//observer
import { useInView } from "react-intersection-observer";
//custom hook
import useWindowSize from "../custom hook/ResizeEvent";
const RoadMapStep4 = () => {
  const [width, height] = useWindowSize();
  const controls = useAnimation();
  const [element, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  //variant animation
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

  //Countdown
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`07/01/${year}`) - +new Date();
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
      <section className="roadmap-step4 roadmap" ref={element}>
        <Container>
          <div className="img-elephant-comingsoon">
            <img src={elephantComingsoon} alt="" />
            <img src={elephantComingsoonRes} alt="" />
          </div>
          <div className="coming-soon">
            <motion.div className="header-comingsoon">
              <h2>QPoker</h2>
              <p>The trendsetter of iGaming</p>
            </motion.div>
            <motion.div
              variants={textRoadMap}
              initial="hidden"
              animate={controls}
              className="countdown"
            >
              <div className="countdown-number">
                <div className="time-number">
                  {/* <div className="time-couneter">D</div> */}
                  {timeLeft.days}
                </div>
                <div className="time-number">
                  {/* <div className="time-couneter">H</div> */}
                  {timeLeft.hours}
                </div>
                <div className="time-number">
                  {/* <div className="time-couneter">M</div> */}
                  {timeLeft.minutes}
                </div>
                <div className="time-number">
                  {/* <div className="time-couneter">S</div> */}
                  {timeLeft.seconds}
                </div>
              </div>
            </motion.div>
            <div className="coming-soon-text">
              <span>
                <RandomReveal
                  isPlaying={inView}
                  duration={0.5}
                  revealDuration={0.5}
                  characters="COMING SOON"
                />
              </span>
              <motion.p
                variants={textRoadMap}
                initial="hidden"
                animate={controls}
              >
                our new and young engineering team has brought trust and
                entertainment to the Hold'em poker version. It has worth trying
                as it is a multiple challenges version. Do you know, in this
                version, there is no room for scam robots? We have its free
                version as well. Come in and try so that you can taste the
                authentic flavor of an online sports game. Indeed, it is a new
                window to Poker, full of trust and thrill.
              </motion.p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default RoadMapStep4;
