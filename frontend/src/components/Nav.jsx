import { Col, Container, Row } from "react-bootstrap";
import logoImage from "../images/03-03 2.png";
import { IconContext } from "react-icons";
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";
const Nav = () => {
  return (
    <>
      <header>
        <Container>
          <Row className="justify-content-between">
            <Col lg={3}>
              <div className="logo ">
                <img src={logoImage} alt="" />
                <h1>BTC Casino</h1>
              </div>
            </Col>
            <Col lg={5} className="align-self-center">
              <nav>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Casino</a>
                  </li>
                  <li>
                    <a href="#">About Coin</a>
                  </li>
                  <li>
                    <a href="#">Learn</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                </ul>
              </nav>
            </Col>
            <Col lg={3} className="align-self-center">
              <div className="btn-header">
                <a href="#">BUTTON</a>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Nav;
