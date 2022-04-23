import { useEffect, useRef, useState } from "react";
//Bootstrap
import { Col, Container, Row, Modal } from "react-bootstrap";
//Media
import imageRoadMap3 from "../images/ICO.png";
import logoModalMore from "../images/logoModalMore.png";
import modalCMC from "../images/modalCMC.png";
import roadMapCMC from "../images/roadMapCMC.png";
//Framer motion
import { motion } from "framer-motion";
//Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//custom hook
import useWindowSize from "../custom hook/ResizeEvent";
//Modal Component
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="roadmap3-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="logo-header">
          <img src={logoModalMore} alt="" />
          <p>Air Drops and Give aways</p>
        </div>
        <div className="content-text">
          <p>
            In gravida elit lorem, id efficitur arcu vehicula eget. Fusce id
            nunc suscipit, iaculis ipsum tincidunt, molestie nisl. Sed tempor,
            est ut bibendum ultricies, enim libero finibus mauris, ac auctor
            nibh ligula sed nisl. Curabitur rutrum in ex eget lobortis. Fusce
            fringilla felis id interdum venenatis. Nullam eu nibh sit amet massa
            molestie viverra sit amet dapibus augue. Phasellus ut ante eget ex
            imperdiet finibus. Fusce eleifend mattis diam, nec tempus turpis
            volutpat et. Aenean varius scelerisque nulla, a dictum purus aliquet
            sit amet. Duis vestibulum mauris sed lorem fringilla, non tempus
            magna vestibulum. Morbi ac dolor nec lorem sagittis consequat
            aliquet vel augue. Quisque consequat magna quis fermentum feugiat.
            Phasellus quis velit non mi tincidunt faucibus. Donec eu tortor eu
            dui commodo placerat nec eget enim. Curabitur eget feugiat risus.
            Nullam laoreet mauris ut rutrum pellentesque. In ac finibus velit.
            Fusce pulvinar congue diam, a fringilla sapien. Aenean dolor felis,
            rutrum eleifend neque id, lacinia blandit neque. Phasellus aliquet
            sem tortor, sed ornare quam aliquet ac. Cras mattis volutpat dui,
            non congue metus dignissim nec. Nam pellentesque nulla vel dignissim
            tincidunt. In eu dolor finibus, facilisis massa ut, rhoncus leo.
            Praesent convallis sem eu elit laoreet consectetur. Pellentesque
            interdum laoreet arcu eu fermentum. Phasellus facilisis sapien a
            dictum mattis.
          </p>
        </div>
        <div className="image-CMC">
          <img src={modalCMC} alt="" />
        </div>
        <div className="roadmap-CMC">
          <div className="box-detail-1">
            <div className="box-detail">
              <p>
                In gravida elit lorem, id efficitur arcu vehicula eget. Fusce id
                nunc suscipit, iaculis ipsum tincidunt, molestie nisl. Sed
                tempor, est ut bibendum ultricies, enim libero finibus mauris,
                ac auctor nibh ligula sed nisl. Curabitur rutrum .
              </p>
            </div>
          </div>
          <div className="image-roadmap-CMC">
            <img src={roadMapCMC} alt="" />
            <div className="box-detail-2">
              <div className="box-detail">
                <p>
                  In gravida elit lorem, id efficitur arcu vehicula eget. Fusce
                  id nunc suscipit, iaculis ipsum tincidunt, molestie nisl. Sed
                  tempor, est ut bibendum ultricies, enim libero finibus mauris,
                  ac auctor nibh ligula sed nisl. Curabitur rutrum .
                </p>
              </div>
            </div>
            <div className="box-detail-3">
              <div className="box-detail">
                <p>
                  In gravida elit lorem, id efficitur arcu vehicula eget. Fusce
                  id nunc suscipit, iaculis ipsum tincidunt, molestie nisl. Sed
                  tempor, est ut bibendum ultricies, enim libero finibus mauris,
                  ac auctor nibh ligula sed nisl. Curabitur rutrum .In gravida
                  elit lorem, id efficitur arcu vehicula eget. Fusce id nunc
                  suscipit, iaculis ipsum tincidunt, molestie nisl. Sed tempor,
                  est ut bibendum ultricies, enim libero finibus mauris, ac
                  auctor nibh ligula sed nisl. Curabitur rutrum .
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const RoadMapStep3 = () => {
  const [width, height] = useWindowSize();
  const [modalShow, setModalShow] = useState(false);
  const roadMapStep3 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // if (width > 992) {
    //   ScrollTrigger.enable();
    //   gsap.fromTo(
    //     roadMapStep3.current,
    //     { opacity: 1, scale: 1 },
    //     {
    //       opacity: 0,
    //       scale: 0.5,
    //       scrollTrigger: {
    //         trigger: roadMapStep3.current,
    //         start: "center center",
    //         end: "bottom center",
    //         scrub: true,
    //       },
    //     }
    //   );
    // } else {
    //   ScrollTrigger.disable();
    //   gsap.fromTo(
    //     roadMapStep3.current,
    //     { opacity: 1, scale: 1 },
    //     {
    //       opacity: 1,
    //       scale: 1,
    //       scrollTrigger: {
    //         trigger: roadMapStep3.current,
    //         start: "center center",
    //         end: "bottom center",
    //         scrub: true,
    //       },
    //     }
    //   );
    // }
  }, [width]);
  return (
    <>
      <section className="roadmap-step3 roadmap">
        <div ref={roadMapStep3}>
          <Container>
            <div className="header-roadmap">
              <h2>RoadMap</h2>
              <p>
                Step3 <br />
                IGOs and ICOs
              </p>
            </div>
            <Row className="content-slide-3">
              <Col lg={4}>
                <img src={imageRoadMap3} alt="" />
              </Col>
              <Col lg={8}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Totam culpa autem, minus explicabo blanditiis ex modi
                  architecto commodi consequatur. Quia earum architecto ipsum
                  veritatis sed. Dolorum aperiam eaque excepturi saepe? Quaerat
                  optio aut ipsum alias amet aliquid non excepturi praesentium
                  ea impedit architecto temporibus magni sapiente sed rerum eum
                  accusantium esse hic earum, odio dolores distinctio. Facere
                  assumenda libero, voluptatum excepturi, veritatis dignissimos
                  et sit commodi illum minus soluta, esse consectetur numquam
                  nobis eaque deleniti?
                </p>
                <Row>
                  <Col lg={6} xs={12}>
                    <div className="roadmap-date roadmap-date-3">
                      <p>
                        2022 <br />
                        feb-mar
                      </p>
                    </div>
                  </Col>
                  <Col lg={6} xs={12} className="d-flex justify-content-center">
                    <div className="btn-slide btn-slide-3">
                      <a onClick={() => setModalShow(true)}>More InforMation</a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </section>
    </>
  );
};

export default RoadMapStep3;
