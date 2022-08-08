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

    //change text in footer right to coming soon
    const linkFooterRight = document.querySelectorAll(".footer-right span");
    const firstTextLinks = [
      linkFooterRight[0].innerText,
      linkFooterRight[1].innerText,
      linkFooterRight[2].innerText,
      linkFooterRight[3].innerText,
    ];
    linkFooterRight.forEach((element, index) => {
      element.addEventListener("mouseenter", function (params) {
        element.innerHTML = "Coming Soon";
      });
      element.addEventListener("mouseleave", function (params) {
        element.innerHTML = firstTextLinks[index];
      });
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
                  <h4>Subscribe</h4>
                  <p>
                    Airdrops, Bounties & Giveaways... <br />
                    Be first in line to hear about our magnificent welcoming
                    benefits.
                  </p>
                  {/* <input type="text" placeholder="Email Address" /> */}
                  <a
                    href="https://twitter.com/QPoker_io"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-main"
                  >
                    Join our Twitter
                    <span aria-hidden="true"></span>
                  </a>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div className="footer-logo">
                  <div className="footer-social-media">
                    <IconContext.Provider
                      value={{ color: "white", size: "2.3rem" }}
                    >
                      <a
                        href="https://trello.com/b/RsomwpDG"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTrello />
                      </a>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "white", size: "2.3rem" }}
                    >
                      <a
                        href="https://twitter.com/QPoker_io"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTwitter />
                      </a>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "white", size: "2.3rem" }}
                    >
                      <a
                        href="https://youtu.be/6O_6_K3tr5c"
                        target="_blank"
                        rel="noreferrer"
                      >
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
                      <span>Blog</span>{" "}
                    </li>
                    <li>
                      <span>FAQ</span>
                    </li>
                    <li>
                      <span>Privacy Policy</span>
                    </li>
                    <li>
                      <span>About Us</span>
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
