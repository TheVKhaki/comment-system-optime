import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import imgAbout1 from "../images/Logo_Newcode Color-16.png";
import teamMember from "../images/02Team.webp";
import logoAboutQpoker from "../images/LOGO-04.png";
export default function AboutUs() {
  useEffect(() => {
    const app = document.querySelector(".App");
    app.classList.remove("fullscreen");
  }, []);

  return (
    <div className="about-us">
      <Container>
        <div className="header-about">
          <h1>About Us</h1>
        </div>
        <div className="detail-about-us">
          <div>
            <p>
              QPoker Ltd, a privately owned company, was launched by two
              Scandinavian co-founders Hans (CMO) & Michael (CPO) whose roads
              met back in 2014 in Malta. Both shared the ambition of
              revolutionizing the outdated gambling markets which had been
              solidified by the old paradigm. Casinos were afraid of modernizing
              their business model due to sustained income flow that the
              low-cost casino slots and betting products were providing.
            </p>
          </div>
          <img className="img-team-member" src={teamMember} alt="" />
          <div>
            <p>
              In 2020, QPoker’s concept took off in ICE London iGaming
              conference where the two stubble heads introduced their innovation
              to several venture capitalists. One of them was Arne, a Norwegian
              business angel, who had made a fortune by selling his shares of
              one of the major online poker rooms back in 2006, by his own
              words, way too early.
            </p>
            <p className="mt-5">
              Thanks to our godfather, QPoker got an efficient seed funding.
              With this money we managed to expand our team and eventually
              developing the alpha version of QPoker’s P2P decentralized
              software.
            </p>
            <img className="img-logo-qpoker" src={logoAboutQpoker} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
}
