import { Col, Container, Row, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logoImage from "../images/03-03 2.png";
//Gsap
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Header = () => {
  const header = useRef();

  useEffect(() => {
    gsap.fromTo(header.current, { opacity: 0 }, { opacity: 1, duration: 2 });
  }, []);

  return (
    <>
      <header ref={header}>
        {/* <Container>
          <Row className="justify-content-between">
            <Col lg={3}>
              <div className="logo ">
                <img src={logoImage} alt="" />
                <h1>QPoker</h1>
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
        </Container> */}
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#">
              <div className="logo ">
                <img src={logoImage} alt="" />
                <h1>QPoker</h1>
              </div>
            </Navbar.Brand>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Casino</Nav.Link>
              <Nav.Link href="#action3">About Coin</Nav.Link>
              <Nav.Link href="#action4">Learn</Nav.Link>
              <Nav.Link href="#action5">News</Nav.Link>
            </Nav>
            <div className="btn-header">
              <a href="#">Connect To Wallet</a>
            </div>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton closeVariant="">
                <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Casino</Nav.Link>
                  <Nav.Link href="#action3">About Coin</Nav.Link>
                  <Nav.Link href="#action4">Learn</Nav.Link>
                  <Nav.Link href="#action5">News</Nav.Link>
                  <div className="btn-header">
                    <a href="#">Connect To Wallet</a>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
