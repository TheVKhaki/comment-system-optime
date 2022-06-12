import { useEffect } from "react";
//media
import socialRes from "../images/socialRes.png";
//observer
import { useInView } from "react-intersection-observer";
//Framer motion
import { motion, useAnimation } from "framer-motion";
const SocialResponsive = () => {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();
  const [element, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [element2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });
  const [element3, inView3] = useInView({ threshold: 0.2, triggerOnce: true });
  const [element4, inView4] = useInView({ threshold: 0.2, triggerOnce: true });
  const [element5, inView5] = useInView({ threshold: 0.2, triggerOnce: true });
  const [element6, inView6] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-145px",
  });
  const [element7, inView7] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-161px",
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (inView2) {
      controls2.start("visible");
    }
    if (inView3) {
      controls3.start("visible");
    }
    if (inView4) {
      controls4.start("visible");
    }
    if (inView5) {
      controls5.start("visible");
    }
    if (inView6) {
      controls6.start("visible");
    }
    if (inView7) {
      controls7.start("visible");
    }
  }, [controls, inView, inView2, inView3, inView4, inView5, inView6, inView7]);

  const itemPath = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
  };

  return (
    <>
      <section className="social-responsive" id="social-res">
        <div className="header-social">
          <h2>NFT Giveaways Go Mammoth</h2>
          <p>Ride on to the Rewards</p>
        </div>
        <div className="image-social-responsive">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="a3ed14bf-ab7a-4bde-8b41-1ca0c0fa9ff9"
            viewBox="0 0 212 639"
          >
            <motion.path
              variants={itemPath}
              initial="hidden"
              animate={controls}
              fill="none"
              stroke="#e06f1f"
              strokeMiterlimit="10"
              strokeWidth="6"
              d="M106 150.26L106 639"
            ></motion.path>
            <motion.path
              variants={itemPath}
              initial="hidden"
              animate={controls2}
              fill="none"
              stroke="#e06f1f"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M106 229.76L177.48 229.76"
            ></motion.path>
            <motion.path
              variants={itemPath}
              initial="hidden"
              animate={controls3}
              fill="none"
              stroke="#e06f1f"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M103.2 250.11L34 250.11"
            ></motion.path>
            <motion.path
              variants={itemPath}
              initial="hidden"
              animate={controls4}
              fill="none"
              stroke="#e06f1f"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M108.2 353.67L176 353.67"
            ></motion.path>
            <motion.path
              ref={element6}
              variants={itemPath}
              initial="hidden"
              animate={controls5}
              fill="none"
              stroke="#e06f1f"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M103.2 374.54L35 374.54"
            ></motion.path>
            <motion.path
              variants={itemPath}
              initial="hidden"
              animate={controls6}
              fill="none"
              stroke="#e06f1f"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M108.2 484.11L187.07 484.11"
            ></motion.path>
            <motion.path
              variants={itemPath}
              initial="hidden"
              animate={controls6}
              fill="none"
              stroke="#e06f1f"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M102.98 484.11L24.11 484.11"
            ></motion.path>
            <motion.path
              variants={itemPath}
              initial="hidden"
              animate={controls7}
              fill="none"
              stroke="#e06f1f"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M108.2 576.98L187.07 576.98"
            ></motion.path>
            <motion.path
              variants={itemPath}
              initial="hidden"
              animate={controls7}
              fill="none"
              stroke="#e06f1f"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M102.98 576.98L24.11 576.98"
            ></motion.path>
            <motion.path
              variants={itemPath}
              initial="hidden"
              animate={controls}
              fill="#e06f1f"
              d="M187.48 479.51H196.7V488.73H187.48z"
              transform="rotate(-45 192.087 484.115)"
            ></motion.path>
            <motion.path
              variants={itemPath}
              initial="hidden"
              animate={controls}
              fill="#e06f1f"
              d="M15.45 479.5H24.67V488.72H15.45z"
              transform="rotate(-45 20.065 484.109)"
            ></motion.path>
            <motion.path
              variants={itemPath}
              initial="hidden"
              animate={controls}
              fill="#e06f1f"
              d="M187.47 572.37H196.69V581.59H187.47z"
              transform="rotate(-45 192.085 576.986)"
            ></motion.path>
            <motion.path
              variants={itemPath}
              initial="hidden"
              animate={controls}
              fill="#e06f1f"
              d="M14.91 572.36H24.130000000000003V581.58H14.91z"
              transform="rotate(-45 19.517 576.966)"
            ></motion.path>
            <motion.path
              variants={itemPath}
              initial="hidden"
              animate={controls}
              fill="#e06f1f"
              d="M109 150.26L120.14 128.8 92.55 128.8 103 150.26 109 150.26z"
            ></motion.path>
          </svg>
          <img src={socialRes} alt="" ref={element} />
          <a
            href="#"
            className="text-telegram text-image-responsive"
            ref={element2}
          >
            <span>Telegram</span>
            <p>+285.02% (7d %)</p>
          </a>
          <a
            href="#"
            className="text-twitter text-image-responsive"
            ref={element3}
          >
            <span>Twitter</span>
            <p>+171.69% (7d %)</p>
          </a>
          <a
            href="#"
            className="text-youtube text-image-responsive"
            ref={element4}
          >
            <span>Youtube</span>
            <p ref={element6}>+121.10% (7d %)</p>
          </a>
          <a
            href="#"
            className="text-github text-image-responsive"
            ref={element5}
          >
            <span>Trello</span>
            <p ref={element7}>+1.12% (7d %)</p>
          </a>
          <a href="#" className="text-option-1 text-image-responsive-2">
            <span>$50,000</span>
            <p>Join Telegram</p>
          </a>
          <a href="#" className="text-option-2 text-image-responsive-2">
            <span>$75,000</span>
            <p>1st July 2022</p>
          </a>
          <a href="#" className="text-option-3 text-image-responsive-2">
            <span>$125,000</span>
            <p>16th July 2022</p>
          </a>
          <a href="#" className="text-option-4 text-image-responsive-2">
            <span>$200,000</span>
            <p>31st July 2022</p>
          </a>
        </div>
      </section>
    </>
  );
};

export default SocialResponsive;
