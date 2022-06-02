import { useEffect, useRef } from "react";
//Bootstrap
import { Container } from "react-bootstrap";
//media
import imageElephant from "../images/FKG.png";
import youtubeIcon from "../images/youtube.png";
import videoElephant from "../video/FV 14.mp4";
// Icon
import { IconContext } from "react-icons";
import { FaPlay } from "react-icons/fa";
//Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function TextHero({ children }) {
  return <div className="box">{children}</div>;
}
function Btnn({ children }) {
  return <div className="btns-hero">{children}</div>;
}

const Hero = () => {
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
  }, []);
  const videoElephantRef = useRef();
  const endedHandler = () => {
    videoElephantRef.current.currentTime = 10;
    videoElephantRef.current.play();
  };

  return (
    <>
      <section className="hero hero-bg" id="#hero" ref={sections}>
        <Container fluid>
          {/* <div className="hero-img-elephant">
            <img src={imageElephant} alt="" ref={imgElephant} />
          </div> */}
          <video
            className="video-elephant"
            ref={videoElephantRef}
            muted
            autoPlay
            onEnded={endedHandler}
          >
            <source src={videoElephant} type="video/mp4" />
          </video>
          <Container>
            <div className="hero-text" ref={homeText}>
              <TextHero>
                <h2>
                  <span>Q</span>Poker
                  <br />
                  <span>Metaverse Quess'em Poker</span>
                </h2>
                <p>
                  Early 2000s Texas Hold’em boom was huge, QPoker will be
                  bigger. A brand new play-to-earn NFT card game which blends
                  together optimal amount of luck and skill. Compete with
                  citizens all around the world.
                </p>
              </TextHero>
              <Btnn>
                <a href="#social" className="btn-hero btn-main">
                  Button
                </a>
                {/* <IconContext.Provider
                  value={{ color: "white", size: "1.5rem" }}
                > */}
                <a href="#" className="btn-watch">
                  {/* <FaPlay /> */}
                  <img src={youtubeIcon} alt="" />
                </a>
                {/* </IconContext.Provider> */}
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
