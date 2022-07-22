import { IconContext } from "react-icons";
import {
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
  FaTrello,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { RandomReveal } from "react-random-reveal";
import { useInView } from "react-intersection-observer";
//Gsap
import { gsap } from "gsap";

const SocialSection = () => {
  const controls = useAnimation();
  const [element, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [dataSocial, setDataSocial] = useState({
    telegramChannel: "",
    twitterFollowers: "",
    youtubeSubscribers: "",
  });
  const sections2 = useRef(null);
  const sections2Fade = useRef(null);
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  const dimondsFade = useRef();
  const elephantP1 = useRef();
  const arrayTimeAnimtion = [0, 0.5, 0.5, 1, 2.5, 3.5, 4];
  // const shift = (arg) => {
  //   for (let index = 0; index < arrayTimeAnimtion.length; index++) {
  //     arrayTimeAnimtion[index] = arrayTimeAnimtion[index] + arg;
  //   }
  // };
  // shift(1);
  const headerFadeIn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: arrayTimeAnimtion[6],
      },
    },
  };
  const iconFill = {
    hidden: {
      fill: "#000",
      opacity: 0,
    },
    visible: {
      fill: "#e28001",
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: arrayTimeAnimtion[5],
      },
    },
  };
  const iconNoFill = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        delay: arrayTimeAnimtion[3],
      },
    },
  };
  const line = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1,
        delay: arrayTimeAnimtion[4],
      },
    },
  };
  const circle = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1,
        delay: arrayTimeAnimtion[4],
      },
    },
  };
  const halfBorder = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1,
        delay: arrayTimeAnimtion[4],
      },
    },
  };
  const dimondsFadeOut = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 0,
      transition: {
        duration: 1,
        delay: arrayTimeAnimtion[5],
      },
    },
  };
  const sectionFadeIn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: arrayTimeAnimtion[1],
      },
    },
  };
  const textFadeIn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: arrayTimeAnimtion[3],
      },
    },
  };
  const iconFadeIn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: arrayTimeAnimtion[5],
      },
    },
  };
  useEffect(() => {
    gsap.to(dimondsFade.current, { opacity: 1 });
    gsap.fromTo(
      elephantP1.current,
      {
        drawSVG: "0",
      },
      {
        duration: 1,
        drawSVG: "100%",
      }
    );
  }, []);
  useEffect(() => {
    fetch("https://stag.owl.qpoker.io/api/v1/public/social-growth")
      .then((response) => response.json())
      .then((data) => socialGrowth(data));
    function socialGrowth(dataSocial) {
      const telegramGrowth =
        ((dataSocial.telegram_channel.now -
          dataSocial.telegram_channel.last_week) /
          dataSocial.telegram_channel.last_week) *
        100;
      const twitterGrowth =
        ((dataSocial.twitter_followers.now -
          dataSocial.twitter_followers.last_week) /
          dataSocial.twitter_followers.last_week) *
        100;
      const youtubeGrowth =
        ((dataSocial.youtube_subscribers.now -
          dataSocial.youtube_subscribers.last_week) /
          dataSocial.youtube_subscribers.last_week) *
        100;
      setDataSocial({
        telegramChannel: Math.abs(telegramGrowth.toFixed(1)),
        twitterFollowers: Math.abs(twitterGrowth.toFixed(1)),
        youtubeSubscribers: Math.abs(youtubeGrowth.toFixed(1)),
      });
    }
  }, []);

  return (
    <>
      <section
        className="social-section d-lg-flex d-none"
        id="social"
        ref={element}
      >
        <div ref={sections2}>
          <div ref={sections2Fade}>
            <motion.div
              variants={headerFadeIn}
              initial="hidden"
              animate={controls}
              className="header-social"
            >
              <h2>NFT Giveaways Go Mammoth</h2>
              <p>Ride on to the Rewards</p>
            </motion.div>
            <div className="circle-socials">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                data-name="Layer 1"
                viewBox="0 0 334.96 334.61"
                className="all-circle-social"
                variants={sectionFadeIn}
                initial="hidden"
                animate={controls}
              >
                <g fill="none" data-name="b07f3530-d01d-4ade-8a0b-f75baf5b416d">
                  <motion.path
                    variants={line}
                    initial="hidden"
                    animate={controls}
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M243.74 149.99L266.93 123.63 289.63 123.63"
                  ></motion.path>
                  <motion.path
                    variants={line}
                    initial="hidden"
                    animate={controls}
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M243.49 188.37L266.67 214.73 289.37 214.73"
                  ></motion.path>
                  <motion.path
                    variants={halfBorder}
                    initial="hidden"
                    animate={controls}
                    stroke="#e28001"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M27.31 41.54L63.13 41.54 63.13 80.67 27.31 80.67"
                  ></motion.path>
                  <motion.path
                    variants={halfBorder}
                    initial="hidden"
                    animate={controls}
                    stroke="#e28001"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                    d="M9.4 104.06L45.22 104.06 45.22 143.2 9.4 143.2"
                  ></motion.path>
                  <motion.path
                    variants={halfBorder}
                    initial="hidden"
                    animate={controls}
                    stroke="#e28001"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                    d="M9.4 195.16L45.22 195.16 45.22 234.29 9.4 234.29"
                  ></motion.path>
                  <motion.path
                    variants={halfBorder}
                    initial="hidden"
                    animate={controls}
                    stroke="#e28001"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                    d="M27.31 258.99L63.13 258.99 63.13 298.12 27.31 298.12"
                  ></motion.path>
                  <motion.path
                    variants={line}
                    initial="hidden"
                    animate={controls}
                    stroke="#e28001"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M204.35 100.09L243.85 60.49 271.47 60.49"
                    strokeWidth="3"
                  ></motion.path>
                  <motion.path
                    variants={line}
                    initial="hidden"
                    animate={controls}
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M204.35 238.95L243.85 278.56 271.47 278.56"
                  ></motion.path>
                  <motion.path
                    variants={line}
                    initial="hidden"
                    animate={controls}
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M91.19 149.99L68.01 123.63 45.31 123.63"
                  ></motion.path>
                  <motion.path
                    variants={line}
                    initial="hidden"
                    animate={controls}
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M91.44 188.37L68.26 214.73 45.56 214.73"
                  ></motion.path>
                  <motion.path
                    variants={line}
                    initial="hidden"
                    animate={controls}
                    stroke="#e28001"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M130.58 100.09L91.08 60.49 63.47 60.49"
                    strokeWidth="3"
                  ></motion.path>
                  <motion.path
                    variants={line}
                    initial="hidden"
                    animate={controls}
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M130.58 238.95L91.08 278.56 63.47 278.56"
                  ></motion.path>
                  <motion.circle
                    variants={circle}
                    initial="hidden"
                    animate={controls}
                    cx="289.27"
                    cy="60.49"
                    r="17.8"
                    stroke="#e28001"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></motion.circle>
                  <motion.circle
                    variants={circle}
                    initial="hidden"
                    animate={controls}
                    cx="289"
                    cy="277.28"
                    r="17.8"
                    stroke="#e28001"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></motion.circle>
                  <motion.circle
                    variants={circle}
                    initial="hidden"
                    animate={controls}
                    cx="307.43"
                    cy="123.63"
                    r="17.8"
                    stroke="#e28001"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></motion.circle>
                  <motion.circle
                    variants={circle}
                    initial="hidden"
                    animate={controls}
                    cx="307.18"
                    cy="214.73"
                    r="17.8"
                    stroke="#e28001"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></motion.circle>
                </g>
                <motion.g
                  variants={circle}
                  initial="hidden"
                  animate={controls}
                  data-name="bd72b95c-112d-4ddd-a10e-60cbdf75b41a"
                >
                  <circle
                    cx="167.48"
                    cy="169.3"
                    r="78.93"
                    fill="#101229"
                  ></circle>
                  <text
                    transform="matrix(.9 -.45 .45 .89 148.49 124.55)"
                    style={{ isolation: "isolate" }}
                    fill="#e28001"
                    fontFamily="Gadugi-Bold, Gadugi"
                    fontSize="12.715"
                    fontWeight="700"
                  >
                    P
                  </text>
                  <text
                    transform="matrix(.98 -.23 .22 .97 155.06 121.08)"
                    style={{ isolation: "isolate" }}
                    fill="#e28001"
                    fontFamily="Gadugi-Bold, Gadugi"
                    fontSize="12.715"
                    fontWeight="700"
                  >
                    O
                  </text>
                  <text
                    transform="matrix(1.01 .02 -.02 1 164.08 119.04)"
                    style={{ isolation: "isolate" }}
                    fill="#e28001"
                    fontFamily="Gadugi-Bold, Gadugi"
                    fontSize="12.715"
                    fontWeight="700"
                  >
                    K
                  </text>
                  <text
                    transform="matrix(.99 .22 -.22 .98 171.97 119.22)"
                    style={{ isolation: "isolate" }}
                    fill="#e28001"
                    fontFamily="Gadugi-Bold, Gadugi"
                    fontSize="12.715"
                    fontWeight="700"
                  >
                    E
                  </text>
                  <text
                    transform="rotate(24.41 -189.46 472.352) scale(1.01 1)"
                    style={{ isolation: "isolate" }}
                    fill="#e28001"
                    fontFamily="Gadugi-Bold, Gadugi"
                    fontSize="12.715"
                    fontWeight="700"
                  >
                    R
                  </text>
                </motion.g>
                <g
                  stroke="#e28001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  data-name="b66c3fbd-7e75-48ff-bfaf-776df8319a7f"
                >
                  <motion.path
                    fill="#e28001"
                    variants={iconFill}
                    initial="hidden"
                    animate={controls}
                    d="M224.19 134c-1.11-.09-2.22-.13-3.35-.13a42.75 42.75 0 00-22.28 6.23 43.45 43.45 0 00-7.54 5.73 57.28 57.28 0 00-2-8.91l-.3-.94a56.73 56.73 0 00-1.21-3.3c-.11-.28-.23-.56-.34-.85-.46-1.09-.86-2.16-1.38-3.21h-.1a.64.64 0 00-.08-.14 2.41 2.41 0 00-.33-.44v-.13h-.1l-.14-.11h.1c-.1-.08-.2 0-.31-.08l-.1-.12c.13 0 .36-.1.5-.15a40.91 40.91 0 0139 6.57zM149.71 127.92l-.65.92a57.74 57.74 0 00-6.26 14.64l-.15.53c-.07.23-.14.47-.2.7a47.49 47.49 0 00-6.43-4.6 43.1 43.1 0 00-26.67-6 40.65 40.65 0 0125.53-9 43.16 43.16 0 0114.83 2.81z"
                  ></motion.path>
                  <motion.path
                    fill="transparent"
                    strokeWidth="2"
                    stroke="#e28001"
                    variants={iconNoFill}
                    initial="hidden"
                    animate={controls}
                    d="M144.79 187.45q-2.82-.85-5.53-1.93a70.41 70.41 0 01-39.55-39.35 1.75 1.75 0 01.13-1.54 35.41 35.41 0 019.51-10.53h0a43.1 43.1 0 0126.67 6 42.15 42.15 0 016 4.42c-.09.32-.17.65-.26 1s-.15.64-.23 1c0 .17-.08.34-.11.51s-.15.64-.21 1v0a62.11 62.11 0 00-1.29 11.25V163.58c0 .28 0 .82.08 1.23v.43l.06.72v.9c0 .15 0 .3.05.46s0 .3.05.45l.12.91c.18 1.42.41 2.82.65 4.17l.09.46c0 .16.05.31.08.46l.09.45.27 1.33c.13.62.26 1.24.4 1.83l.15.68c.24 1 .48 2 .71 2.91l.09.34c.09.33.17.66.26 1l.15.55c.12.46.24.89.36 1.3.06.22.13.44.19.65s.09.32.13.47l.19.64.06.17v.12l.06.21a.88.88 0 01.05.15c0 .1.06.19.08.27a1.09 1.09 0 01.05.17c0 .07 0 .15.07.21a1.89 1.89 0 00.06.18c.24-.04.26.01.27.05zM233.56 144.6a1.83 1.83 0 01.15 1.61 67.67 67.67 0 01-17.22 25.22A71.68 71.68 0 01196 184.69a121.39 121.39 0 01-15.55 4.75 20.64 20.64 0 012-4.27 65.42 65.42 0 004.67-8.86l.16-.39.19-.45.24-.61h0a57 57 0 003.98-20.86 57.74 57.74 0 00-.57-8.16 42.8 42.8 0 0129.72-12c1.13 0 2.24 0 3.35.13a35.17 35.17 0 019.37 10.63z"
                  ></motion.path>
                </g>
                <g fill="#e28001" data-name="Layer 18">
                  <motion.path
                    variants={iconFill}
                    initial="hidden"
                    animate={controls}
                    d="M198.34 230.87a62.11 62.11 0 01-42.51-24 65.986 65.986 0 01-3.09-4.43c-.65-1-1.28-2.09-1.86-3.14a62.32 62.32 0 01-3.74-8c-.51-1.37-1-2.75-1.39-4.12l-.69-2.26-.32-1.12-.51-1.83-.34-1.31c-.23-.89-.47-1.85-.71-2.87l-.15-.68c-.13-.59-.26-1.2-.39-1.82l-.27-1.31-.25-1.34a81.45 81.45 0 01-.65-4.14c0-.3-.17-1.35-.17-1.35l-.13-1.33c0-.24-.1-1.14-.1-1.14 0-.4-.06-.8-.08-1.2l-.05-1.27v-.87-1.05-1a62.27 62.27 0 011.27-11.07l.21-1s.27-1.12.34-1.44.17-.64.26-1l.18-.67.15-.53a63.68 63.68 0 016.77-15.13 31.15 31.15 0 0117.48-5.2c7.57 0 14.11 2.51 16.54 4.91 1.57 3.51 3.89 8.71 4 9.11a56.38 56.38 0 012 8.71 57.68 57.68 0 01.56 8 56.1 56.1 0 01-3.82 20.45s-.38.93-.44 1.08l-.15.36a63.5 63.5 0 01-4.61 8.75 21.54 21.54 0 00-2.33 17.76l.07.23a26.51 26.51 0 0023.11 18z"
                  ></motion.path>
                  <motion.path
                    fill="transparent"
                    strokeWidth="2"
                    stroke="#e28001"
                    variants={iconNoFill}
                    initial="hidden"
                    animate={controls}
                    d="M167.59 122.25v2c7.58 0 13.6 2.56 15.71 4.5 1.45 3.25 3.66 8.19 3.92 8.84a55.67 55.67 0 01-1.22 36.46v.12l-.22.56c-.05.13-.11.26-.17.4v.05l-.12.28v.07a62.65 62.65 0 01-4.52 8.57 22.43 22.43 0 00-2.24 4.69 22.14 22.14 0 00-.2 13.91v.11l.05.16a27.49 27.49 0 0022.61 18.55l-.56 1.38-2.82 6.89a61.06 61.06 0 01-41.07-23.5 48.122 48.122 0 01-3-4.36c-.63-1-1.25-2-1.83-3.09a61.46 61.46 0 01-3.67-7.9c-.51-1.35-1-2.71-1.38-4.09v-.07-.09l-.05-.16v-.16l-.07-.22-.07-.24v-.15a1.42 1.42 0 00-.07-.22.5.5 0 000-.13v-.16l-.1-.32-.09-.3v-.11l-.1-.35-.1-.35-.09-.3-.35-1.26-.07-.27-.08-.3c-.09-.3-.17-.62-.26-1v-.32c-.24-.92-.47-1.88-.7-2.84L144 177v-.12c-.14-.59-.27-1.19-.4-1.8-.08-.43-.17-.86-.26-1.31 0-.14 0-.28-.08-.45s-.06-.28-.08-.43v-.16l-.06-.29c-.25-1.4-.47-2.77-.64-4.08 0-.29-.07-.59-.11-.89v-.46l-.05-.43-.05-.45v-.44c0-.17 0-.44-.06-.69v-.41c0-.39-.06-.79-.08-1.18s0-.53 0-.82v-.41-.88-1.01-1a61.17 61.17 0 011.25-10.88v-.07c.07-.3.13-.61.19-.89l.06-.23.06-.28c.07-.31.15-.61.22-.93s.17-.63.25-1l.18-.66.15-.52a63.1 63.1 0 016.54-14.7 30.28 30.28 0 0116.75-4.91v-2m0 0a32 32 0 00-18.23 5.49 65 65 0 00-7 15.56l-.15.53c-.07.23-.13.46-.19.7s-.17.65-.26 1-.15.64-.23 1c0 .17-.08.34-.11.51-.08.32-.14.64-.21 1a63.94 63.94 0 00-1.29 11.25v4.3c0 .28 0 .82.08 1.23v.43l.06.72v.9c0 .15 0 .3.05.46s0 .3.05.45l.12.91c.18 1.42.41 2.82.65 4.17l.09.46c0 .16.05.31.08.46l.09.45.27 1.33c.13.62.26 1.24.4 1.83l.15.68c.24 1 .48 2 .71 2.91l.09.34c.09.33.17.66.26 1l.15.55c.12.46.24.89.36 1.3.06.22.13.44.19.65s.09.32.13.47l.19.64.06.17v.12l.06.21a.88.88 0 01.05.15c0 .1.06.19.08.27a1.09 1.09 0 01.05.17c0 .07 0 .15.07.21a1.89 1.89 0 00.06.18v.15c.42 1.41.9 2.81 1.42 4.18a61.91 61.91 0 003.79 8.17c.6 1.09 1.23 2.15 1.9 3.19 1 1.55 2 3.06 3.14 4.51a62.79 62.79 0 0043.35 24.37h.08a.78.78 0 00.73-.49l3.17-7.73 1.18-2.89a.78.78 0 00-.68-1.08 25.66 25.66 0 01-22.51-17.36l-.07-.23a20.36 20.36 0 01.19-12.66 20.64 20.64 0 012-4.27 65.42 65.42 0 004.67-8.86l.16-.39.19-.45.24-.61a57 57 0 004.03-20.93 57 57 0 00-2.58-17.07c-.1-.31-4.14-9.34-4.14-9.34-2.46-2.57-9.32-5.34-17.38-5.34z"
                  ></motion.path>
                </g>
                <g
                  fill="#e28001"
                  data-name="a4bb00da-3dab-45e5-a5e5-2a4b82062ecd"
                >
                  <motion.path
                    variants={iconFill}
                    initial="hidden"
                    animate={controls}
                    d="M165.63 225.09a55 55 0 01-51.77-73.32c.48-1.35 1-2.69 1.6-4a6.14 6.14 0 0110.74 3.84 45.33 45.33 0 00-2 4.9 43.57 43.57 0 1081-4.44v-.22a6.17 6.17 0 016.15-6.15 6.09 6.09 0 014.19 1.66 54.83 54.83 0 012 5 55 55 0 01-52 72.69z"
                  ></motion.path>
                  <motion.path
                    fill="transparent"
                    strokeWidth="2"
                    stroke="#e28001"
                    variants={iconNoFill}
                    initial="hidden"
                    animate={controls}
                    d="M211.41 146.71a5.14 5.14 0 013.37 1.26c.7 1.54 1.33 3.14 1.88 4.75a53.91 53.91 0 11-101.86-.62c.46-1.27 1-2.54 1.51-3.77a5.15 5.15 0 017.28-.22 5.2 5.2 0 011.6 3.32 44.55 44.55 0 1082.63 4.38c-.46-1.35-1-2.67-1.56-3.95a5.17 5.17 0 015.15-5.15m0-2a7.15 7.15 0 00-7.15 7.15v.46a42.59 42.59 0 11-77.06-.48 7.15 7.15 0 00-12.6-4.61 56.62 56.62 0 00-1.69 4.2 55.92 55.92 0 10105.64.64 55.1 55.1 0 00-2.13-5.29 7.11 7.11 0 00-5-2.07z"
                  ></motion.path>
                </g>
                <image
                  width="65"
                  height="102"
                  transform="matrix(.24 0 0 .24 159.5 133.72)"
                  xlinkHref="data:image/png;base64,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"
                  style={{ isolation: "isolate" }}
                  data-name="ecc41a44-eb58-415b-8ab5-a82b0b5213f5"
                ></image>
                <motion.image
                  variants={dimondsFadeOut}
                  initial="hidden"
                  animate={controls}
                  className="dimonds-puls"
                  width="65"
                  height="102"
                  transform="matrix(.24 0 0 .24 159.5 133.72)"
                  xlinkHref="data:image/png;base64,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"
                ></motion.image>
              </motion.svg>
              <div className="right-circle-social">
                <div className="telegram-social socials-in-circle">
                  <a
                    href="https://twitter.com/QPoker_io"
                    className="link-social-in-circle"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="circle-icon-social">
                      <IconContext.Provider
                        value={{ size: "2.5rem", color: "white" }}
                      >
                        <motion.div
                          variants={iconFadeIn}
                          initial="hidden"
                          animate={controls}
                        >
                          <FaTwitter />
                        </motion.div>
                      </IconContext.Provider>
                    </div>
                    <motion.div
                      variants={textFadeIn}
                      initial="hidden"
                      animate={controls}
                    >
                      <span>
                        <RandomReveal
                          isPlaying={inView}
                          duration={4.6}
                          revealDuration={0.5}
                          characters="Twitter"
                        />
                      </span>
                      <div className="wrapper-detail">
                        <p>
                          {" "}
                          <RandomReveal
                            isPlaying={inView}
                            duration={4.6}
                            revealDuration={0.5}
                            characters={
                              "+" +
                              dataSocial.twitterFollowers.toString() +
                              "% (7d %)"
                            }
                          />
                        </p>
                      </div>
                    </motion.div>
                  </a>
                </div>
                <div className="twitter-social socials-in-circle">
                  <a
                    href="https://t.me/qpokerio"
                    className="link-social-in-circle"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="circle-icon-social">
                      <IconContext.Provider
                        value={{ color: "white", size: "2.5rem" }}
                      >
                        <motion.div
                          variants={iconFadeIn}
                          initial="hidden"
                          animate={controls}
                        >
                          <FaTelegramPlane />
                        </motion.div>
                      </IconContext.Provider>
                    </div>
                    <motion.div
                      variants={textFadeIn}
                      initial="hidden"
                      animate={controls}
                    >
                      <span>
                        {" "}
                        <RandomReveal
                          isPlaying={inView}
                          duration={4.6}
                          revealDuration={0.5}
                          characters="Telegram"
                        />
                      </span>
                      <div className="wrapper-detail">
                        <p>
                          {" "}
                          <RandomReveal
                            isPlaying={inView}
                            duration={4.6}
                            revealDuration={0.5}
                            characters={
                              "+" +
                              dataSocial.telegramChannel.toString() +
                              "% (7d %)"
                            }
                          />
                        </p>
                      </div>
                    </motion.div>
                  </a>
                </div>
                <div className="youtube-social socials-in-circle">
                  <a
                    href="https://youtu.be/147ioPrSuaM"
                    className="link-social-in-circle"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="circle-icon-social">
                      <IconContext.Provider
                        value={{ color: "white", size: "2.5rem" }}
                      >
                        <motion.div
                          variants={iconFadeIn}
                          initial="hidden"
                          animate={controls}
                        >
                          <FaYoutube />
                        </motion.div>
                      </IconContext.Provider>
                    </div>
                    <motion.div
                      variants={textFadeIn}
                      initial="hidden"
                      animate={controls}
                    >
                      <span>
                        {" "}
                        <RandomReveal
                          isPlaying={inView}
                          duration={4.6}
                          revealDuration={0.5}
                          characters="Youtube"
                        />
                      </span>
                      <div className="wrapper-detail">
                        <p>
                          {" "}
                          <RandomReveal
                            isPlaying={inView}
                            duration={4.6}
                            revealDuration={0.5}
                            characters={
                              "+" +
                              dataSocial.youtubeSubscribers.toString() +
                              "% (7d %)"
                            }
                          />
                        </p>
                      </div>
                    </motion.div>
                  </a>
                </div>
                <div className="trello-social socials-in-circle">
                  <a
                    href="https://trello.com/b/RsomwpDG"
                    className="link-social-in-circle"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="circle-icon-social">
                      <IconContext.Provider
                        value={{ color: "white", size: "2.5rem" }}
                      >
                        <motion.div
                          variants={iconFadeIn}
                          initial="hidden"
                          animate={controls}
                        >
                          <FaTrello />
                        </motion.div>
                      </IconContext.Provider>
                    </div>
                    <motion.div
                      variants={textFadeIn}
                      initial="hidden"
                      animate={controls}
                    >
                      <span>
                        {" "}
                        <RandomReveal
                          isPlaying={inView}
                          duration={4.6}
                          revealDuration={0.5}
                          characters="Trello"
                        />
                      </span>
                      <div className="wrapper-detail">
                        <p style={{ color: "white" }}>
                          {" "}
                          <RandomReveal
                            isPlaying={inView}
                            duration={4.6}
                            revealDuration={0.5}
                            characters="executive board"
                          />
                        </p>
                      </div>
                    </motion.div>
                  </a>
                </div>
              </div>
              <div className="left-circle-social">
                <motion.div
                  variants={textFadeIn}
                  initial="hidden"
                  animate={controls}
                  className="team-info-1 team-info-circle"
                >
                  <span>
                    {" "}
                    <RandomReveal
                      isPlaying={inView}
                      duration={4.6}
                      revealDuration={0.5}
                      characters="$50,000"
                    />
                  </span>
                  <p>
                    {" "}
                    <RandomReveal
                      isPlaying={inView}
                      duration={4.6}
                      revealDuration={0.5}
                      characters="Join Twitter"
                    />
                  </p>
                </motion.div>
                <motion.div
                  variants={textFadeIn}
                  initial="hidden"
                  animate={controls}
                  className="team-info-2 team-info-circle"
                >
                  <span>
                    {" "}
                    <RandomReveal
                      isPlaying={inView}
                      duration={4.6}
                      revealDuration={0.5}
                      characters="$75,000"
                    />
                  </span>
                  <p>
                    <RandomReveal
                      isPlaying={inView}
                      duration={4.6}
                      revealDuration={0.5}
                      characters="COMING SOON"
                    />
                  </p>
                </motion.div>
                <motion.div
                  variants={textFadeIn}
                  initial="hidden"
                  animate={controls}
                  className="team-info-3 team-info-circle"
                >
                  <span>
                    {" "}
                    <RandomReveal
                      isPlaying={inView}
                      duration={4.6}
                      revealDuration={0.5}
                      characters="$125,000"
                    />
                  </span>
                  <p>
                    <RandomReveal
                      isPlaying={inView}
                      duration={4.6}
                      revealDuration={0.5}
                      characters="COMING SOON"
                    />
                  </p>
                </motion.div>
                <motion.div
                  variants={textFadeIn}
                  initial="hidden"
                  animate={controls}
                  className="team-info-4 team-info-circle"
                >
                  <span>
                    {" "}
                    <RandomReveal
                      isPlaying={inView}
                      duration={4.6}
                      revealDuration={0.5}
                      characters="$200,000"
                    />
                  </span>
                  <p>
                    {" "}
                    <RandomReveal
                      isPlaying={inView}
                      duration={4.6}
                      revealDuration={0.5}
                      characters="COMING SOON"
                    />
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialSection;
