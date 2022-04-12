//Bootstrap
import { Col, Container, Row } from "react-bootstrap";
//media
import imageElephant from "../images/FKG.png";
// Icon
import { IconContext } from "react-icons";
import { FaPlay } from "react-icons/fa";
//Gsap
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

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
  useEffect(() => {
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

  return (
    <>
      <section className="hero hero-bg" id="#hero">
        <Container fluid>
          <div className="hero-img-elephant">
            <img src={imageElephant} alt="" ref={imgElephant} />
          </div>
          <Container>
            <div className="hero-text" ref={homeText}>
              <TextHero>
                <h2>Qpoker is Poker Game Na Baba!!!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  error nobis expedita provident incidunt, minima fugiat quam
                  possimus obcaecati esse?
                </p>
              </TextHero>
              <Btnn>
                <a href="#" className="btn-hero btn-main">
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
      </section>
    </>
  );
};

export default Hero;
