import { Container, Nav } from "react-bootstrap";
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
        <Navbar bg="light" expand="lg">
          <Container>
            {/* <Navbar.Brand href="#">
              <div className="logo ">
                <img src={logoImage} alt="" />
                <h1>QPoker</h1>
              </div>
            </Navbar.Brand> */}
            <Nav className="justify-content-center flex-grow-1 pe-3 align-items-center">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Casino</Nav.Link>
              <Nav.Link href="#social">About Coin</Nav.Link>
              <Nav.Link className="logo ">
                <img src={logoImage} alt="" />
              </Nav.Link>
              <Nav.Link href="#action4">Learn</Nav.Link>
              <Nav.Link href="#action5">News</Nav.Link>
              <Nav.Link href="#action5">News</Nav.Link>
            </Nav>
            {/* <div className="btn-header">
              <a href="#">Connect To Wallet</a>
            </div> */}
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Casino</Nav.Link>
                  <Nav.Link href="#action3">About Coin</Nav.Link>
                  <Nav.Link href="#action4">Learn</Nav.Link>
                  <Nav.Link href="#action5">News</Nav.Link>
                  {/* <div className="btn-header">
                    <a href="#">Connect To Wallet</a>
                  </div> */}
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
