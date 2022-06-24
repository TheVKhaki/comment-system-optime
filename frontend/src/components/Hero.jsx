import { useEffect, useRef, useState } from "react";
//Bootstrap
import { Container, Modal, Button } from "react-bootstrap";
//media
import imageElephant from "../images/FKG.png";
import youtubeIcon from "../images/youtube.png";
// import videoElephant from "../video/FV 26.mp4";
import videoElephantPart1 from "../video/v 01_1.mp4";
import videoElephantPart2 from "../video/V 02_1.mp4";
import videoElephantPart3 from "../video/V 03_1.mp4";
import videoElephantPart4 from "../video/V 04_1.mp4";
import videoElephantPart5 from "../video/V 05_1.mp4";
// Icon
import { IconContext } from "react-icons";
import { ImPlay3 } from "react-icons/im";
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

//modal
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
          <iframe
            width="660"
            height="400"
            src="https://www.youtube.com/embed/qmVpyIX0atc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
  const durationEx = () => {
    console.log("object");
  };
  const durationBg = () => {
    const currentTimeVideo = videoElephantRef.current.currentTime;

    if (currentTimeVideo <= 22 && currentTimeVideo >= 21 && !videoShow) {
      videoElephantRef.current.currentTime = 10;
      videoElephantRef.current.play();
    }
    if (currentTimeVideo >= 10 && currentTimeVideo <= 17 && videoShow) {
      videoElephantRef.current.currentTime = 21;
      videoElephantRef.current.play();
    }
    if (currentTimeVideo >= 25 && videoShow) {
      videoElephantRef.current.currentTime = 22;
      videoElephantRef.current.play();
    }
  };

  const EndVideoHandler = () => {
    videoElephantRef.current.classList.remove("video-1");
    videoElephantRef.current.classList.add("video-2");
    videoElephantRef2.current.classList.add("video-1");
    videoElephantRef2.current.play();
    // videoElephantRef.current.currentTime = 10;
    // videoElephantRef.current.play();
  };
  const EndVideo2Handler = () => {
    if (videoShow) {
      videoElephantRef2.current.classList.remove("video-1");
      videoElephantRef3.current.classList.add("video-1");
      videoElephantRef3.current.play();
      videoElephantRef2.current.currentTime = 0;
    } else {
      videoElephantRef2.current.currentTime = 0;
      videoElephantRef2.current.play();
    }
  };
  const EndVideo3Handler = () => {
    videoElephantRef3.current.classList.remove("video-1");
    videoElephantRef3.current.currentTime = 0;
    videoElephantRef4.current.classList.add("video-1");
    videoElephantRef4.current.play();
    // videoElephantRef.current.classList.remove("video-1");
    // videoElephantRef.current.classList.add("video-2");
    // videoElephantRef2.current.play();
    // videoElephantRef.current.currentTime = 10;
    // videoElephantRef.current.play();
  };
  const EndVideo4Handler = () => {
    if (videoShow) {
      videoElephantRef4.current.currentTime = 0;
      videoElephantRef4.current.play();
    } else {
      videoElephantRef4.current.classList.remove("video-1");
      videoElephantRef4.current.currentTime = 0;
      videoElephantRef5.current.classList.add("video-1");
      videoElephantRef5.current.play();
    }
  };
  const EndVideo5Handler = () => {
    videoElephantRef5.current.classList.remove("video-1");
    videoElephantRef5.current.currentTime = 0;
    videoElephantRef2.current.classList.add("video-1");
    videoElephantRef2.current.play();
  };
  const clickYoutube = () => {
    if (width >= 950 && width <= 990 && height >= 1500 && height <= 1900) {
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
    if (width >= 950) {
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
    if (width <= 950) {
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
          {/* <div className="hero-img-elephant">
            <img src={imageElephant} alt="" ref={imgElephant} />
          </div> */}
          <Lazyload>
            {/* <video
              className="video-elephant"
              ref={videoElephantRef}
              muted
              autoPlay
              onEnded={EndHandler}
              // onEnded={endedHandler}
              onDurationChange={durationEx}
              onTimeUpdate={durationBg}
            >
              <source src={videoElephant} type="video/mp4" />
            </video> */}
            <video
              className="video-elephant video-1"
              ref={videoElephantRef}
              muted
              autoPlay
              // onEnded={EndHandler}
              onEnded={EndVideoHandler}
              // onDurationChange={durationEx}
              // onTimeUpdate={durationBg}
            >
              <source src={videoElephantPart1} type="video/mp4" />
            </video>
            <video
              className="video-elephant video-2"
              ref={videoElephantRef2}
              muted
              // onEnded={EndHandler}
              onEnded={EndVideo2Handler}
              // onDurationChange={durationEx}
              // onTimeUpdate={durationBg}
            >
              <source src={videoElephantPart2} type="video/mp4" />
            </video>
            <video
              className="video-elephant video-2"
              ref={videoElephantRef3}
              muted
              // onEnded={EndHandler}
              onEnded={EndVideo3Handler}
              // onDurationChange={durationEx}
              // onTimeUpdate={durationBg}
            >
              <source src={videoElephantPart3} type="video/mp4" />
            </video>
            <video
              className="video-elephant video-2"
              ref={videoElephantRef4}
              muted
              // onEnded={EndHandler}
              onEnded={EndVideo4Handler}
              // onDurationChange={durationEx}
              // onTimeUpdate={durationBg}
            >
              <source src={videoElephantPart4} type="video/mp4" />
            </video>
            <video
              className="video-elephant video-2"
              ref={videoElephantRef5}
              muted
              // onEnded={EndHandler}
              onEnded={EndVideo5Handler}
              // onDurationChange={durationEx}
              // onTimeUpdate={durationBg}
            >
              <source src={videoElephantPart5} type="video/mp4" />
            </video>
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
                <a href="#social-res" className="btn-hero btn-main">
                  Explore
                  <span></span>
                </a>
                {/* <IconContext.Provider value={{ color: "white", size: "3rem" }}>
                  <a href="#" className="btn-watch btn-main">
                    <ImPlay3 />
                    <span></span>
                    <img src={youtubeIcon} alt="" />
                  </a>
                </IconContext.Provider> */}
                <a href="#" className="btn-watch" onClick={clickYoutube}>
                  <img src={youtubeIcon} alt="" />
                </a>
                {/* <a href="#" className="btn-text-watch">
                  Watch Trailer
                </a> */}
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
              <iframe
                width="660"
                height="400"
                title="YouTube video player"
                src="https://www.youtube.com/embed/147ioPrSuaM"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen
              ></iframe>
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
