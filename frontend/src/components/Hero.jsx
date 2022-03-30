//Bootstrap
import { Col, Container, Row } from "react-bootstrap";
//media
import imageElephant from "../images/FKG.png";
const Hero = () => {
  return (
    <>
      <section className="hero hero-bg">
        <Container fluid>
          <div className="hero-text">
            <h2>Qpoker is Poker Game Na Baba!!!</h2>
          </div>
          <div className="hero-img-elephant">
            <img src={imageElephant} alt="" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
