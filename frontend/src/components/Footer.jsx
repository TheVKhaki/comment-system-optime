import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logoFooter from "../images/03-03 13.png";
import { IconContext } from "react-icons";
import {
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";
import OurPartner from "./OurPartner";

const Footer = () => {
  useEffect(() => {
    const btnGoToTop = document.querySelector(".go-to-top");
    window.addEventListener("scroll", function (e) {
      if (window.scrollY > 430) {
        btnGoToTop.classList = "go-to-top opacity-100 visible";
      } else {
        btnGoToTop.classList = "go-to-top opacity-0 invisible";
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="footer-home" id="footer">
        <OurPartner />
        <footer>
          <Container>
            <Row className="flex-column flex-lg-row">
              <Col>
                <div className="footer-left">
                  <h4>Subscribe</h4>
                  <p>
                    Do you want to have our latest news, meanwhile, our newest
                    information? So, do subscribe us and push on the button.
                  </p>
                  <form action="">
                    <input type="text" placeholder="Email Address" />
                    <button className="btn-main">
                      Subscribe
                      <span></span>
                    </button>
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
                <p>© 2019-2022 qpoker. All Rights Reserved</p>
              </div>
            </Col>
          </Container>
          <div className="go-to-top opacity-0 invisible" onClick={goToTop}>
            <IconContext.Provider value={{ color: "white", size: "2.2rem" }}>
              <FaArrowUp />
            </IconContext.Provider>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
