import { Col, Container, Row } from "react-bootstrap";
//media
import logoQpoker from "../images/LogoBlack.png";
import metamask from "../images/login/metamask.png";
//icon
import { IconContext } from "react-icons";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Login = () => {
  return (
    <>
      <section className="login-wallet">
        <Container>
          <Row className="justify-content-center">
            <Col
              md={6}
              className="d-flex align-items-center flex-column px-4 px-sm-0"
            >
              <div className="qpoker-logo">
                <img src={logoQpoker} alt="" />
              </div>
              <div className="login-box">
                <span className="header-login-box">Login</span>
                <Container>
                  <Row className="px-5">
                    <Col>
                      <div className="login-wallets d-flex border-bottom-0">
                        <div className="logo-wallet-metamask">
                          <img src={metamask} alt="" />
                        </div>
                        <div className="describe-wallet d-flex flex-column">
                          <span>Metamask</span>
                          <p>Connect using browser wallet</p>
                        </div>
                        <IconContext.Provider
                          value={{
                            size: "35px",
                            color: "white",
                          }}
                        >
                          <div className="d-flex align-items-center ms-auto">
                            <MdOutlineKeyboardArrowRight />
                          </div>
                        </IconContext.Provider>
                      </div>
                    </Col>
                  </Row>
                  <Row className="px-5">
                    <Col>
                      <div className="login-wallets d-flex no-border-radius border-bottom-0">
                        <div className="logo-wallet-metamask">
                          <img src={metamask} alt="" />
                        </div>
                        <div className="describe-wallet d-flex flex-column">
                          <span>Coinbase Wallet</span>
                          <p>Connect using Coinbase wallet</p>
                        </div>
                        <IconContext.Provider
                          value={{
                            size: "35px",
                            color: "white",
                          }}
                        >
                          <div className="d-flex align-items-center ms-auto">
                            <MdOutlineKeyboardArrowRight />
                          </div>
                        </IconContext.Provider>
                      </div>
                    </Col>
                  </Row>
                  <Row className="px-5">
                    <Col>
                      <div className="login-wallets d-flex no-border-radius border-bottom-0">
                        <div className="logo-wallet-metamask">
                          <img src={metamask} alt="" />
                        </div>
                        <div className="describe-wallet d-flex flex-column">
                          <span>Bitski Wallet</span>
                          <p>Connect using Bitski wallet</p>
                        </div>
                        <IconContext.Provider
                          value={{
                            size: "35px",
                            color: "white",
                          }}
                        >
                          <div className="d-flex align-items-center ms-auto">
                            <MdOutlineKeyboardArrowRight />
                          </div>
                        </IconContext.Provider>
                      </div>
                    </Col>
                  </Row>
                  <Row className="px-5">
                    <Col>
                      <div className="login-wallets d-flex no-border-radius border-bottom-0">
                        <div className="logo-wallet-metamask">
                          <img src={metamask} alt="" />
                        </div>
                        <div className="describe-wallet d-flex flex-column">
                          <span>Venly</span>
                          <p>Connect using Venly wallet</p>
                        </div>
                        <IconContext.Provider
                          value={{
                            size: "35px",
                            color: "white",
                          }}
                        >
                          <div className="d-flex align-items-center ms-auto">
                            <MdOutlineKeyboardArrowRight />
                          </div>
                        </IconContext.Provider>
                      </div>
                    </Col>
                  </Row>
                  <Row className="px-5">
                    <Col>
                      <div className="login-wallets d-flex no-border-radius">
                        <div className="logo-wallet-metamask">
                          <img src={metamask} alt="" />
                        </div>
                        <div className="describe-wallet d-flex flex-column">
                          <span>WalletConnect</span>
                          <p>Connect using mobile wallet</p>
                        </div>
                        <IconContext.Provider
                          value={{
                            size: "35px",
                            color: "white",
                          }}
                        >
                          <div className="d-flex align-items-center ms-auto">
                            <MdOutlineKeyboardArrowRight />
                          </div>
                        </IconContext.Provider>
                      </div>
                    </Col>
                  </Row>
                  <Row className="px-5">
                    <Col>
                      <div className="wallet-download-info">
                        <span>Don't have wallet?</span>
                        <a href="#">Download here</a>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="footer-dashboard">
        <div className="copyright-qpoker">
          © 2022 qpoker. All Rights Reserved
        </div>
        <div className="menu-footer-login">
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Login;
