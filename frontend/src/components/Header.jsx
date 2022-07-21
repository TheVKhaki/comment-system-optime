//react
import { useEffect, useRef, useState } from "react";
//bootstrap
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
//media
import logoImage from "../images/LOW_Logo-New-Color-C.png";
//Gsap
import { gsap } from "gsap";
//framer motion
import { motion } from "framer-motion";
const Header = () => {
  const header = useRef();
  useEffect(() => {
    gsap.fromTo(header.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);
  //go to top
  useEffect(() => {
    const headerMobile = document.querySelector("header");
    window.addEventListener("scroll", function (e) {
      if (window.scrollY > 100) {
        headerMobile.classList.add("header-mobile");
      } else {
        headerMobile.classList.remove("header-mobile");
      }
    });
  }, []);
  //chrome issue for links
  const [menuShow, setMenuShow] = useState(false);
  useEffect(() => {
    const itemMenu = document.querySelectorAll(
      ".offcanvas-body .navbar-nav .nav-link"
    );
    itemMenu.forEach((itemmenu) => {
      itemmenu.addEventListener("click", function () {
        var isChrome =
          /Chrome/.test(navigator.userAgent) &&
          /Google Inc/.test(navigator.vendor);
        if (isChrome) {
          setTimeout(function () {
            var hash = window.location.hash;
            window.location.hash = "";
            window.location.hash = hash;
          }, 300);
        }
      });
    });
  }, [menuShow]);
  //scroll in menu open hidden
  const enterOffcanvas = () => {
    document.querySelector("html").style.overflowY = "hidden";
    setMenuShow(true);
  };
  const exitOffcanvas = () => {
    document.querySelector("html").style.overflowY = "visible";
    setMenuShow(false);
  };
  return (
    <>
      <header ref={header}>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#">
              <div className="logo ">
                <img src={logoImage} alt="" />
                <h1>QPoker</h1>
              </div>
            </Navbar.Brand>
            <Nav className="justify-content-center flex-grow-1 align-items-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#campaigns">Campaigns</Nav.Link>
              <Nav.Link href="#roadmapp">RoadMap</Nav.Link>
              <Nav.Link className="logo ">
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1 }}
                  src={logoImage}
                  alt=""
                />
              </Nav.Link>
              <Nav.Link href="#litepaper">Litepaper</Nav.Link>
              <Nav.Link href="#airdrops">Participate</Nav.Link>
              <Nav.Link href="#our-teamm">Team</Nav.Link>
            </Nav>
            {/* <div className="btn-header">
              <a href="#">Connect To Wallet</a>
            </div> */}
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              onEnter={enterOffcanvas}
              onExit={exitOffcanvas}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id="offcanvasNavbarLabel"
                  aria-hidden="true"
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#hero">Home</Nav.Link>
                  <Nav.Link href="#campaigns">Campaigns</Nav.Link>
                  <Nav.Link href="#roadmap">RoadMap</Nav.Link>
                  <Nav.Link href="#roadmap-3">Litepaper</Nav.Link>
                  <Nav.Link href="#roadmap-2">Participate</Nav.Link>
                  <Nav.Link href="#our-team">Team</Nav.Link>
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
