import { useEffect, useRef } from "react";
//Bootstrap
import { Col, Container, Row } from "react-bootstrap";
//media
import imageElephant from "../images/FKG.png";
// Icon
import { IconContext } from "react-icons";
import { FaPlay } from "react-icons/fa";
//Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//custom hook
import useWindowSize from "../custom hook/ResizeEvent";

function TextHero({ children }) {
  return <div className="box">{children}</div>;
}
function Btnn({ children }) {
  return <div className="btns-hero">{children}</div>;
}

const Hero = () => {
  const [width, height] = useWindowSize();
  const imgElephant = useRef();
  const homeText = useRef();
  const q = gsap.utils.selector(homeText);
  const tl = useRef();
  const sections = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      imgElephant.current,
      { x: "100", scale: 0.95, y: "30" },
      { x: "0", y: "0", scale: 1, duration: 2 }
    );

    tl.current = gsap
      .timeline()
      .to(q(".box"), {
        y: "-100",
        opacity: 1,
        duration: 1,
        ease: "power1.out",
      })
      .to(
        q(".btns-hero"),
        {
          y: "-100",
          opacity: 1,
          duration: 1,
          ease: "power1.out",
        },
        "-=0.6"
      );
    // if (width > 992) {
    //   ScrollTrigger.enable();
    //   gsap.fromTo(
    //     sections.current,
    //     { scale: 1, opacity: 1 },
    //     {
    //       opacity: 0,
    //       scale: 0.5,
    //       scrollTrigger: {
    //         trigger: sections.current,
    //         start: "top top",
    //         end: "bottom center",
    //         scrub: true,
    //         markers: false,
    //       },
    //     }
    //   );
    // } else {
    //   ScrollTrigger.disable();
    //   gsap.fromTo(
    //     sections.current,
    //     { scale: 1, opacity: 1 },
    //     {
    //       opacity: 1,
    //       scale: 1,
    //       scrollTrigger: {
    //         trigger: sections.current,
    //         start: "top top",
    //         end: "bottom center",
    //         scrub: true,
    //         markers: false,
    //       },
    //     }
    //   );
    // }
  }, []);

  return (
    <>
      <section className="hero hero-bg" id="#hero" ref={sections}>
        <Container fluid>
          <div className="hero-img-elephant">
            <img src={imageElephant} alt="" ref={imgElephant} />
          </div>
          <Container>
            <div className="hero-text" ref={homeText}>
              <TextHero>
                <h2>
                  <span>Q</span>Poker
                  <br />
                  <span>Metaverse Quess'em Poker</span>
                </h2>
                <p>
                  For the first time in iGaming platform and based on
                  proof-of-stake smart contract on the blockchain technology:
                  experience a non-stop, perfect and exciting game with the
                  newly created Hold'em version.
                </p>
              </TextHero>
              <Btnn>
                <a href="#social" className="btn-hero btn-main">
                  Button
                </a>
                <IconContext.Provider
                  value={{ color: "white", size: "1.5rem" }}
                >
                  <a href="#" className="btn-watch">
                    <FaPlay />
                  </a>
                </IconContext.Provider>
                {/* <a href="#" className="btn-text-watch">
                  Watch Trailer
                </a> */}
              </Btnn>
            </div>
          </Container>
        </Container>
        <div className="bullet-section">
          <span style={{ backgroundColor: "#e28001" }}></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </>
  );
};

export default Hero;
