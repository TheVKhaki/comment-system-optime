import { useEffect, useState } from "react";
import { useRef } from "react";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
//Media
import imageRoadMap2 from "../images/AIR.png";
import logoModalRoadMap from "../images/03-03 13.png";
import roadMapParticipate from "../images/roadmapparticipate.png";
//Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//Framer motion
import { motion } from "framer-motion";
//custom hook
import useWindowSize from "../custom hook/ResizeEvent";
function MyVerticallyCenteredModal(props) {
  const item = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        delay: 2.5,
      },
    },
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="roadmap2-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="logo-header">
          <img src={logoModalRoadMap} alt="" />
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
        <div className="roadmap-participate">
          <img src={roadMapParticipate} alt="" />
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="149"
            height="1915"
            fill="none"
            viewBox="0 0 149 1915"
          >
            <motion.path
              fill="#E28001"
              d="M89 81H1779V110H89z"
              transform="rotate(90 89 81)"
              variants={item}
              initial="hidden"
              animate="visible"
            ></motion.path>
            <circle
              cx="76"
              cy="42"
              r="30"
              fill="#000"
              stroke="#E28001"
              strokeWidth="24"
            ></circle>
            <circle
              cx="76"
              cy="340"
              r="30"
              fill="#000"
              stroke="#E28001"
              strokeWidth="24"
            ></circle>
            <circle
              cx="76"
              cy="663"
              r="30"
              fill="#000"
              stroke="#E28001"
              strokeWidth="24"
            ></circle>
            <circle
              cx="76"
              cy="1019"
              r="30"
              fill="#000"
              stroke="#E28001"
              strokeWidth="24"
            ></circle>
            <circle
              cx="76"
              cy="1357"
              r="30"
              fill="#000"
              stroke="#E28001"
              strokeWidth="24"
            ></circle>
            <circle
              cx="74.5"
              cy="1840.5"
              r="62.5"
              fill="#000"
              stroke="#E28001"
              strokeWidth="24"
            ></circle>
            <path
              fill="#fff"
              d="M66.958 1803.44c-2.094 4.47-3.295 10.45-3.295 16.4v38.83c-.892.67-1.629 1.44-2.175 2.27v-28.05C57.374 1852.85 43 1854.17 43 1870.95h17.4v2.18H43c0 3.6 3.895 6.52 8.7 6.52h8.7c0 3.15 1.364 4.35 3.263 4.35H69.1c1.9 0 3.263-1.2 3.263-4.35h2.174c0 3.15 1.364 4.35 3.263 4.35h5.438c1.9 0 3.262-1.2 3.262-4.35h8.7c4.805 0 8.7-2.92 8.7-6.52H86.5v-2.18h17.4c0-16.78-14.375-18.1-18.488-38.06v28.05c-.546-.83-1.283-1.6-2.175-2.27v-38.83c0-5.95-1.2-11.93-3.295-16.4-1.891-4.03-4.318-6.44-6.492-6.44-2.174 0-4.6 2.41-6.492 6.44zm11.93 14.22c0 .29-.115.57-.319.77-.204.21-.48.32-.769.32h-8.7c-.288 0-.565-.11-.769-.32a1.08 1.08 0 01-.319-.77c0-4.34 10.876-4.34 10.876 0z"
            ></path>
          </motion.svg>
          <div className="box-twitter box-roadmap">
            <h3>Twitter Give Away</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              commodo ligula in
            </p>
          </div>
          <div className="box-twitter-1 box-roadmap">
            <h3>Twitter Give Away</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              commodo ligula in
            </p>
          </div>
          <div className="box-telegram box-roadmap">
            <h3>Twitter Give Away</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              commodo ligula in
            </p>
          </div>
          <div className="box-qpoker box-roadmap">
            <h3>Twitter Give Away</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              commodo ligula in
            </p>
          </div>
          <div className="box-youtube box-roadmap">
            <h3>Twitter Give Away</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              commodo ligula in
            </p>
          </div>
          <div className="box-roadmap-2">
            <h3>Twitter Give Away</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              perspiciatis perferendis laboriosam magni corporis facilis
              voluptates quasi laborum quia suscipit corrupti reprehenderit
              velit eius autem tempora, itaque, amet iure. Consequatur iusto
              voluptates corporis ea atque perferendis qui eum reiciendis
              nostrum?
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const RoadMapStep2 = () => {
  const [width, height] = useWindowSize();
  const [modalShow, setModalShow] = useState(false);
  const roadMapStep2 = useRef(null);
  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    // if (width > 992) {
    //   ScrollTrigger.enable();
    //   gsap.fromTo(
    //     roadMapStep2.current,
    //     { opacity: 1, scale: 1 },
    //     {
    //       opacity: 0,
    //       scale: 0.5,
    //       scrollTrigger: {
    //         trigger: roadMapStep2.current,
    //         start: "center center",
    //         end: "bottom center",
    //         scrub: true,
    //       },
    //     }
    //   );
    // } else {
    //   ScrollTrigger.disable();
    //   gsap.fromTo(
    //     roadMapStep2.current,
    //     { opacity: 1, scale: 1 },
    //     {
    //       opacity: 1,
    //       scale: 1,
    //     }
    //   );
    // }
  }, [width]);
  return (
    <>
      <section className="roadmap-step2 roadmap">
        <div ref={roadMapStep2}>
          <Container>
            <div className="header-roadmap">
              <h2>RoadMap</h2>
              <p>
                Step2 <br />
                Air Drops and Bounty Campagins
              </p>
            </div>
            <Row className="content-slide-2-1">
              <Col lg={4}>
                <img src={imageRoadMap2} alt="" />
              </Col>
              <Col lg={8}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Impedit aliquid id laborum maiores temporibus harum, ea
                  corrupti deserunt voluptatum exercitationem. Quis maiores
                  reprehenderit, unde voluptatum, at molestiae sapiente aut
                  dignissimos perspiciatis tempora incidunt aspernatur eligendi
                  debitis quos recusandae itaque veritatis!
                </p>
              </Col>
            </Row>
            <Row className="content-slide-2-2">
              <Col lg={4}>
                <div className="roadmap-date roadmap-date-2">
                  <p>
                    2022 <br />
                    feb-mar
                  </p>
                </div>
              </Col>
              <Col lg={8}>
                <div className="btn-slide">
                  <a onClick={() => setModalShow(true)}>
                    How to be Participate
                  </a>
                </div>
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

export default RoadMapStep2;
