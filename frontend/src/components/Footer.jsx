import { Col, Container, Row } from "react-bootstrap";
import logoFooter from "../images/03-03 13.png";
import { IconContext } from "react-icons";
import { FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="footer-home">
        <footer>
          <Container>
            <Row className="flex-column flex-lg-row">
              <Col>
                <div className="footer-left">
                  <h4>Subscribe</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis quasi laborum, ratione officia et nisi nostrum fuga
                    assumenda a veniam.
                  </p>
                  <form action="">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                  </form>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div className="footer-logo">
                  <div className="footer-social-media">
                    <IconContext.Provider
                      value={{ color: "white", size: "2rem" }}
                    >
                      <a href="#">
                        <FaTelegramPlane />
                      </a>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "white", size: "2rem" }}
                    >
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "white", size: "2rem" }}
                    >
                      <a href="#">
                        <FaYoutube />
                      </a>
                    </IconContext.Provider>
                  </div>

                  <img src={logoFooter} alt="" />
                </div>
              </Col>
              <Col>
                <div className="footer-right">
                  <ul>
                    <li>Our Company</li>
                    <li>lorem1</li>
                    <li>lorem2</li>
                    <li>lorem3</li>
                    <li>lorem4</li>
                  </ul>
                  <ul>
                    <li>Our Company</li>
                    <li>lorem1</li>
                    <li>lorem2</li>
                    <li>lorem3</li>
                    <li>lorem4</li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Col>
              <div className="footer-copy-right">
                <p>© 2022 qpoker. All Rights Reserved</p>
              </div>
            </Col>
          </Container>
        </footer>
      </section>
    </>
  );
};

export default Footer;
