//react
import { useEffect, useState } from "react";
import { Col, Container, Dropdown, Offcanvas, Row } from "react-bootstrap";
//media
import logoImage from "../images/LOW_Logo-New-Color-C.png";
import privateSale from "../images/PrivateSale.webp";
import informationToken from "../images/Info.webp";
import airdropIcon from "../images/airdropicon.svg";
//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { IconContext } from "react-icons";
import { FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa";
// function ModalBuyPackage(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       {/* <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header> */}

//       <div className="modal-buy">
//         <ul>
//           <p>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
//             ut?
//           </p>
//           <li>1000$</li>
//           <li>2000$</li>
//           <li>3000$</li>
//           <li>4000$</li>
//           <button>Accept</button>
//         </ul>
//       </div>
//     </Modal>
//   );
// }

const PrivateSale = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const app = document.querySelector(".App");
    app.classList.remove("fullscreen");
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header className="header-private-sale">
        <Container>
          <div className="wrapper-header">
            <div className="logo">
              <img src={logoImage} alt="" />
              <h2>QPoker</h2>
            </div>
            <nav>
              <ul>
                <li>Airdrop Panel</li>
                <li>QPoker.io</li>
                <li>Private sale</li>
                <li>Tokenomics</li>
                <li>Whitepaper</li>
              </ul>
            </nav>
            <button className="btn-connect-wallet">Connect Your Wallet</button>
            <div className="toggle-menu-mobile">
              <FontAwesomeIcon
                icon={faBars}
                color="#fff"
                onClick={handleShow}
                size={"3x"}
              />
            </div>

            <Offcanvas
              placement="end"
              show={show}
              onHide={handleClose}
              className="private-sale-menu-mobile"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ul>
                  <li>Airdrop Panel</li>
                  <li>QPoker.io</li>
                  <li>Private sale</li>
                  <li>Tokenomics</li>
                  <li>Whitepaper</li>
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </Container>
      </header>

      <main className="private-sale">
        <div className="private-sale-countdown">
          <h1>Private Sale Ends In</h1>
          <div className="countdown">
            <div className="countdown-item">
              <p>3</p>
              <span>Days</span>
            </div>
            :
            <div className="countdown-item">
              <p>01</p>
              <span>Hours</span>
            </div>
            :
            <div className="countdown-item">
              <p>24</p>
              <span>Minutes</span>
            </div>
            :
            <div className="countdown-item">
              <p>50</p>
              <span>Secondes</span>
            </div>
          </div>
        </div>
        <Container>
          <div className="buy-token">
            <div className="wrapper-card">
              <div className="header-card">
                <img src={logoImage} alt="" />
                <h1>Buy QMatic</h1>
              </div>
              <div className="amount-price">
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-currency"
                    className="dropdown-currency"
                  >
                    USDT
                  </Dropdown.Toggle>

                  <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="wrapper-input-amount">
                  <div className="top-input-amount">
                    <span>Amount</span>
                    <span>Balance:0</span>
                  </div>
                  <input type="text" placeholder="0" />
                  <div className="bot-input-amount">
                    <ul>
                      <li>25%</li>
                      <li>50%</li>
                      <li>75%</li>
                      <li>MAX</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="information-amount-price">
                <div className="info-price">
                  <span>Est.QMatic</span>
                  <p>0</p>
                </div>
                <div className="info-price">
                  <span>Price</span>
                  <p>0.006757 USDT per QMATIC</p>
                </div>
              </div>
              <button className="btn-connect-wallet">
                Connect Your Wallet
              </button>
            </div>
          </div>
          <div className="private-sale-progress-bar">
            <div className="top-progress">
              <div>
                <span>Total sale: </span>
                <p>$120,000</p>
              </div>
              <div>
                <span>Target: </span>
                <p>$500,000</p>
              </div>
            </div>
            <div className="progress-bar-price">
              <div className="fill-progress-bar"></div>
            </div>
          </div>
        </Container>
        <Container>
          <div className="private-sale-details">
            <Row>
              <Col xs={12} lg={6}>
                <h1>
                  QPoker Private Sale Slogan or anything makes motivation for
                  buying and Trust!
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  placeat harum nobis animi vel itaque minima dolore et aperiam
                  fugit.
                </p>
              </Col>
              <Col xs={12} lg={6}>
                <img src={privateSale} alt="" />
              </Col>
            </Row>
          </div>
        </Container>
        <Container>
          <div className="private-sale-information">
            <div className="card-information">
              <h2>Token Contract</h2>
              <p>0x2386532r81896412cjwuhfur892</p>
            </div>
            <div className="card-information">
              <h2>Start</h2>
              <p>Feb 20th</p>
            </div>
            <div className="card-information">
              <h2>END</h2>
              <p>Mar 20th</p>
            </div>
            <div className="card-information">
              <h2>Number of Tokens for Sale</h2>
              <p>500000000 QMatic</p>
            </div>
            <div className="card-information">
              <h2>Price for Each Unit</h2>
              <p>$0.001</p>
            </div>
          </div>
        </Container>
        <div className="information-token">
          <Container>
            <div className="wrapper-information-token">
              <Row className="w-100">
                <Col xs={6} md={3} className="information-token-item">
                  <p>Token Name</p>
                  <h1>QMatic</h1>
                </Col>
                <Col xs={6} md={3} className="information-token-item">
                  <p>Token Symbol</p>
                  <h1>$QMatic</h1>
                </Col>
                <Col xs={6} md={3} className="information-token-item">
                  <p>Standard</p>
                  <h1>ERC-20 (Polygon)</h1>
                </Col>
                <Col xs={6} md={3} className="information-token-item">
                  <p>Max Supply</p>
                  <h1>4,600,000,000</h1>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="information-token-img">
          <img src={informationToken} alt="" />
        </div>
      </main>
      <footer className="footer-private-sale">
        <div className="social-media">
          <ul>
            <li>
              <img src={airdropIcon} alt="" />
            </li>
            <li>
              <IconContext.Provider value={{ color: "white", size: "3rem" }}>
                <FaTelegramPlane />
              </IconContext.Provider>
            </li>
            <li>
              <IconContext.Provider value={{ color: "white", size: "3rem" }}>
                <FaYoutube />
              </IconContext.Provider>
            </li>
            <li>
              <IconContext.Provider value={{ color: "white", size: "3rem" }}>
                <FaTwitter />
              </IconContext.Provider>
            </li>
          </ul>
        </div>
        <p>Find us an Social media</p>
        <h2>QPoker.io</h2>
      </footer>
    </>
  );
};
export default PrivateSale;
