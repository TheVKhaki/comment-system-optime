import { useEffect, useState } from "react";
//scroll observer
import { useInView, InView } from "react-intersection-observer";
//animation library
import { motion } from "framer-motion";
//media
import videoLogo from "../video/Logo_El_Motion_Ed01_2.webm";
import imageEX from "../images/01 LOGO SVG-03.svg";
//bootstrap
import { Col, Container, Row } from "react-bootstrap";
//icon
import { IconContext } from "react-icons";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
//apifake
import { memberTeam } from "../apifake";
const AboutUS = () => {
  //scroll animation
  const { ref, inView, entry } = useInView();

  //state team member

  const [team, setTeam] = useState(memberTeam);
  //animation social media
  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  useEffect(() => {
    //video scroll play
    var frameNumber = 0, // start video at frame 0
      // lower numbers = faster playback
      playbackConst = 500,
      // get page height from video duration
      setHeight = document.getElementById("set-height"),
      // select video element
      vid = document.getElementById("v0");
    // var vid = $('#v0')[0]; // jquery option
    vid.addEventListener("loadedmetadata", function () {
      setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
    });
    function scrollPlay() {
      var frameNumber = window.pageYOffset / playbackConst;
      vid.currentTime = frameNumber;
      window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <div className="header-our-team">
            <h2>Our Team</h2>
          </div>
          <Row className="our-team">
            {/* map whole team */}
            {team.map((team) => (
              <Col lg="6" key={team.id}>
                <InView threshold={0.5}>
                  {({ ref, inView }) => (
                    <motion.div className="team-profile" ref={ref}>
                      <motion.div>
                        <img src={imageEX} alt="profile team qbox" />
                      </motion.div>
                      <h3>{team.nickname}</h3>
                      <p>{team.discription}</p>
                      <motion.div
                        className="social-media-profile"
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                      >
                        <IconContext.Provider
                          value={{ color: "#EFA51F", size: "25px" }}
                        >
                          <motion.a
                            href={team.telegram}
                            className="social-team-telegram"
                            variants={item}
                          >
                            <FaTelegramPlane />
                          </motion.a>
                        </IconContext.Provider>
                        <IconContext.Provider
                          value={{ color: "#EFA51F", size: "25px" }}
                        >
                          <motion.a
                            href={team.twitter}
                            className="social-team-twitter"
                            variants={item}
                          >
                            <FaTwitter />
                          </motion.a>
                        </IconContext.Provider>
                        <IconContext.Provider
                          value={{ color: "#EFA51F", size: "25px" }}
                        >
                          <motion.a
                            href={team.email}
                            className="social-team-email"
                            variants={item}
                          >
                            <MdEmail />
                          </motion.a>
                        </IconContext.Provider>
                      </motion.div>
                    </motion.div>
                  )}
                </InView>
              </Col>
            ))}
          </Row>
        </Row>
      </Container>
      <div id="set-height"></div>
      <video id="v0" tabIndex="0" autobuffer="true" preload="true">
        <source src={videoLogo} type="video/webm" />
        {/* <source
          src="https://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.webm"
          type="video/mp4"
        /> */}
      </video>
    </div>
  );
};

export default AboutUS;
