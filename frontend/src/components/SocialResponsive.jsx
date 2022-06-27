import { useEffect, useState } from "react";
//media
import socialRes from "../images/social-responsive.svg";
//icon
import { IconContext } from "react-icons";
import {
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
  FaTrello,
} from "react-icons/fa";
const SocialResponsive = () => {
  const [dataSocial, setDataSocial] = useState({
    telegramChannel: "",
    twitterFollowers: "",
    youtubeSubscribers: "",
  });
  useEffect(() => {
    fetch("https://stag.owl.qpoker.io/api/v1/social_growth")
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
      <section className="social-responsive" id="campaigns">
        <div className="header-social">
          <h2>NFT Giveaways Go Mammoth</h2>
          <p>Ride on to the Rewards</p>
        </div>
        <div className="image-social-responsive">
          {/* <svg
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
           */}
          <img src={socialRes} alt="" className="svg-responsive-social" />
          <a href="#" className="text-telegram text-image-responsive">
            <IconContext.Provider value={{ color: "white", size: "2.5rem" }}>
              <div href="#">
                <FaTwitter />
              </div>
            </IconContext.Provider>
            <span>Twitter</span>
            <p>
              +{dataSocial.twitterFollowers}% <span>(7d %)</span>
            </p>
          </a>
          <a href="#" className="text-twitter text-image-responsive">
            <IconContext.Provider value={{ color: "white", size: "2.5rem" }}>
              <div href="#">
                <FaTelegramPlane />
              </div>
            </IconContext.Provider>
            <span>Telegram</span>
            <p>
              +{dataSocial.telegramChannel}% <span>(7d %)</span>
            </p>
          </a>
          <a href="#" className="text-youtube text-image-responsive">
            <IconContext.Provider value={{ color: "white", size: "2.5rem" }}>
              <div href="#">
                <FaYoutube />
              </div>
            </IconContext.Provider>
            <span>Youtube</span>
            <p>
              +{dataSocial.youtubeSubscribers}% <span>(7d %)</span>
            </p>
          </a>
          <a href="#" className="text-trello text-image-responsive">
            <IconContext.Provider value={{ color: "white", size: "2.5rem" }}>
              <div href="#">
                <FaTrello />
              </div>
            </IconContext.Provider>
            <span>Trello</span>
            <p style={{ color: "white" }}>ComingSoon</p>
          </a>
          <a href="#" className="text-option-1 text-image-responsive-2">
            <span>$50,000</span>
            <p>Join Twitter</p>
          </a>
          <a href="#" className="text-option-2 text-image-responsive-2">
            <span>$75,000</span>
            <p>COMING SOON</p>
          </a>
          <a href="#" className="text-option-3 text-image-responsive-2">
            <span>$125,000</span>
            <p>COMING SOON</p>
          </a>
          <a href="#" className="text-option-4 text-image-responsive-2">
            <span>$200,000</span>
            <p>COMING SOON</p>
          </a>
        </div>
      </section>
    </>
  );
};

export default SocialResponsive;
