import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
//Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//custom hook
import useWindowSize from "../custom hook/ResizeEvent";
const RoadMapStep4 = () => {
  const [width, height] = useWindowSize();
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

  //Animation
  const roadMapStep4 = useRef(null);
  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    // if (width > 992) {
    //   ScrollTrigger.enable();
    //   gsap.fromTo(
    //     roadMapStep4.current,
    //     { opacity: 1, scale: 1 },
    //     {
    //       opacity: 0,
    //       scale: 0.5,
    //       scrollTrigger: {
    //         trigger: roadMapStep4.current,
    //         start: "center center",
    //         end: "bottom center",
    //         scrub: true,
    //       },
    //     }
    //   );
    // } else {
    //   ScrollTrigger.disable();
    //   gsap.fromTo(
    //     roadMapStep4.current,
    //     { opacity: 1, scale: 1 },
    //     {
    //       opacity: 1,
    //       scale: 1,
    //       scrollTrigger: {
    //         trigger: roadMapStep4.current,
    //         start: "center center",
    //         end: "bottom center",
    //         scrub: true,
    //       },
    //     }
    //   );
    // }
  }, [width]);
  return (
    <>
      <section className="roadmap-step4 roadmap">
        <div ref={roadMapStep4}>
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
                In gravida elit lorem, id efficitur arcu vehicula eget. Fusce id
                nunc suscipit, iaculis ipsum tincidunt,{" "}
              </p>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default RoadMapStep4;
