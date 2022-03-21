import { Col, Container, Row } from "react-bootstrap";
import logoImage from "../images/01 LOGO SVG-03.svg";
import { IconContext } from "react-icons";
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";
const Nav = () => {
  return (
    <>
      <header>
        <Container>
          <Row>
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
            <Col lg={2} className="align-self-center">
              <div className="social-media-header">
                <ul>
                  <li>
                    <a href="#">
                      <IconContext.Provider
                        value={{
                          size: "20px",
                          color: "#fff",
                        }}
                      >
                        <div>
                          <FaTelegramPlane />
                        </div>
                      </IconContext.Provider>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <IconContext.Provider
                        value={{ size: "20px", color: "#fff" }}
                      >
                        <div>
                          <FaTwitter />
                        </div>
                      </IconContext.Provider>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <IconContext.Provider
                        value={{ size: "20px", color: "#fff" }}
                      >
                        <div>
                          <FaInstagram />
                        </div>
                      </IconContext.Provider>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2} className="align-self-center">
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
