import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logoFooter from "../images/LogoBlack.png";
import { IconContext } from "react-icons";
import {
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
  FaArrowUp,
  FaTrello,
} from "react-icons/fa";
import OurPartner from "./OurPartner";

const Footer = () => {
  useEffect(() => {
    const btnGoToTop = document.querySelector(".go-to-top");
    window.addEventListener("scroll", function (e) {
      if (window.scrollY > 430) {
        btnGoToTop.classList = "go-to-top opacity-75 visible";
      } else {
        btnGoToTop.classList = "go-to-top opacity-0 invisible";
      }
      if (window.scrollY > 7455) {
        btnGoToTop.style.bottom = "66px";
      } else {
        btnGoToTop.style.bottom = "10px";
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="footer-home" id="footer">
        <div className="comingsoon-ourpartner">
          <h3>Coming Soon</h3>
        </div>

        <OurPartner />
        <footer>
          <Container>
            <Row className="flex-column flex-lg-row">
              <Col>
                <div className="footer-left">
                  <h4>Bonus Whore?</h4>
                  <p>
                    Eager to milk us before the paying customers join the line?
                    Airdrops, bounties and other welcoming benefits just before
                    the real action gets started.
                  </p>
                  <form action="">
                    {/* <input type="text" placeholder="Email Address" /> */}
                    <button className="btn-main">
                      Join our Telegram
                      <span></span>
                    </button>
                  </form>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div className="footer-logo">
                  <div className="footer-social-media">
                    <IconContext.Provider
                      value={{ color: "white", size: "2.3rem" }}
                    >
                      <a href="/#">
                        <FaTrello />
                      </a>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "white", size: "2.3rem" }}
                    >
                      <a href="/#">
                        <FaTwitter />
                      </a>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "white", size: "2.3rem" }}
                    >
                      <a href="/#">
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
                    <li>Company Details</li>
                    <li>QPoker Ltd.</li>
                    <li>Unit 114, Orion Mall</li>
                    <li>Palm Street, Victoria</li>
                    <li>Mahe, Seychelles</li>
                  </ul>
                  <ul>
                    <li>Links</li>
                    <li>
                      <a href="/#">Blog</a>{" "}
                    </li>
                    <li>
                      <a href="/#">FAQ</a>
                    </li>
                    <li>
                      <a href="/#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/#">About Us</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Col>
              <div className="footer-copy-right">
                <p>©2022 QPoker Ltd. All Rights Reserved</p>
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
