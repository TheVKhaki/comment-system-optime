import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import FooterWithoutPoweredBy from "../components/FooterWithoutPoweredBy";
import HeaderOther from "../components/HeaderOther";
export default function FAQ() {
  useEffect(() => {
    const app = document.querySelector(".App");
    app.classList.remove("fullscreen");
  }, []);

  return (
    <div className="faq-page">
      <HeaderOther />
      <Container>
        <div className="header-faq">
          <h1>FAQ</h1>
          <p>Frequently Asked Questions</p>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>QPoker Ltd.</Accordion.Header>
            <Accordion.Body>
              <p>
                QPoker Ltd, a privately owned company, was launched by two
                Scandinavian co-founders Hans (CMO) & Michael (CPO) whose roads
                met back in 2014 in Malta. Both shared the ambition of
                revolutionizing the outdated gambling markets which had been
                solidified by the old paradigm. Casinos were afraid of
                modernizing their business model due to sustained income flow
                that the low-cost casino slots and betting products were
                providing.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What is QPoker ?</Accordion.Header>
            <Accordion.Body>
              <p>
                We will describe it sooner in our Whitepaper, but short summary
                about QPoker game is QPoker is <br /> a 21st-century formation
                of poker games, which joints together best elements of popular
                card games and the latest state of the art technology. It is an
                entirely new game based on a 52-card deck, which maximizes
                social interaction with its modern approach to engage players.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How do I can play QPoker?</Accordion.Header>
            <Accordion.Body>
              <p className="mb-4">
                It will be easy as drinking water ! but we will put Tutorials on
                our{" "}
                <a href="https://www.youtube.com/channel/UCZeSEvAStNu29wUA3exSjXg">
                  Youtube Channel
                </a>{" "}
                and we will describe all of necessary tutorials by name and
                connected link below (coming soon).
              </p>
              <ul>
                <li>
                  <a href="https://www.youtube.com/channel/UCZeSEvAStNu29wUA3exSjXg">
                    How to Register
                  </a>
                  . (coming soon)
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCZeSEvAStNu29wUA3exSjXg">
                    How to play
                  </a>
                  . (coming soon)
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCZeSEvAStNu29wUA3exSjXg">
                    How to install QPoker Client
                  </a>
                  . (coming soon)
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCZeSEvAStNu29wUA3exSjXg">
                    How to translate Table-Hash
                  </a>
                  . (coming soon)
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>I need help !</Accordion.Header>
            <Accordion.Body>
              <p>
                If you're having difficulty or problems, Join our Telegram Group
                and send message to the Admins,Join to our Twitter account and
                send the direct message or submit a ticket from your panel.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <FooterWithoutPoweredBy />
    </div>
  );
}
