import { useEffect, useRef, useState } from "react";
//Bootstrap
import { Container, Modal } from "react-bootstrap";
//media
import youtubeIcon from "../images/youtube.png";
import videoElephantPart1 from "../video/P01.webm";
import videoElephantPart2 from "../video/P02.webm";
import videoElephantPart3 from "../video/P03.webm";
import videoElephantPart4 from "../video/P04.webm";
import videoElephantPart5 from "../video/P05.webm";
// Icon
//responsive
import { useMediaQuery } from "react-responsive";
import { IconContext } from "react-icons";
import { MdOutlineClose } from "react-icons/md";
//Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//lozyload
import Lazyload from "../HOC/Lazyload";
//custom hook
import useWindowSize from "../custom hook/ResizeEvent";
function TextHero({ children }) {
  return <div className="box">{children}</div>;
}
function Btnn({ children }) {
  return <div className="btns-hero">{children}</div>;
}

//modal youtube
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="youtube-modal"
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <div className="youtube-video">
          <div className="close-btn-youtube">
            <IconContext.Provider value={{ color: "white", size: "3rem" }}>
              <a href="#" onClick={props.onHide}>
                <MdOutlineClose />
              </a>
            </IconContext.Provider>
          </div>
          {props.show && (
            <iframe
              width="660"
              height="400"
              title="YouTube video player"
              src="https://www.youtube.com/embed/147ioPrSuaM"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}

const Hero = () => {
  const [width, height] = useWindowSize();
  const [modalShow, setModalShow] = useState(false);
  const imgElephant = useRef();
  const homeText = useRef();
  const q = gsap.utils.selector(homeText);
  const tl = useRef();
  const sections = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      imgElephant.current,
      { x: "100", scale: 0.95, y: "30" },
      { x: "0", y: "0", scale: 1, duration: 2 }
    );

    tl.current = gsap
      .timeline()
      .to(q(".box"), {
        y: "-100",
        opacity: 1,
        duration: 1,
        ease: "power1.out",
      })
      .to(
        q(".btns-hero"),
        {
          y: "-100",
          opacity: 1,
          duration: 1,
          ease: "power1.out",
        },
        "-=0.6"
      );
  }, []);
  //video bg and video youtube
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const [videoShow, setVideoShow] = useState(false);
  const videoElephantRef = useRef();
  const videoElephantRef2 = useRef();
  const videoElephantRef3 = useRef();
  const videoElephantRef4 = useRef();
  const videoElephantRef5 = useRef();
  //iframe
  const iframeStop = () => {
    const iframe = document.querySelector(".youtube-video iframe");
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  };
  const EndVideoHandler = () => {
    videoElephantRef.current.classList.remove("video-1");
    videoElephantRef.current.classList.add("video-2");
    videoElephantRef2.current.classList.add("video-1");
    videoElephantRef2.current.play();
  };
  const EndVideo2Handler = () => {
    if (videoShow) {
      videoElephantRef2.current.classList.remove("video-1");
      videoElephantRef3.current.classList.add("video-1");
      videoElephantRef3.current.play();
      setTimeout(() => {
        videoElephantRef2.current.currentTime = 0;
      }, 2000);
    } else {
      videoElephantRef2.current.currentTime = 0;
      videoElephantRef2.current.play();
    }
  };
  const EndVideo3Handler = (e) => {
    videoElephantRef3.current.classList.remove("video-1");
    setTimeout(() => {
      videoElephantRef3.current.currentTime = 0;
    }, 2000);
    videoElephantRef4.current.classList.add("video-1");
    videoElephantRef4.current.play();
  };
  const EndVideo4Handler = () => {
    if (videoShow) {
      videoElephantRef4.current.currentTime = 0;
      videoElephantRef4.current.play();
    } else {
      videoElephantRef4.current.classList.remove("video-1");
      setTimeout(() => {
        videoElephantRef4.current.currentTime = 0;
      }, 2000);
      videoElephantRef5.current.classList.add("video-1");
      videoElephantRef5.current.play();
    }
  };
  const EndVideo5Handler = () => {
    videoElephantRef5.current.classList.remove("video-1");
    videoElephantRef2.current.classList.add("video-1");
    videoElephantRef2.current.play();
    setTimeout(() => {
      videoElephantRef5.current.currentTime = 0;
    }, 2000);
  };
  //animation for click youtube
  const clickYoutube = () => {
    if (width >= 900 && width <= 990 && height >= 1500 && height <= 2000) {
      setVideoShow(true);
      gsap.to(document.querySelector(".hero-text"), {
        x: -400,
        opacity: 0,
      });
      gsap.to(document.querySelector(".hero .youtube-video"), {
        opacity: 1,
        zIndex: 2,
        delay: 1,
      });
    }
    if (width >= 900 && window.innerWidth >= 900) {
      setVideoShow(true);
      gsap.to(document.querySelector(".hero-text"), {
        x: -400,
        opacity: 0,
      });
      gsap.to(document.querySelector(".hero .youtube-video"), {
        opacity: 1,
        zIndex: 2,
        delay: 1,
      });
    }
    if (width <= 900 && window.innerWidth <= 900) {
      setModalShow(true);
    }
  };
  const closeBtnVideoYoutube = () => {
    iframeStop();
    setVideoShow(false);
    gsap.to(document.querySelector(".hero-text"), {
      x: 0,
      opacity: 1,
      delay: 0.5,
    });
    gsap.to(document.querySelector(".hero .youtube-video"), {
      opacity: 0,
      zIndex: 0,
    });
  };
  return (
    <>
      <section className="hero hero-bg" id="hero" ref={sections}>
        <Container fluid>
          <Lazyload>
            {!isTabletOrMobile && (
              <>
                <video
                  className="video-elephant video-1"
                  ref={videoElephantRef}
                  muted
                  autoPlay
                  onEnded={EndVideoHandler}
                >
                  <source src={videoElephantPart1} type="video/webm" />
                </video>
                <video
                  className="video-elephant video-2"
                  ref={videoElephantRef2}
                  muted
                  onEnded={EndVideo2Handler}
                >
                  <source src={videoElephantPart2} type="video/webm" />
                </video>
                <video
                  className="video-elephant video-2"
                  ref={videoElephantRef3}
                  muted
                  onEnded={EndVideo3Handler}
                >
                  <source src={videoElephantPart3} type="video/webm" />
                </video>
                <video
                  className="video-elephant video-2"
                  ref={videoElephantRef4}
                  muted
                  onEnded={EndVideo4Handler}
                >
                  <source src={videoElephantPart4} type="video/webm" />
                </video>
                <video
                  className="video-elephant video-2"
                  ref={videoElephantRef5}
                  muted
                  onEnded={EndVideo5Handler}
                >
                  <source src={videoElephantPart5} type="video/webm" />
                </video>
              </>
            )}
          </Lazyload>
          <Container>
            <div className="hero-text" ref={homeText}>
              <TextHero>
                <h2>
                  <span>Q</span>Poker
                  <br />
                  <span>Metaverse Quess'em Poker</span>
                </h2>
                <p>
                  Early 2000s Texas Hold’em boom was huge, QPoker will be
                  bigger. A brand new play-to-earn NFT card game which blends
                  together optimal amount of luck and skill. Compete with
                  citizens all around the world.
                </p>
              </TextHero>
              <Btnn>
                <a href="#campaigns" className="btn-hero btn-main">
                  Explore
                  <span></span>
                </a>
                <a href="#" className="btn-watch" onClick={clickYoutube}>
                  <img src={youtubeIcon} alt="" />
                </a>
              </Btnn>
            </div>
            <div className="youtube-video">
              <div className="close-btn-youtube">
                <IconContext.Provider value={{ color: "white", size: "3rem" }}>
                  <a href="#" onClick={closeBtnVideoYoutube}>
                    <MdOutlineClose />
                  </a>
                </IconContext.Provider>
              </div>
              {videoShow && (
                <iframe
                  width="660"
                  height="400"
                  loading="lazy"
                  title="YouTube video player"
                  src="https://www.youtube.com/embed/147ioPrSuaM"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </Container>
        </Container>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </section>
    </>
  );
};

export default Hero;
