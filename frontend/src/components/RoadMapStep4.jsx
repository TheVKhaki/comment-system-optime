import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
//media
import elephantComingsoon from "../images/BKGR4-03.webp";
import elephantComingsoonRes from "../images/BKGR4-03-Res.webp";
//motion
import { motion, useAnimation } from "framer-motion";
//RandomReveal
import { RandomReveal } from "react-random-reveal";
//observer
import { useInView } from "react-intersection-observer";
//lazyload
import Lazyload from "../HOC/Lazyload";
const RoadMapStep4 = () => {
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
  const textComingSoon = {
    hidden: {
      opacity: 0,
      x: -80,
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

  //Countdown
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`07/22/${year}`) - +new Date();
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
      <section className="roadmap-step4 roadmap" ref={element} id="comingsoon">
        <Container>
          <div className="img-elephant-comingsoon">
            <Lazyload>
              <img src={elephantComingsoon} alt="" width={500} height={600} />
              <img src={elephantComingsoonRes} alt="" />
            </Lazyload>
          </div>
          <motion.div
            className="coming-soon"
            variants={textComingSoon}
            initial="hidden"
            animate={controls}
          >
            <motion.div className="header-comingsoon">
              <h2>
                <span style={{ color: "#e28001" }}>Q</span>Poker
              </h2>
              <p>
                1<sup>st</sup> Airdrop’s Starting Time
              </p>
            </motion.div>
            <motion.div className="countdown">
              <div className="countdown-number">
                <div className="time-number">
                  {timeLeft.days} <span>Days</span>
                </div>
                <div className="time-number">
                  {timeLeft.hours} <span>Hours</span>
                </div>
                <div className="time-number">
                  {timeLeft.minutes} <span>Minutes</span>
                </div>
                <div className="time-number">
                  {timeLeft.seconds} <span>Seconds</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="coming-soon-text">
              <span>
                <RandomReveal
                  isPlaying={inView}
                  duration={0.5}
                  revealDuration={0.5}
                  characters="COMING SOON"
                />
              </span>
              <motion.p>
                Evolution of real money skill games has leaped forward. We are
                launching a trailblazing poker variant innovated by a group of
                poker enthusiasts in 2019-2022. QPoker is the first
                decentralized iGaming platform run by proof-of-stake smart
                contracts. Take control over your funds, in every stage.
              </motion.p>
              <a href="#" className="btn-coming-soon btn-main">
                Join the Rewards
                <span></span>
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default RoadMapStep4;
