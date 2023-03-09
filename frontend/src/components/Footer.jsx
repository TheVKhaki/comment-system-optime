import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logoFooter from "../images/LogoBlack.png";
import { IconContext } from "react-icons";
import {
  FaTwitter,
  FaYoutube,
  FaArrowUp,
  FaParachuteBox,
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
    });

    //   //change text in footer right to coming soon
    //   const linkFooterRight = document.querySelectorAll(".footer-right span");
    //   const firstTextLinks = [
    //     linkFooterRight[0].innerText,
    //     linkFooterRight[1].innerText,
    //     linkFooterRight[2].innerText,
    //     linkFooterRight[3].innerText,
    //   ];
    //   linkFooterRight.forEach((element, index) => {
    //     element.addEventListener("mouseenter", function (params) {
    //       element.innerHTML = "Coming Soon";
    //     });
    //     element.addEventListener("mouseleave", function (params) {
    //       element.innerHTML = firstTextLinks[index];
    //     });
    //   });
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
                  <h4>QPoker Community</h4>
                  <p>
                    Welcome to our vibrant community. Take part in the chat and
                    be among the first to hear about QPoker's expansion.
                  </p>

                  <a
                    style={{ color: "rgba(255, 255, 255, 0.8)" }}
                    href="mailto:support@qpoker.io"
                  >
                    <p>Contact Us: Support@qpoker.io</p>
                  </a>

                  {/* <input type="text" placeholder="Email Address" /> */}
                  <a
                    href="https://t.me/qpokergroup"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-main"
                  >
                    Join our Community
                    <span aria-hidden="true"></span>
                  </a>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div className="footer-logo">
                  <div className="footer-social-media">
                    <IconContext.Provider
                      value={{ color: "white", size: "2.9rem" }}
                    >
                      <a
                        href="https://T.me/qpoker_giveaways_bot"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaParachuteBox />
                      </a>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "white", size: "2.3rem" }}
                    >
                      <a
                        href="https://youtube.com/@qpoker"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaYoutube />
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
                      <a href="/blog" target="_blank">
                        Blog
                      </a>{" "}
                    </li>
                    <li>
                      <a href="/faq" target="_blank">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="/privacy-policy" target="_blank">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="/about-us" target="_blank">
                        About Us
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Col>
              <div className="footer-copy-right">
                <p>©2023 QPoker Ltd. All Rights Reserved.</p>
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
